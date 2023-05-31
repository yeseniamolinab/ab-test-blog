import { experiments } from "@/data/experiments"

// In real life, this would be an API call(REST, GraphQL, etc.)
export function getRunningExperiments(slug: string): Experiment[] {
    const allExperiments: Experiment[] = experiments

    return allExperiments.filter((experiment) => {
        return experiment.slug === slug && experiment.status === "running"
    })
}

export const trackPageview = (pageView: PageView): void => {
    console.log(`--> Tracking Pageview: url: ${pageView.url} | title: ${pageView.title}`);
};


export const trackEvent = (event: AnalyticsEvent): void => {
    const { name, url, userId } = event
    console.log(`--> Tracking Event: name ${name} | url: ${url} | userId: ${userId}`);
};