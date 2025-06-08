import type { Metadata } from "next";
import { Anton, Goldman, Iceland } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

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
  title: "- Component Docs -",
  description: "Created by Kyle Kirchgessner, development began 5/27/25",
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
        <Navbar 
              leftIcon={["/icon_top.svg", '']}
              leftText={["Styles", '#styles']}
              navbarTitle={["KIRCH.wiki", '']}
              rightText={["Components", '#components']}
              rightIcon={["/icon_github.svg", '#footerActive']}
            />
        {children}
        <Footer 
              iconData= {[
                      ["icon_x.svg", "#"],
                      ["icon_insta.svg", "#"],
                      ["icon_github.svg", "#"],
                      ["icon_linkedin.svg", "#"]]}
              hyperlinkData={[
                      ["Back to Top", "#"],
                      ["Contact", "#"],
                      ["More", "#"]]}
              descriptions={[
                "© 2025 Kyle Kirchgessner",
                "All rights reserved"
              ]}
              id="footerActive"
        />
      </body>
    </html>
  );
}
