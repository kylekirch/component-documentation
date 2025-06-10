import styles from "./core/blocKit.module.css"

import Image from "next/image";

const Icon = (props: {
              src?:string; 
              alt?:string;
              href?:string;
              width?:number;
              height?:number;
              imgClass?:string;
              iconType?:string;
              id?:string;
  }) => {
  /* PROPS
    * src?:string -  (Required) The underlying image's file address
    * alt?:string - (Optional) The alt that will be attatched to the <Image /> (from 'react/image') Component
    * width?:number - (Optional) The width of the icon
    * height?:number - (Optional) The height of the icon
    * imgClass?:string - (Optional) The class that the <Image /> subcomponent inherits
    * id?:string -  (Optional)  A optional built-in Icon attribute - defaults to "defaultIcon"
                    (Allowed attributes: {"invertable": Inverts color on theme change})
  */

  /*Designates the location of the 'no file attatched' error image*/
  const errorImageAddress = `/icon_error.svg`;

  /* Normalize alt - Defaults text to 'Custom Icon' if none provided */  
  const alt = props.alt? props.alt : "Custom Icon"
  /* Normalize src - Checks if a src string was provided - defaults src to errorImageAddress if none provided */  
  const src = props.src? `${props.src}` : `${errorImageAddress}` //`${}` converts the string type to a usable url
  /* Validate href - Checks if a href was provided  - otherwise, defaults href = 'javascript:void(0)' */  
  const href = props.href? props.href: ''
  /* Normalize width - Defaults width to 100px if none provided */  
  const width = props.width? props.width : 100;
  /* Normalize height - Defaults height to be the same as the width if none provided */  
  const height = props.height? props.height : width;
  /* Normalize imgClass - Defaults to "none" */  
  const imgClass = props.imgClass? props.imgClass : "none";
  /* Validate iconType - Checks if a default attribute was provided and exists - otherwise, defaults to "defaultIcon" */  
  const iconType = (props.iconType==="invertable")? "invertable" : "defaultIcon";
  /* Normalize imgClass - Defaults to "none" */ 
  const id = props.id? props.id : "none";

  return(
    <div className={styles.icon} id={id}>
      {href? <a href={href}>
        <Image
                  src={src}
                  alt= {alt}
                  width={width}
                  height={height}
                  id={iconType} //assigns a predefined icon type
                  className={imgClass}
                  priority //load this before other image components
          />
      </a>
        :
      <Image
                  src={src}
                  alt= {alt}
                  width={width}
                  height={height}
                  id={iconType} //assigns a predefined icon type
                  className={imgClass}
                  priority //load this before other image components
          />}
    </div>
  )
};

export default Icon;