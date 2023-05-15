import { Hero } from '@/components/hero'
import { ArticlesCards } from "@/components/articles-cards"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-col items-center justify-center space-y-8">
        <Hero src={undefined} alt={undefined} />
        <h1 className="text-4xl font-bold text-center">Hello!</h1>
        <p className="text-l text-left p-2">
          Welcome to this Blog, where we will do some A/B Testing! I hope you enjoy it!
        </p>
      </section>
      <ArticlesCards />
    </main>
  )
}
