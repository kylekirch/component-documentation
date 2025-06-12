"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var MainButton_1 = require("./MainButton");
var Description_1 = require("./Description");
var icon_error_svg_1 = require("./core/assets/img/icon_error.svg");
var Navbar = function (props) {
    /* PROPS
      * leftIcon?:string - (Optional) The icon displayed on the far left button
      * leftText?:string - (Optional) The text desplayed on the second button
      * navbarTitle?:string - (Optional*) The text desplayed in the center of the navbar
      * leftText?:string - (Optional) The text desplayed on the second button
      * leftIcon?:string - (Optional) The icon displayed on the far left button
      * id?:string - (Optional) An optional id attribute that <div className="navbar"/> inherits
    */
    /* Normalize left icon address - Defaults to errorImageAddress if none provided */
    var leftIcon = props.leftIcon ? props.leftIcon : [icon_error_svg_1["default"], '#'];
    /* Normalize left button text - Defaults to "leftText" if none provided */
    var leftText = props.leftText ? props.leftText : ["[Text]", '#'];
    /* Normalize navbar title - Defaults to "navbarTitle" if none provided */
    var navbarTitle = props.navbarTitle ? props.navbarTitle : ["[Title]", '#'];
    /* Normalize right button text - Defaults to "rightText" if none provided */
    var rightText = props.rightText ? props.rightText : ["[Text]", '#'];
    /* Normalize right icon address - defaults to errorImageAddress if none provided */
    var rightIcon = props.rightIcon ? props.rightIcon : [icon_error_svg_1["default"], '#'];
    /* Normalize id - defaults class to 'defaultNavbar' if none provided */
    var id = props.id ? props.id : 'defaultNavbar';
    return (React.createElement("div", { className: blocKit_module_css_1["default"].navbar, id: id },
        React.createElement("div", { className: blocKit_module_css_1["default"].navbarSection },
            props.leftIcon ? React.createElement(MainButton_1["default"], { icon: leftIcon[0], href: leftIcon[1], iconWidth: 40, iconHeight: 40, id: blocKit_module_css_1["default"].icon })
                :
                    React.createElement(React.Fragment, null),
            props.leftText ? React.createElement(MainButton_1["default"], { text: leftText[0], href: leftText[1] })
                :
                    React.createElement(React.Fragment, null)),
        React.createElement("div", { className: blocKit_module_css_1["default"].navbarSection }, props.navbarTitle ? React.createElement(Description_1["default"], { text: navbarTitle[0], id: blocKit_module_css_1["default"].navbarTitle })
            :
                React.createElement(React.Fragment, null)),
        React.createElement("div", { className: blocKit_module_css_1["default"].navbarSection },
            props.rightText ? React.createElement(MainButton_1["default"], { text: rightText[0], href: rightText[1] })
                :
                    React.createElement(React.Fragment, null),
            props.rightIcon ? React.createElement(MainButton_1["default"], { icon: rightIcon[0], href: rightIcon[1], iconWidth: 40, iconHeight: 40, id: blocKit_module_css_1["default"].icon })
                :
                    React.createElement(React.Fragment, null))));
};
exports["default"] = Navbar;
