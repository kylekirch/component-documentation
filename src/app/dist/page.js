"use strict";
exports.__esModule = true;
var page_module_css_1 = require("./page.module.css");
var MainTitle_1 = require("./components/blocKit/MainTitle");
var Subtitle_1 = require("./components/blocKit/Subtitle");
var Description_1 = require("./components//blocKit/Description");
var Card_1 = require("./components/blocKit/Card");
var CardDeck_1 = require("./components/blocKit/CardDeck");
var ContactForm_1 = require("./components/blocKit/ContactForm");
var Carousel_1 = require("./components/blocKit/Carousel");
var Hyperlink_1 = require("./components/blocKit/Hyperlink");
var image_1 = require("next/image");
var dotenv = require("dotenv");
function Home() {
    dotenv.config();
    var EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID ?
        process.env.REACT_APP_EMAILJS_USER_ID
        :
            'ERROR';
    var EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID
        :
            'ERROR';
    return (React.createElement("div", { className: page_module_css_1["default"].page },
        React.createElement("main", { className: page_module_css_1["default"].main },
            React.createElement(MainTitle_1["default"], { text: "Component Unit Test" }),
            React.createElement(Subtitle_1["default"], { text: "By Kyle" }),
            React.createElement(Description_1["default"], { text: "June 6, 2025" }),
            React.createElement("div", null,
                React.createElement(Hyperlink_1["default"], { fontSize: "24px", href: "#" },
                    React.createElement(Subtitle_1["default"], { text: "[Click Here]", id: "text" }),
                    React.createElement(image_1["default"], { src: "/icon_github.svg", width: 50, height: 50, alt: "hyperlink-img", id: "invertable" }),
                    React.createElement(Description_1["default"], { text: "Docs" }))),
            React.createElement("div", null,
                React.createElement(Card_1["default"], { header: "Card Header", body: "This is the body" },
                    React.createElement(Hyperlink_1["default"], { text: "This is a child hyperlink" },
                        React.createElement(Subtitle_1["default"], { text: "[So is this]", id: "text" })))),
            React.createElement("div", null,
                React.createElement(CardDeck_1["default"], { deckTitle: "Card Deck", cardData: [["Title", "Desc"]] },
                    React.createElement(Card_1["default"], { body: "This is the body" },
                        React.createElement(Hyperlink_1["default"], { text: "This is a child hyperlink" },
                            React.createElement(Subtitle_1["default"], { text: "[So is this]", id: "text" }))),
                    React.createElement(Card_1["default"], null))),
            React.createElement(ContactForm_1["default"], { EMAILJS_KEY: EMAILJS_USER_ID, TEMPLATE_ID: EMAILJS_TEMPLATE_ID, id: "defaultForm" }),
            React.createElement(Carousel_1["default"], { numModals: 3, modalData: [
                    ["Project 1", "Project 1 Description", "/icon_light.svg", "#proj1"],
                    ["Project 2", "Project 2 Description", "/icon_github.svg", "#proj2"],
                    ["Project 3", "Project 3 Description", "/icon_dark.svg", "#proj3"]
                ] }))));
}
exports["default"] = Home;
