'use client'
import { trackEvent } from "@/lib/ab-test-client";
import { Button } from "@/components/ui/button";

export function ButtonWrapper({ children, event }: { children: React.ReactNode, event: AnalyticsEvent }) {
    return (
        <>
            <Button className="w-full" onClick={() => trackEvent({ ...event, url: window.location.href })}>
                {children}
            </Button>
        </>
    )
}