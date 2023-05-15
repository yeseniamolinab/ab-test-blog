'use client';
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";

export function GhostButton({ children }: { children: React.ReactNode }) {
    return (
        <div
            className={cn(
                buttonVariants({
                    size: "sm",
                    variant: "ghost",
                }),
                "w-9 px-0"
            )}
        >{children}</div>
    )
}