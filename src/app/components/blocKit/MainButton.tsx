import styles from "./core/blocKit.module.css"

import Image from "next/image";
import Subtitle from "./Subtitle";

const MainButton = (props: {
                    text?:string; 
                    fontSize?: string; // Accepts CSS font-size values, e.g., '24px', '2rem'
                    href?:string;
                    icon?:string;
                    iconWidth?:number;
                    iconHeight?:number;
                    imageID?:string;
                    id?:string;
  }) => {
  /* PROPS
    * buttonText?:string - (Optional) The text displayed on the bottom of the button
    * icon?:string - (Optional) The address of the desired icon, displayed above the optional buttonText
    * iconWidth?:string - (Optional) The width of the optional icon
    * id?:string - (Optional) The 'id' attribute that the <button /> subcomponent inherits
  */
  //add onclick?
  /* Normalize buttonText - Defaults to '' if none provided */
  const text = props.text? props.text:'';
  /* Normalize href - Defaults to '#' if none provided */
  const href = props.href? props.href:'#';
  /* Normalize icon address - Defaults to '' if none provided */
  const icon = props.icon? props.icon:'';
  /* Normalize icon width - Defaults to 50px if none provided */
  const iconWidth = props.iconWidth? props.iconWidth:50;
  /* Normalize icon height - Defaults to 50px if none provided */
  const iconHeight = props.iconHeight? props.iconHeight:50;
  /* Normalize id - defaults class to 'defaultButton' if none provided */
  const id = props.id? props.id : "defaultButton"
  const fontSize = props.fontSize? props.fontSize : '24px'

  return(
    <a href={href} className={styles.mainButtonRef}>
      <button className={styles.mainButton} id={id}>
        {icon? /* Validate icon address - Returns an empty element if none provided*/
                    <Image 
                        src={icon} 
                        alt={text +" button icon"}
                        width={iconWidth} 
                        height={iconHeight}
                        id={props.imageID}
                      />
                    :
                    <></>}
        {text? /* Validate buttonText - Returns an empty element if none provided*/
                    <Subtitle id={styles.text} fontSize={fontSize} text={text} />
                    :
                    <></>}
      </button>
    </a>
)};

export default MainButton;