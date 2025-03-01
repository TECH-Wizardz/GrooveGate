import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import "./globals.css";
import { getConfig } from "@/wagmi.config";
import { Providers } from "./providers";
import { Inter } from "next/font/google";
import { NavBar } from "@/modules/shared/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MetaMask SDK Quickstart",
  description: "MetaMask SDK Quickstart app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialState = cookieToInitialState(
    getConfig(),
    (await headers()).get("cookie") ?? ""
  );
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <main>
          <NavBar />
          <Providers initialState={initialState}>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
