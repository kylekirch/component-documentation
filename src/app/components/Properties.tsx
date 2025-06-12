'use client'
import { useState } from 'react';
import Subtitle from "./blocKit/Subtitle"
import Description from './blocKit/Description';
import Prop from './Prop';
import Image from 'next/image';


const Properties = (
              props: {
              text?:string,
              propData: Array<Array<string>>,
              id?:string,
              children?: React.ReactNode,
  }) => {
  /* PROPS
    * id?:string - (Optional) An optional id attribute that the <div className="properties"> element inherits
  */
  
  /* Normalize className - defaults class to 'defaultDescription' if none provided */
  const id = props.id? props.id : "defaultProp";
  const text = props.text? props.text : "Props:"
  
  // Define the Item type
  type propItem = {
    propName: string;
    example: string;
    type: string;
    status: string;
  };

  const propData = props.propData;
  const numProps = propData.length;

  //create an array of the prop items to be displayed with their corresponding data
  const propItems: propItem[] = new Array(numProps)
  for(let i = 0; i < numProps; i++){
    propItems[i] = {
        propName: propData[i][0],
        example: propData[i][1],
        type: propData[i][2],
        status: propData[i][3]? propData[i][3]: "",
      };
  }

  const moreIcon = "/icon_down.svg"
  const lessIcon = "/icon_up.svg"
  const requiredItems = propItems.filter(item => item.status === "required");

  const [currentProps, setCurrentProps] = useState(requiredItems)
  const [currentButtonIcon, setCurrentButtonIcon] = useState(moreIcon)
  
  const handleClick = () => {
    if(currentButtonIcon === moreIcon){
        setCurrentProps(propItems)
        setCurrentButtonIcon(lessIcon)
    } else {
        setCurrentProps(requiredItems);
        setCurrentButtonIcon(moreIcon)
    }
  };

  return(
    <div className="properties" id={id}>
      <Subtitle id="underlined" text={text}/>
      <Prop 
              propName="Name" 
              example=''
              type="Type" 
              status="Status" 
            />
      {currentProps.map((prop, index) => (
        <Prop 
                propName={prop.propName}
                example={prop.example}
                type={prop.type}
                status={prop.status}
                key={index}
              />
        ))}
      {props.children}
      <Description text={
                      currentButtonIcon===moreIcon? 
                        "..."
                          :
                        ""
        }/>
      <button onClick={handleClick}>
        <Image src={currentButtonIcon} alt={"More Button "}width={25} height={25}/>
      </button>
    </div>
)};

export default Properties;