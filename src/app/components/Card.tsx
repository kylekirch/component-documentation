import React from "react";
import Subtitle from "./Subtitle"
import Description from "./Description"

const Card = (props: {
              header?:string, 
              body?:string,
              id?:string
              children?: React.ReactNode,
  }) => {
  /* PROPS
    * header:string - (Optional IFF a 'body' is provided) The text displayed in the top section of the card
    * body:string - (Optional IFF a 'header' is provided) The description text desplayed in the bottom of the card
    * id?:string - (Optional) An optional id attribute that the <div className="card"> element inherits
  */
  
  /* Normalize className - defaults class to 'defaultDescription' if none provided */
  const id = props.id? props.id : "defaultCard";
  const body = props.body? props.body: '';
  const header = (props.header? 
                  props.header
                    :
                  props.body? '': "[Card]");

  return(
    <div className="card" id={id}>
      {header?
          <Subtitle subText={header} id="underlined" />
            : 
          <></>
      }
      {body?
          <Description text={body}/>
                  :
                  <></>
          }
    {props.children}
    </div>
)};

export default Card;