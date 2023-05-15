import { getExperimentConfig } from '@/lib/utils';
import { Hero } from '@/components/hero'
import { CallToAction } from './call-to-action'
import { Variant } from "./variant";
import { ArticleWrapper } from './article-wrapper';

interface ArticleAnExperiments {
    article: Article;
    experiments: UserExperiment[];
}

function Content({ content }: { content: string }) {
    return (
        <p className="text-l text-left p-8">{content}</p>
    )
}

function Title({ title }: { title: string }) {
    return (
        <h1 className="text-4xl font-bold text-center pb-8">{title}</h1>
    )
}

export function Article({ article, experiments }: ArticleAnExperiments) {
    const { title, content, heroImage, callToAction } = article;
    const { hasExperiment: titleHasExperiment, experiment: titleExperiment } = getExperimentConfig({ articleProperty: title, experiments });
    const { hasExperiment: contentHasExperiment, experiment: contentExperiment } = getExperimentConfig({ articleProperty: content, experiments });
    const { hasExperiment: heroImageHasExperiment, experiment: heroImageExperiment } = getExperimentConfig({ articleProperty: (heroImage.src as AbTest), experiments });

    return (
        <ArticleWrapper title={article.getTitle()}>
            <article className="flex min-h-screen flex-col items-center justify-start p-24">
                {titleHasExperiment
                    ? <>
                        <Variant id={'0'} userExperimentConfig={titleExperiment}>
                            <Title title={article.getTitle('0')} />
                        </Variant>
                        <Variant id={'1'} userExperimentConfig={titleExperiment}>
                            <Title title={article.getTitle('1')} />
                        </Variant>
                    </>
                    : <>
                        <Title title={article.getTitle()} />
                    </>
                }
                {heroImageHasExperiment
                    ? <>
                        <Variant id={'0'} userExperimentConfig={heroImageExperiment}>
                            <Hero src={article.getHeroImageSrc('0')} alt={heroImage.alt} />
                        </Variant>
                        <Variant id={'1'} userExperimentConfig={heroImageExperiment}>
                            <Hero src={article.getHeroImageSrc('1')} alt={heroImage.alt} />
                        </Variant>
                    </>
                    : <Hero src={article.getHeroImageSrc()} alt={heroImage.alt} />
                }
                {contentHasExperiment
                    ? <>
                        <Variant id={'0'} userExperimentConfig={contentExperiment}>
                            <Content content={article.getContent('0')} />
                        </Variant>
                        <Variant id={'1'} userExperimentConfig={contentExperiment}>
                            <Content content={article.getContent('1')} />
                        </Variant>
                    </>
                    : <Content content={article.getContent()} />
                }
                <CallToAction callToAction={callToAction} experiments={experiments} />
            </article>
        </ArticleWrapper>
    )
}
