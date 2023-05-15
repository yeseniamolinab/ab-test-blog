import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const VISITOR_EXPERIMENTS_COOKIE = "web_exp";

const hasExperiment = ({ articleProperty, experiments }: { articleProperty: string | AbTest, experiments: UserExperiment[] }) => {
    return typeof articleProperty !== 'string' && experiments.find((experiment) => experiment.id === (articleProperty as AbTest).id) !== undefined;
}

const getPropertyExperiment = ({ articleProperty, experiments }: { articleProperty: string | AbTest, experiments: UserExperiment[] }) => {
    return experiments.find((experiment) => experiment.id === (articleProperty as AbTest).id);
}

export const getExperimentConfig = ({ articleProperty, experiments }: { articleProperty: string | AbTest, experiments: UserExperiment[] }) => {
    return {
        hasExperiment: hasExperiment({ articleProperty, experiments }),
        experiment: getPropertyExperiment({ articleProperty, experiments })
    };
}
