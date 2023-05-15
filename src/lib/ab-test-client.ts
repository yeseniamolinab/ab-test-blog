import { experiments } from "@/data/experiments"

// In real life, this would be an API call(REST, GraphQL, etc.)
export async function getRunningExperiments(slug: string): Promise<Experiment[]> {
    console.log('getRunningExperiments', experiments, slug);
    const allExperiments: Experiment[] = experiments

    return allExperiments.filter((experiment) => {
        return experiment.slug === slug && experiment.status === "running"
    })
}

export const trackPageview = (pageView: PageView): void => {
    console.log(`--> Tracking Pageview: url: ${pageView.url} | title: ${pageView.title}`);
};


export const trackEvent = (event: AnalyticsEvent): void => {
    console.log(`--> Tracking Event: name ${event.name} | url: ${event.url}`);
};