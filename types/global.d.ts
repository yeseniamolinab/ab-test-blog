export { }

declare global {
    interface Category {
        id: number;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
    }

    interface Tag {
        id: number;
        name: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
    }

    interface CallToAction {
        id?: number;
        title: string | AbTest;
        content: string | AbTest;
        getCallToActionTitle: (variant?: string) => string;
        getCallToActionContent: (variant?: string) => string;
    }

    interface HeroImage {
        src?: string | AbTest;
        alt?: string;
    }

    interface AbTest {
        id: string;
        name?: string;
        description?: string;
        control: string;
        variation: string;
    }

    interface Article {
        id?: number;
        title: AbTest | string;
        content: string | AbTest;
        slug?: string;
        createdAt?: string;
        updatedAt?: string;
        publishedAt?: string;
        heroImage: HeroImage;
        category?: Category;
        tags?: Tag[];
        callToAction: CallToAction;
        getTitle: (variant?: string) => string;
        getContent: (variant?: string) => string;
        getHeroImageSrc: (variant?: string) => string | undefined;
    }

    interface AnalyticsEvent {
        url: string;
        name: string;
        variationName: string;
        userId: string;
    }

    interface PageView {
        url: string;
        title: string;
    }

    interface Variant {
        name: string;
        id: number;
        weight: number;
    }

    interface Experiment {
        name: string;
        description: string;
        id: string;
        variants: Variant[];
        slug: string;
        status: string;
    }

    interface UserExperiment {
        id: string;
        variant: string;
    }
}