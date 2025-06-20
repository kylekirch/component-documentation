import styles from "./core/blocKit.module.css"

import Image from "next/image";

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
    <div className={styles.iconBelt} id={id}>
      {iconList.map((icon, index) => (
          <a key={index} href={icon[1]}>
            <Image 
              key={index} 
              src={icon[0]} 
              alt={"Belt Icon"}
              id={styles.invertable}
              width={50}
              height={50}
            />
          </a>
      ))}
    </div>
  )
};

export default IconBelt;