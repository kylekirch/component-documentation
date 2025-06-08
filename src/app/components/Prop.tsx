import React from "react";
import Description from "./Description";
import Hyperlink from "./Hyperlink"

const Prop = (props: {
              propName?:string; 
              example:string;
              type:string;
              status?:string;
              id?:string
  }) => {
  /* PROPS
    * header:string - (Optional IFF a 'body' is provided) The text displayed in the top section of the card
    * body:string - (Optional IFF a 'header' is provided) The description text desplayed in the bottom of the card
    * id?:string - (Optional) An optional id attribute that the <div className="card"> element inherits
  */
  const id = props.id? props.id: "defaultProp";

  const propName = props.propName? props.propName: "";

  return(
    <div className="prop" id={id}>
      <div><Hyperlink linkText={propName} id="underlined" /></div>
      
        {props.example?
        <div><pre><code>{props.example}</code></pre></div>
          :
        <div/>
      }
      <div><Description text={props.type} /></div>
      <div><Description text={props.status? props.status: ''} id="accent" /></div>
    </div>
)};

export default Prop;