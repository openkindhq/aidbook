// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
    siteUrl: "https://aidbook.openkind.org/", // Always put "/" at the end of the URL
    author: "OpenKind",
    desc: "A collection of useful digital resources to provide aid to yourself and others in the time of need.",
    title: "Aidbook | OpenKind",
    ogImage: "images/astro-lane.png",
    keywords: "aid, handbook, global issues, openkind",
    postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
    {
        name: "Github",
        href: "https://github.com/openkindhq",
        icon: "ph:github-logo-duotone",
        title: `Find us ${SITE.author} on Github`,
        active: true
    },
    {
        name: "Instagram",
        href: "https://instagram.com/openkindhq",
        icon: "ph:instagram-logo-duotone",
        title: `Find us ${SITE.author} on Instagram`,
        active: true
    },
    {
        name: "Twitter",
        href: "https://twitter.com/openkindhq",
        icon: "ph:twitter-logo-duotone",
        title: `Find us ${SITE.author} on Twitter`,
        active: true
    },
    {
        name: "Discord",
        href: "https://discord.gg/R4wJ2TDshg",
        icon: "",
        title: `${SITE.title} on Discord`,
        active: false
    }
];
