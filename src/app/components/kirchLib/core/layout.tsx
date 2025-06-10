import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";

/* Component imports */
import Icon from "./assets/Icon";
import MainTitle from "./assets/MainTitle";
import Description from "./assets/Description";
import Subtitle from "./assets/Subtitle";


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
  title: "BlocKit, React Component Library",
  description: "Snap components together—no screws attached",
  authors: [{ name: "Kyle Kirchgessner", url: "https://kyle.kirchgessner.co" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading_Anton.variable} ${sub_Revalia.variable} ${body_Iceland.variable}`}>
        <MainTitle titleText="BlocKit, React Component Library" />
        <Description text="Snap components together - no screws attatched" />
        <Subtitle subText="By Kyle Kirchgessner" />
        <Subtitle subText="- 2025" />
        <Icon href="./assets/img/logo.svg" />
        {children}
      </body>
    </html>
  );
}
