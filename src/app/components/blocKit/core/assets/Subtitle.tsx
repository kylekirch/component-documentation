import React from "react";

const Subtitle = (
                  props: {
                  subText?:string, 
                  id?:string
  }) => {
  /* PROPS
    * subText?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <h3> subcomponent inherits
  */
  
  /* Normalize subText - defaults text to '[Subtitle Text]' if none provided */
  const subText = props.subText? props.subText : ""
  /* Normalize id - defaults class to 'defaultSubtitle' if none provided */
  const id = props.id? props.id : "defaultSubtitle"
  
  return (
    <h3 className="subtitle" id={id}>{subText}</h3>
  )
};

export default Subtitle;