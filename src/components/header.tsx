'use client'

import Link from "next/link";
import { site } from "@/config/site";
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"
import { Nav } from "./nav";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="flex items-center justify-between w-full h-16 px-4 bg-primary-foreground">
      <section id="navigation" className="container flex h-14 items-cdenter">
        <Nav />
        <MobileNav />
      </section>
      <section id="theme" className="flex flex-1 items-center justify-between space-x-2 sm:space-x-4 md:justify-end">
        <nav className="flex items-center space-x-1">
          <Link
            href={site.links.github}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={cn(
                buttonVariants({
                  size: "sm",
                  variant: "ghost",
                }),
                "w-9 px-0"
              )}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
        </nav>
      </section>
      <ThemeToggle />
    </header>
  )
}