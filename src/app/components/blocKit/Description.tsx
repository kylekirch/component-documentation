import styles from "./core/blocKit.module.css"

const Description = (
                    props: { 
                    text?:string; 
                    fontSize?: string; // Accepts CSS font-size values, e.g., '24px', '2rem'
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
  const fontSize = props.fontSize? props.fontSize : '42px'

  return (
    <p style={{ fontSize }} className={styles.description} id={id}>{text}</p>
  )
};

export default Description