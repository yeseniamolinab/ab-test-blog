import fsPromises from 'fs/promises';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import path from 'path'
import { VISITOR_EXPERIMENTS_COOKIE } from '@/lib/utils';
import { Article } from '@/components/article'

async function readFile(fileName: string): Promise<string> {
  const filePath = path.join(`${process.cwd()}/src/data`, fileName);
  const fileContent = (await fsPromises.readFile(filePath));
  return fileContent.toString();
}

async function getArticle(slug: string): Promise<Article> {
  const data = await readFile(`${slug}.json`);
  const article: Article = JSON.parse(data);
  return article;
}

function getRunningExperiments() {
  const allCookies = cookies();
  const experimentsCookie = allCookies.get(VISITOR_EXPERIMENTS_COOKIE);
  if (experimentsCookie) {
    return experimentsCookie.value.split('!') || [];
  } else {
    return [];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const data = await getArticle(slug);

  if (!data) {
    return notFound();
  }

  data.callToAction.getCallToActionContent = (variant: string = '0'): string => {
    const { content } = data.callToAction;
    return typeof content === 'string'
      ? content
      : variant === '0'
        ? content.control
        : content.variation;
  };

  data.callToAction.getCallToActionTitle = (variant: string = '0') => {
    const { title } = data.callToAction;
    return typeof title === 'string'
      ? title
      : variant === '0'
        ? title.control
        : title.variation;
  };

  data.getTitle = (variant: string = '0') => {
    const { title } = data;
    return typeof title === 'string'
      ? title
      : variant === '0'
        ? title.control
        : title.variation;
  };

  data.getContent = (variant: string = '0') => {
    const { content } = data;
    return typeof content === 'string'
      ? content
      : variant === '0'
        ? content.control
        : content.variation;
  };

  data.getHeroImageSrc = (variant: string = '0') => {
    const { heroImage: { src } } = data;
    return typeof src === 'string'
      ? src
      : variant === '0'
        ? src?.control
        : src?.variation;
  };

  const experiments = getRunningExperiments().map((experiment) => {
    const [experimentId, variantId] = experiment.split('.');
    return {
      id: experimentId,
      variant: variantId
    }
  });

  return (
    <div>
      <Article article={data} experiments={experiments} />
    </div>
  );
}
