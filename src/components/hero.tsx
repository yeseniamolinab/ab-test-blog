import Image from 'next/image'

export function Hero(props: HeroImage | undefined) {
    const { src = "https://yesimolinadev.s3.us-east-1.amazonaws.com/cover.jpg", alt = "cover photo" } = props || {}
    const srcVariant = typeof src === 'string' ? src : src.control;

    return (
        <section className="flex flex-col items-center justify-center space-y-8">
            <Image alt={alt} src={srcVariant} width={600} height={600} priority style={{ width: '100%', height: 'auto' }} />
        </section>
    )
}

