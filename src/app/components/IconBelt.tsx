import React from "react";
import Icon from "./Icon";

const IconBelt = (props: {
                  icons:Array<string>; 
                  hyperlinks:Array<string>; 
                  id?:string;
  }) => {
  /* PROPS
    * icons:Array<string> - (Required) The text displayed in the top section of the card
    * hyperlinks:Array<string> - (Required) The text displayed in the top section of the card
    * id?:string - (Optional) An optional id attribute that the <div className="iconBelt"> subcomponent inherits
  */

  const iconSrcs = props.icons;
  const iconLinks = props.hyperlinks;
  
  const iconList = new Array(iconSrcs.length)
  iconSrcs.map((icon, index) => (
    index+1<iconLinks.length?
            iconList[index] = [icon,iconLinks[index]]
            :
            iconList[index] = [icon,"#"]
  ))

  /* Normalize id - defaults class to 'defaultBelt' if none provided */
  const id = props.id? props.id : "defaultBelt";

  return(
    <div className="iconBelt" id={id}>
      {iconList.map((icon, index) => (
          <Icon 
            key={index} 
            src={icon[0]} 
            alt={"Belt Icon"}
            href={icon[1]}
            iconType="invertable" 
            width={50}
          />
      ))}
    </div>
  )
};

export default IconBelt;