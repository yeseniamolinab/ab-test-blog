import { getExperimentConfig } from "@/lib/utils";
import { Variant } from "./variant";
import { ButtonWrapper } from "./ui/button-wrapper";


export function CallToAction({ callToAction, experiments, userId }: { callToAction: CallToAction, experiments: UserExperiment[], userId: string }) {
    const { title, content } = callToAction;
    const { hasExperiment: titleHasExperiment, experiment: titleExperiment } = getExperimentConfig({ articleProperty: title, experiments });
    const { hasExperiment: contentHasExperiment, experiment: contentExperiment } = getExperimentConfig({ articleProperty: content, experiments });
    return (
        <section className="flex flex-col items-center justify-center space-y-4">
            {contentHasExperiment
                ? <>
                    <Variant id={'0'} userExperimentConfig={contentExperiment}>
                        <p className="text-l text-left">
                            {callToAction.getCallToActionContent('0')}
                        </p>
                    </Variant>
                    <Variant id={'1'} userExperimentConfig={contentExperiment}>
                        <p className="text-l text-left">
                            {callToAction.getCallToActionContent('1')}
                        </p>
                    </Variant>
                </>
                : <>
                    <p className="text-l text-left">
                        {callToAction.getCallToActionContent()}
                    </p>
                </>
            }
            {titleHasExperiment
                ? <>
                    <Variant id={'0'} userExperimentConfig={titleExperiment}>
                        <ButtonWrapper event={{ name: 'sign_up_click', variationName: 'control', url: '', userId }}>
                            {callToAction.getCallToActionTitle('0')}
                        </ButtonWrapper>
                    </Variant>
                    <Variant id={'1'} userExperimentConfig={titleExperiment}>
                        <ButtonWrapper event={{ name: 'sign_up_click', variationName: 'variation 1', url: '', userId }}>
                            {callToAction.getCallToActionTitle('1')}
                        </ButtonWrapper>
                    </Variant>
                </>
                : <>
                    <ButtonWrapper event={{ name: 'sign_up_click', variationName: 'control', url: '', userId }}>
                        {callToAction.getCallToActionTitle()}
                    </ButtonWrapper>
                </>
            }
        </section>
    )
}
