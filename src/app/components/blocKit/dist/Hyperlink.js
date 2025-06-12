"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var Hyperlink = function (props) {
    /* PROPS
      * linkText?:string - (Required) The text displayed
      * href?:string - (Optioinal) The destination address of the hyperlink
      * id?:string - (Optional) The id that the <a> subcomponent inherits
    */
    /* Normalize text - defaults text to '[Description Text]' if none provided */
    var text = props.text ? props.text : "";
    /* Normalize href - defaults text to '[Description Text]' if none provided */
    var href = props.href ? props.href : "";
    /* Normalize id - defaults id to 'defaultDescription' if none provided */
    var id = props.id ? props.id : "defaultDescription";
    var children = props.children ? props.children : React.createElement(React.Fragment, null);
    var fontSize = props.fontSize ? props.fontSize : '32px';
    return (React.createElement("div", { className: blocKit_module_css_1["default"].hyperlink }, props.text ?
        React.createElement("a", { style: { fontSize: fontSize }, className: blocKit_module_css_1["default"].hyperlinkChild, href: href, id: id },
            text,
            children)
        :
            React.createElement("a", { className: blocKit_module_css_1["default"].hyperlinkText, href: href, id: id }, children)));
};
exports["default"] = Hyperlink;
