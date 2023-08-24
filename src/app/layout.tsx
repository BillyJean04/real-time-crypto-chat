import { ReactNode } from "react";

import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/provider";
import { MetaMaskContextProvider } from "@/context/MetaMaskContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Crypto chat",
    description: "Real time crypto chat app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <MetaMaskContextProvider>
                    <ThemeProvider>{children}</ThemeProvider>
                </MetaMaskContextProvider>
            </body>
        </html>
    );
}
