import styles from "./core/blocKit.module.css";


const Hyperlink = (
                  props: { 
                  text?:string; 
                  fontSize?: string; // Accepts CSS font-size values, e.g., '24px', '2rem'
                  href?:string;
                  id?:string;
                  children?: React.ReactNode;
  }) => {
  /* PROPS
    * linkText?:string - (Required) The text displayed
    * href?:string - (Optioinal) The destination address of the hyperlink
    * id?:string - (Optional) The id that the <a> subcomponent inherits
  */
  
  /* Normalize text - defaults text to '[Description Text]' if none provided */
  const text = props.text? props.text : ""
  /* Normalize href - defaults text to '[Description Text]' if none provided */
  const href = props.href? props.href : ""
  /* Normalize id - defaults id to 'defaultDescription' if none provided */
  const id = props.id? props.id : "defaultDescription"
  const children = props.children? props.children : <></>
  const fontSize = props.fontSize? props.fontSize : '32px'

  return (
    <div className={styles.hyperlink}>
      {props.text? 
        <a style={{ fontSize }} className={styles.hyperlinkChild} href={href} id={id}>
          {text}
          {children}
        </a>
          :
        <a className={styles.hyperlinkText} href={href} id={id}>
            {children}
        </a>
      }
    </div>
  )
};

export default Hyperlink;