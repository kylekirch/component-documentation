import React from "react";
import Card from "./Card";
import MainTitle from "./MainTitle";

const CardDeck = (props: {
                  deckTitle?:string, 
                  cardData:Array<Array<string>>,
                  id?:string
  }) => {
  /* PROPS
    * deckTitle:string - (Required) The text displayed in the top section of the card
    * cardData:Array[Array[2]] - (Required) An array of tuples, with the [0] position being each cards header, and [1] being the corresponding body text
    * id?:string - (Optional) An optional id attribute that the <div className="cardDeck"> element inherits
  */

  /* Normalize className - defaults class to 'defaultDeck' if none provided */
  const id = props.id? props.id : "defaultDeck";
  const deckTitle = props.deckTitle? props.deckTitle : '';
  /* Extract array of card data */
  const cards = props.cardData;



  return(
    <div className="cardDeck" id={id}>
      {deckTitle? <MainTitle titleText={deckTitle}/> : <></>}
      {cards.map((card, index) => (
        <Card key={index} header={card[0]} body={card[1]} />
      ))}
    </div>
  )
};

export default CardDeck;