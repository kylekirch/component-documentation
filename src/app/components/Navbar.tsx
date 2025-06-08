import React from "react";
import MainButton from "./MainButton"
import Hyperlink from "./Hyperlink";
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

  /*Designates the location of the 'no file attatched' error image*/
  const errorImageAddress = `/icon_error.svg`;
  /* Normalize left icon address - Defaults to errorImageAddress if none provided */
  const leftIcon = props.leftIcon? props.leftIcon: [errorImageAddress, '#']
  
  /* Normalize left button text - Defaults to "leftText" if none provided */
  const leftText = props.leftText? props.leftText: ["leftText", '#']

  /* Normalize navbar title - Defaults to "navbarTitle" if none provided */
  const navbarTitle = props.navbarTitle? props.navbarTitle: ["navbarTitle", '#'];

  /* Normalize right button text - Defaults to "rightText" if none provided */
  const rightText = props.rightText? props.rightText: ["rightText", '#'] 
  
  /* Normalize right icon address - defaults to errorImageAddress if none provided */
  const rightIcon = props.rightIcon? props.rightIcon: [errorImageAddress, '#']

  /* Normalize id - defaults class to 'defaultNavbar' if none provided */
  const id = props.id? props.id:'defaultNavbar';

  return(
    <div className="navbar" id={id}>
      <div className="navbarSection">
        {props.leftIcon? <MainButton
                            icon={leftIcon[0]}
                            href={leftIcon[1]}
                            iconWidth={35}
                            iconHeight={35}
                          />
                            :
                          <></>
                        }
        {props.leftText? <MainButton
                            buttonText={leftText[0]}
                            href={leftText[1]}
                          />
                            :
                          <></>
                        }
      </div>
      <div className="navbarSection">
        {props.navbarTitle? <Hyperlink 
                                linkText={navbarTitle[0]} 
                                href={navbarTitle[1]}
                                id={"text"}
                              />
                                
                              :
                            <></>
                          }
      </div>
      <div className="navbarSection">
        {props.rightText? <MainButton
                            buttonText={rightText[0]}
                            href={rightText[1]}
                          />
                            :
                          <></>
                        }
        {props.rightIcon? <MainButton
                            icon={rightIcon[0]}
                            href={rightIcon[1]}
                            iconWidth={35}
                            iconHeight={35}
                          />
                            :
                          <></>
                        }
        
      </div>
    </div>
)};

export default Navbar;