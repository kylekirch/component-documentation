import styles from "./core/blocKit.module.css"

const MainTitle = (
                  props: {
                  text?:string
                  fontSize?: string; // Accepts CSS font-size values, e.g., '24px', '2rem'
                  id?:string; 
  }) => {
  /* PROPS
    * titleText?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <h1> subcomponent inherits
  */

  const fontSize = props.fontSize? props.fontSize : '64px'
  /* Normalize titleText - defaults text to '[MainTitle Text]' if none provided */
  const text = props.text? props.text : "[MainTitle]"
  /* Normalize id - defaults id to 'defaultTitle' if none provided */
  const id = props.id? props.id : "defaultTitle";
  
  return(
    <h1 style={{ fontSize }} className={styles.mainTitle} id={id}>{text}</h1>
  )
};

export default MainTitle;