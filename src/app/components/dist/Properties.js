'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Subtitle_1 = require("./blocKit/Subtitle");
var Description_1 = require("./blocKit/Description");
var Prop_1 = require("./Prop");
var image_1 = require("next/image");
var Properties = function (props) {
    /* PROPS
      * id?:string - (Optional) An optional id attribute that the <div className="properties"> element inherits
    */
    /* Normalize className - defaults class to 'defaultDescription' if none provided */
    var id = props.id ? props.id : "defaultProp";
    var text = props.text ? props.text : "Props:";
    var propData = props.propData;
    var numProps = propData.length;
    //create an array of the prop items to be displayed with their corresponding data
    var propItems = new Array(numProps);
    for (var i = 0; i < numProps; i++) {
        propItems[i] = {
            propName: propData[i][0],
            example: propData[i][1],
            type: propData[i][2],
            status: propData[i][3] ? propData[i][3] : ""
        };
    }
    var moreIcon = "/icon_down.svg";
    var lessIcon = "/icon_up.svg";
    var requiredItems = propItems.filter(function (item) { return item.status === "required"; });
    var _a = react_1.useState(requiredItems), currentProps = _a[0], setCurrentProps = _a[1];
    var _b = react_1.useState(moreIcon), currentButtonIcon = _b[0], setCurrentButtonIcon = _b[1];
    var handleClick = function () {
        if (currentButtonIcon === moreIcon) {
            setCurrentProps(propItems);
            setCurrentButtonIcon(lessIcon);
        }
        else {
            setCurrentProps(requiredItems);
            setCurrentButtonIcon(moreIcon);
        }
    };
    return (React.createElement("div", { className: "properties", id: id },
        React.createElement(Subtitle_1["default"], { id: "underlined", text: text }),
        React.createElement(Prop_1["default"], { propName: "Name", example: '', type: "Type", status: "Status" }),
        currentProps.map(function (prop, index) { return (React.createElement(Prop_1["default"], { propName: prop.propName, example: prop.example, type: prop.type, status: prop.status, key: index })); }),
        props.children,
        React.createElement(Description_1["default"], { text: currentButtonIcon === moreIcon ?
                "..."
                :
                    "" }),
        React.createElement("button", { onClick: handleClick },
            React.createElement(image_1["default"], { src: currentButtonIcon, alt: "More Button ", width: 25, height: 25 }))));
};
exports["default"] = Properties;
