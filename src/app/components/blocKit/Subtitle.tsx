import styles from "./core/blocKit.module.css"

const Subtitle = (
                  props: {
                  text?:string;
                  fontSize?: string; // Accepts CSS font-size values, e.g., '24px', '2rem'
                  id?:string;
                  children?: React.ReactNode;
  }) => {
  /* PROPS
    * subText?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <h3> subcomponent inherits
  */
  
  /* Normalize subText - defaults text to '[Subtitle]' if none provided */
  const text = props.text? props.text : "[Subtitle]"
  /* Normalize id - defaults class to 'defaultSubtitle' if none provided */
  const id = props.id? props.id : "defaultSubtitle"
  const fontSize = props.fontSize? props.fontSize : '24px'
  const children = props.children? props.children : <></>

  return (
    <h3 style={{ fontSize }} className={styles.subtitle} id={id}>
      {props.text? text : <></>}
      {children}
    </h3>
  )
};

export default Subtitle;