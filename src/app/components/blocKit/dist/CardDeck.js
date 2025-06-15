"use strict";
exports.__esModule = true;
var blocKit_module_css_1 = require("./core/blocKit.module.css");
var Card_1 = require("./Card");
var MainTitle_1 = require("./MainTitle");
var CardDeck = function (props) {
    /* PROPS
      * deckTitle:string - (Required) The text displayed in the top section of the card
      * cardData:Array[Array[2]] - (Required) An array of tuples, with the [0] position being each cards header, and [1] being the corresponding body text
      * id?:string - (Optional) An optional id attribute that the <div className="cardDeck"> element inherits
    */
    /* Normalize className - defaults class to 'defaultDeck' if none provided */
    var id = props.id ? props.id : "defaultDeck";
    var deckTitle = props.deckTitle ? props.deckTitle : '';
    /* Extract array of card data */
    var cards = props.cardData ? props.cardData : [[]];
    var children = props.children ? props.children : React.createElement(React.Fragment, null);
    return (React.createElement("div", { className: blocKit_module_css_1["default"].cardDeck, id: id },
        deckTitle ? React.createElement(MainTitle_1["default"], { text: deckTitle }) : React.createElement(React.Fragment, null),
        props.cardData ? cards.map(function (card, index) { return (React.createElement(Card_1["default"], { key: index, header: card[0], body: card[1] })); }) : React.createElement(React.Fragment, null),
        props.children ?
            children
            :
                React.createElement(React.Fragment, null)));
};
exports["default"] = CardDeck;
