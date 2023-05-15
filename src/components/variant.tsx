const showVariant = (id: string, userCurrentVariantId: string) => {
    return id === userCurrentVariantId;
}

export function Variant({ id, userExperimentConfig, children }: { id: string, userExperimentConfig: UserExperiment | undefined, children: React.ReactNode }) {
    const userCurrentVariantId = userExperimentConfig?.variant || '0';
    return (
        <>
            {showVariant(id, userCurrentVariantId) && children}
        </>
    )
}
