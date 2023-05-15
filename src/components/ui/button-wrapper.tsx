'use client'
import { useState, useEffect } from "react"
import { trackEvent } from "@/lib/ab-test-client";
import { Button } from "@/components/ui/button";
//Tracking Event: name ${event.name} | experimentName: ${event.experimentName} | variationName: ${event.variationName}`);
export function ButtonWrapper({ children, event }: { children: React.ReactNode, event: AnalyticsEvent }) {
    const [tracked, setTrackedEvent] = useState(false);

    useEffect(() => {
        let isMounted = true;
        if (isMounted && !tracked) {
            trackEvent({ ...event, url: window.location.href })
            setTrackedEvent(true);
        }
        return () => {
            isMounted = false;
        }
    }, [tracked]);
    return (
        <>
            <Button className="w-full" onClick={() => trackEvent({ ...event, url: window.location.href })}>
                {children}
            </Button>
        </>
    )
}