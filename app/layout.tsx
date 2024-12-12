import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import localFont from "next/font/local";
import "./globals.css";
import BottomNavigation from "./components/BottomNavigation";

const defaultUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    metadataBase: new URL(defaultUrl),
    title: "Next.js and Supabase Starter Kit",
    description: "The fastest way to build apps with Next.js and Supabase",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link href="fontawesome/css/fontawesome.css" rel="stylesheet" />
                <link href="fontawesome/css/brands.css" rel="stylesheet" />
                <link href="fontawesome/css/solid.css" rel="stylesheet" />
                <link href="fontawesome/css/sharp-thin.css" rel="stylesheet" />
                <link
                    href="fontawesome/css/duotone-thin.css"
                    rel="stylesheet"
                />
                <link
                    href="fontawesome/css/sharp-duotone-thin.css"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col`}>
                <div className="grow">{children}</div>
                <BottomNavigation />
            </body>
        </html>
    );
}
