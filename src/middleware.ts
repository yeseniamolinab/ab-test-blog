import { getRunningExperiments } from '@/lib/ab-test-client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { VISITOR_EXPERIMENTS_COOKIE } from '@/lib/utils';

function assingVariant(experiment: Experiment) {
  let random = Math.random() * 100;
  const variant = experiment.variants.find((v, i) => {
    if (v.weight >= random)
      return true;
    random -= v.weight;
  });
  return variant;
}

export async function middleware(request: NextRequest) {
  const segments = request.nextUrl.pathname.split('/');
  let res: NextResponse = NextResponse.next()
  let visitorCookie = request.cookies.get(VISITOR_EXPERIMENTS_COOKIE)
  const visitorCurrentExperiments = visitorCookie?.value.split('!') || []

  const experiments = await getRunningExperiments(segments[segments.length - 1])

  if (!visitorCookie) {
    let newVisitorExp: string[] = [];

    experiments.forEach((experiment) => {
      const variant = assingVariant(experiment);

      newVisitorExp.push(`${experiment.id}.${variant?.id}`);
    })

    res.cookies.set(VISITOR_EXPERIMENTS_COOKIE, newVisitorExp.join('!'))
  } else if (visitorCurrentExperiments.length !== experiments.length) {
    let newExperiments: string[] = [];

    experiments.forEach((experiment) => {
      if (visitorCurrentExperiments.find((exp) => exp.split('.')[0] !== experiment.id)) {
        const variant = assingVariant(experiment);

        newExperiments.push(`${experiment.id}.${variant?.id}`);
      }
      res.cookies.set(VISITOR_EXPERIMENTS_COOKIE, `${visitorCookie?.value}!${newExperiments.join('!')}`)
    })
    return res;
  }
}

// Only running the middleware on the articles pages
export const config = {
  matcher: '/articles/:path*',
}