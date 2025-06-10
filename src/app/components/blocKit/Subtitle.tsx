import styles from "./core/blocKit.module.css"

const Subtitle = (
                  props: {
                  subText?:string, 
                  id?:string
  }) => {
  /* PROPS
    * subText?:string - (Required) The text displayed
    * id?:string - (Optional) The id that the <h3> subcomponent inherits
  */
  
  /* Normalize subText - defaults text to '[Subtitle]' if none provided */
  const subText = props.subText? props.subText : "[Subtitle]"
  /* Normalize id - defaults class to 'defaultSubtitle' if none provided */
  const id = props.id? props.id : "defaultSubtitle"
  
  return (
    <h3 className={styles.subtitle} id={id}>{subText}</h3>
  )
};

export default Subtitle;