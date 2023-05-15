'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export function ArticlesCards() {
    return (
        <section className="flex flex-col items-center justify-center space-y-4 p-24">
            <Card>
                <CardHeader>
                    <CardTitle>Check out the Blinkist app</CardTitle>
                    <CardDescription>Don&apos;t miss your chance to try it today!</CardDescription>
                </CardHeader>
                <CardContent>
                    Article 1: This is the article content preview!
                </CardContent>
                <CardFooter>
                    <Link className={buttonVariants({ variant: "outline" })} href="/articles/check-out-the-blinkist-app">Read</Link>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Have you tried the Blinkist app?</CardTitle>
                    <CardDescription>Don&apos;t miss your chance to try it today!</CardDescription>
                </CardHeader>
                <CardContent>
                    Article 2: This is the article content preview!
                </CardContent>
                <CardFooter>
                    <Link className={buttonVariants({ variant: "outline" })} href="/articles/check-out-the-blinkist-app">Read</Link>
                </CardFooter>
            </Card>
        </section>
    )
}