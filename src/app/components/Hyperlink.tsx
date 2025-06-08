import React from "react";
import Description from "./Description";

const Hyperlink = (
                  props: { 
                  linkText?:string; 
                  href?:string;
                  id?:string
  }) => {
  /* PROPS
    * linkText?:string - (Required) The text displayed
    * href?:string - (Optioinal) The destination address of the hyperlink
    * id?:string - (Optional) The id that the <a> subcomponent inherits
  */
  
  /* Normalize text - defaults text to '[Description Text]' if none provided */
  const linkText = props.linkText? props.linkText : ""
  /* Normalize href - defaults text to '[Description Text]' if none provided */
  const href = props.href? props.href : ""
  /* Normalize id - defaults id to 'defaultDescription' if none provided */
  const id = props.id? props.id : "defaultDescription"
  
  return (
    <a className="hyperlink" href={href} ><Description text={linkText} id={id}/></a>
  )
};

export default Hyperlink