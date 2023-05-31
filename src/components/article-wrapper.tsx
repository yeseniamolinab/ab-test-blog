'use client'
import { useState, useEffect } from "react"
import { trackPageview } from "@/lib/ab-test-client";

export function ArticleWrapper({ children, title }: { children: React.ReactNode, title: string }) {
    const [pageView, setPageView] = useState(false);

    /**
     * The useEffect cleanup is a function in the useEffect Hook that allows us to tidy up our code before our component unmounts. 
     * When our code runs and reruns for every render, useEffect also cleans up after itself using the cleanup function.
     * React performs the cleanup when the component unmounts. However… effects run for every render and not just once.
     * This is why React also cleans up effects from the previous render before running the effects next time.
     * Source: https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/
     * 
     * In this piece of code, the isMounted variable is set to false when the component is unmount to avoid an attepmt to update state on an unmounted component.
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && !pageView) {
            trackPageview({ url: window.location.href, title });
            setPageView(true);
        }
        return () => {
            isMounted = false;
        }
    }, [pageView, title]);
    return (
        <>
            {children}
        </>
    )
}