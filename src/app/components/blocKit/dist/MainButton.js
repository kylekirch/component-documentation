"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var image_1 = require("next/image");
var Subtitle_1 = require("./Subtitle");
var MainButton = function (props) {
    /* PROPS
      * buttonText?:string - (Optional) The text displayed on the bottom of the button
      * icon?:string - (Optional) The address of the desired icon, displayed above the optional buttonText
      * iconWidth?:string - (Optional) The width of the optional icon
      * id?:string - (Optional) The 'id' attribute that the <button /> subcomponent inherits
    */
    //add onclick?
    /* Normalize buttonText - Defaults to '' if none provided */
    var text = props.text ? props.text : '';
    /* Normalize href - Defaults to '#' if none provided */
    var href = props.href ? props.href : '#';
    /* Normalize icon address - Defaults to '' if none provided */
    var icon = props.icon ? props.icon : '';
    /* Normalize icon width - Defaults to 50px if none provided */
    var iconWidth = props.iconWidth ? props.iconWidth : 50;
    /* Normalize icon height - Defaults to 50px if none provided */
    var iconHeight = props.iconHeight ? props.iconHeight : 50;
    /* Normalize id - defaults class to 'defaultButton' if none provided */
    var id = props.id ? props.id : "defaultButton";
    var fontSize = props.fontSize ? props.fontSize : '24px';
    return (React.createElement("a", { href: href, className: blocKit_module_css_1["default"].mainButtonRef },
        React.createElement("button", { className: blocKit_module_css_1["default"].mainButton, id: id },
            icon ? /* Validate icon address - Returns an empty element if none provided*/
                React.createElement(image_1["default"], { src: icon, alt: text + " button icon", width: iconWidth, height: iconHeight, id: props.imageID })
                :
                    React.createElement(React.Fragment, null),
            text ? /* Validate buttonText - Returns an empty element if none provided*/
                React.createElement(Subtitle_1["default"], { id: blocKit_module_css_1["default"].text, fontSize: fontSize, text: text })
                :
                    React.createElement(React.Fragment, null))));
};
exports["default"] = MainButton;
