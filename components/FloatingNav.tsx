"use client"
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconBrandX, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";

function FloatingNav() {

    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "#",
        },

        {
            title: "Check Phishing",
            icon: (
                <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/check-phishing",
        },
        {
            title: "Submit Report",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/submit-report",
        },
        {
            title: "Track Report",
            icon: (
                <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/track-report",
        },
        {
            title: "Github",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/xxehacker",
        },
        {
            title: "Portfolio",
            icon: (
                <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://mridupawan-portfolio.vercel.app/",
        },

        {
            title: "X",
            icon: (
                <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://x.com/xxehacker0x1",
        }
    ];

    return (
        <div className="mt-20 flex items-center pb-4 justify-center h-auto w-full">
            <FloatingDock
                mobileClassName="hidden"
                items={links}
                desktopClassName="bg-green-500/10 gap-5 p-3 rounded-full w-1/2 flex justify-center items-center"
            />
        </div>
    )
}

export default FloatingNav