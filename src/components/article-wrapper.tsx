'use client'
import { useState, useEffect } from "react"
import { trackPageview } from "@/lib/ab-test-client";

export function ArticleWrapper({ children, title }: { children: React.ReactNode, title: string }) {
    const [pageView, setPageView] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !pageView) {
            trackPageview({ url: window.location.href, title });
            setPageView(true);
        }
        return () => {
            isMounted = false;
        }
    }, [pageView]);
    return (
        <>
            {children}
        </>
    )
}