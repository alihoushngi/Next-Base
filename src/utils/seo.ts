import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: "Next Base | Skip setup. Start building. ⚡ | Ali Hooshangi",
  description:
    "A powerful and developer-friendly boilerplate to jump start your Next.js projects with everything already configured — just clone and start building.",
  manifest: "/manifest.webmanifest",
  authors: [
    {
      name: "Ali",
      url: "https://portfolio-v2-orcin-phi.vercel.app/",
    },
  ],
  keywords: [
    "Next.js",
    "Boilerplate",
    "SEO",
    "React",
    "Web development",
    "ali hooshangi",
    "ali houshangi",
    "علی هوشنگی",
    "frontend developer",
  ],
  // viewport: "width=device-width, initial-scale=1",
  // themeColor: "#000000",
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://next-base-puce.vercel.app/",
    siteName: "Next Base",
    title: "Next Base",
    description:
      "A powerful and developer-friendly boilerplate to jump start your Next.js projects with everything already configured — just clone and start building.",
    images: [
      {
        url: "https://next-base-puce.vercel.app/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Next Base - Boilerplate for Next.js projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Next Base",
    description:
      "A powerful and developer-friendly boilerplate to jump start your Next.js projects with everything already configured — just clone and start building.",
    creator: "@nextbase",
    images: ["https://next-base-puce.vercel.app/images/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  // manifest: "/site.webmanifest",
};
