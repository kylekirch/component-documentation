import styles from "./core/blocKit.module.css"

import MainButton from "./MainButton"
import Description from "./Description";
import errorIcon from "./core/assets/img/icon_error.svg";

const Navbar = (props: {
                leftIcon?:Array<string>;
                leftText?:Array<string>;
                navbarTitle:Array<string>;
                rightIcon?:Array<string>;
                rightText?:Array<string>;
                id?:string;
  }) => {
  /* PROPS
    * leftIcon?:string - (Optional) The icon displayed on the far left button
    * leftText?:string - (Optional) The text desplayed on the second button
    * navbarTitle?:string - (Optional*) The text desplayed in the center of the navbar
    * leftText?:string - (Optional) The text desplayed on the second button
    * leftIcon?:string - (Optional) The icon displayed on the far left button
    * id?:string - (Optional) An optional id attribute that <div className="navbar"/> inherits
  */


  /* Normalize left icon address - Defaults to errorImageAddress if none provided */
  const leftIcon = props.leftIcon? props.leftIcon: [errorIcon, '#']
  
  /* Normalize left button text - Defaults to "leftText" if none provided */
  const leftText = props.leftText? props.leftText: ["[Text]", '#']

  /* Normalize navbar title - Defaults to "navbarTitle" if none provided */
  const navbarTitle = props.navbarTitle? props.navbarTitle: ["[Title]", '#'];

  /* Normalize right button text - Defaults to "rightText" if none provided */
  const rightText = props.rightText? props.rightText: ["[Text]", '#'] 
  
  /* Normalize right icon address - defaults to errorImageAddress if none provided */
  const rightIcon = props.rightIcon? props.rightIcon: [errorIcon, '#']

  /* Normalize id - defaults class to 'defaultNavbar' if none provided */
  const id = props.id? props.id:'defaultNavbar';

  return(
    <div className={styles.navbar} id={id}>
      <div className={styles.navbarSection}>
        {props.leftIcon? <MainButton
                            icon={leftIcon[0]}
                            href={leftIcon[1]}
                            iconWidth={40}
                            iconHeight={40}
                            id={styles.icon}
                          />
                            :
                          <></>
                        }
        {props.leftText? <MainButton
                            text={leftText[0]}
                            href={leftText[1]}
                          />
                            :
                          <></>
                        }
      </div>
      <div className={styles.navbarSection}>
        {props.navbarTitle? <Description 
                                text={navbarTitle[0]} 
                                id={styles.navbarTitle}
                              />
                                
                              :
                            <></>
                          }
      </div>
      <div className={styles.navbarSection}>
        {props.rightText? <MainButton
                            text={rightText[0]}
                            href={rightText[1]}
                          />
                            :
                          <></>
                        }
        {props.rightIcon? <MainButton
                            icon={rightIcon[0]}
                            href={rightIcon[1]}
                            iconWidth={40}
                            iconHeight={40}
                            id={styles.icon}
                          />
                            :
                          <></>
                        }
        
      </div>
    </div>
)};

export default Navbar;