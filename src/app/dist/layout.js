"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Footer_1 = require("./components/blocKit/Footer");
var Navbar_1 = require("./components/blocKit/Navbar");
var heading_Anton = google_1.Anton({
    weight: "400",
    variable: "--font-anton",
    subsets: ["latin"]
});
var sub_Revalia = google_1.Goldman({
    weight: "400",
    variable: "--font-goldman",
    subsets: ["latin"]
});
var body_Iceland = google_1.Iceland({
    weight: "400",
    variable: "--font-iceland",
    subsets: ["latin"]
});
exports.metadata = {
    title: "blocKit Documentation",
    description: "Created by Kyle Kirchgessner, development began 5/27/25"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("head", null,
            React.createElement("link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" })),
        React.createElement("body", { className: heading_Anton.variable + " " + sub_Revalia.variable + " " + body_Iceland.variable },
            React.createElement(Navbar_1["default"], { leftIcon: ["/icon_top.svg", ''], leftText: ["Styles", '#styles'], navbarTitle: ["[DEV 0.3.0]", ''], rightText: ["Components", '#components'], rightIcon: ["/icon_github.svg", '#footerActive'] }),
            children,
            React.createElement(Footer_1["default"], { iconData: [
                    ["icon_x.svg", "#"],
                    ["icon_insta.svg", "#"],
                    ["icon_github.svg", "#"],
                    ["icon_linkedin.svg", "#"]
                ], hyperlinkData: [
                    ["Back to Top", "#"],
                    ["Contact", "#"],
                    ["More", "#"]
                ], descriptions: [
                    "© 2025 Kyle Kirchgessner",
                    "All rights reserved"
                ], id: "footerActive" }))));
}
exports["default"] = RootLayout;
