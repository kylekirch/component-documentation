'use client';
"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var react_1 = require("react");
var image_1 = require("next/image");
var Subtitle_1 = require("./Subtitle");
var Description_1 = require("./Description");
var icon_up_svg_1 = require("./core/assets/img/icon_up.svg");
var icon_down_svg_1 = require("./core/assets/img/icon_down.svg");
var Modal = function (props) {
    return (React.createElement("div", { className: blocKit_module_css_1["default"].modalContainer, id: props.id },
        React.createElement(Subtitle_1["default"], { text: props.title }),
        React.createElement("div", { className: blocKit_module_css_1["default"].modalFocus },
            React.createElement("a", { href: props.projectURL },
                React.createElement(image_1["default"], { className: blocKit_module_css_1["default"].modalImage, src: props.imgURL, alt: props.title + " modal preview image", width: 400, height: 400, priority: true })),
            React.createElement(Description_1["default"], { text: props.description }))));
};
var Carousel = function (props) {
    var id = props.id ? props.id : 'defaultCarousel';
    var modalData = props.modalData;
    //create an array of the modal items to be used and their corresponding data
    var modals = new Array(props.numModals);
    for (var i = 0; i < props.numModals; i++) {
        modals[i] = {
            title: modalData[i][0],
            description: modalData[i][1],
            imgURL: modalData[i][2],
            projectURL: modalData[i][3] ? modalData[i][3] : "#"
        };
    }
    var _a = react_1.useState(modals[0]), currentModal = _a[0], setCurrentModal = _a[1];
    var _b = react_1.useState(0), currentModalNum = _b[0], setCurrentModalNum = _b[1];
    var handleClickUp = function () {
        if (currentModalNum + 1 < props.numModals) {
            setCurrentModal(modals[currentModalNum + 1]);
            setCurrentModalNum(currentModalNum + 1);
        }
        else {
            setCurrentModal(modals[0]);
            setCurrentModalNum(0);
        }
    };
    var handleClickDown = function () {
        if (currentModalNum - 1 >= 0) {
            setCurrentModal(modals[currentModalNum - 1]);
            setCurrentModalNum(currentModalNum - 1);
        }
        else {
            setCurrentModal(modals[props.numModals - 1]);
            setCurrentModalNum(props.numModals - 1);
        }
    };
    var modalStyle = props.numModals > 1 ? 'underlined' : 'singleModal';
    return (React.createElement("div", { className: blocKit_module_css_1["default"].carousel, id: id },
        React.createElement(Modal, { title: currentModal.title, description: currentModal.description, imgURL: currentModal.imgURL, projectURL: currentModal.projectURL, id: modalStyle }),
        props.numModals > 1 ?
            React.createElement("div", { className: blocKit_module_css_1["default"].carouselButton },
                React.createElement("button", { className: blocKit_module_css_1["default"].changeButton, onClick: handleClickUp, id: "invertable" },
                    React.createElement(image_1["default"], { src: icon_up_svg_1["default"], alt: "Up button" })),
                React.createElement("button", { className: blocKit_module_css_1["default"].changeButton, onClick: handleClickDown, id: "invertable" },
                    React.createElement(image_1["default"], { src: icon_down_svg_1["default"], alt: "Down button" })))
            :
                React.createElement(React.Fragment, null)));
};
exports["default"] = Carousel;
