import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";
import Footer from "./components/blocKit/Footer";
import Navbar from "./components/blocKit/Navbar";

const heading_Anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const sub_Revalia = Goldman({
  weight: "400",
  variable: "--font-goldman",
  subsets: ["latin"],
});

const body_Iceland = Iceland({
  weight: "400",
  variable: "--font-iceland",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blocKit Unit Testing",
  description: "Created by Kyle Kirchgessner",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className={`${heading_Anton.variable} ${sub_Revalia.variable} ${body_Iceland.variable}`}>
        <Navbar navbarTitle={["[DEVELOPMENT ONLY]", '#']} leftIcon={['/icon_up.svg']} rightText={['Docs']}/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
