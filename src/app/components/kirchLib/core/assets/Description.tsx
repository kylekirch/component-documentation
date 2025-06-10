import React from "react";

const Description = (
                    props: { 
                    text?:string; 
                    id?:string
  }) => {
  /* PROPS
    * text?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <p> subcomponent inherits
  */
  
  /* Normalize text - defaults text to '[Description Text]' if none provided */
  const text = props.text? props.text : ""
  /* Normalize id - defaults id to 'defaultDescription' if none provided */
  const id = props.id? props.id : "defaultDescription"
  
  return (
    <p className="description" id={id}>{text}</p>
  )
};

export default Description