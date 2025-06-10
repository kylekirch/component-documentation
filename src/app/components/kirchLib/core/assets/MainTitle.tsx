import React from "react";

const MainTitle = (
                  props: {
                  titleText?:string
                  id?:string; 
  }) => {
  /* PROPS
    * titleText?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <h1> subcomponent inherits
  */

  /* Normalize titleText - defaults text to '[MainTitle Text]' if none provided */
  const titleText = props.titleText? props.titleText : "[titleText]"
  /* Normalize id - defaults id to 'defaultTitle' if none provided */
  const id = props.id? props.id : "defaultTitle";
  
  return(
    <h1 className="mainTitle" id={id}>{titleText}</h1>
  )
};

export default MainTitle;