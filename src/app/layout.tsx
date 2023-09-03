import { ReactNode } from "react";

import "./globals.css";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
    title: "Crypto chat",
    description: "Real time crypto chat app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={roboto.className}>
                    <ThemeProvider>{children}</ThemeProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
