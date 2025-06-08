'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Icon from "./Icon"
import Subtitle from './Subtitle';
import Description from './Description';

const Modal = (props: {
                        title: string
                        description: string
                        imgURL: string
                        projectURL: string
}) => {
  return(
    <div className="modalContainer">
      <Subtitle subText={props.title}/>
        <div className="modalFocus">
          <a href={props.projectURL}>
            <Image
                    className="modalImage"
                    src={props.imgURL}
                    alt={props.title+" Project preview image"}
                    width={400}
                    height={400}
                    priority
                  />
          </a>
          <Description text={props.description}/>
        </div>
    </div>
  )
}

const Carousel = (props: {
                        numModals: number //Determines the number of modals that will be generated
                        modalData: Array<Array<string>>
                        
}) => {
  // Define the Item type
  type modalItem = {
    title: string;
    description: string;
    imgURL: string;
    projectURL: string;
  };

  const modalData = props.modalData;

  //create an array of the modal items to be used and their corresponding data
  const modals: modalItem[] = new Array(props.numModals)
  for(let i = 0; i < props.numModals; i++){
    modals[i] = {
        title: modalData[i][0],
        description: modalData[i][1],
        imgURL: modalData[i][2],
        projectURL: modalData[i][3]? modalData[i][3]: "#",
      };
  }

  const [currentModal, setCurrentModal] = useState(modals[0])
  const [currentModalNum, setCurrentModalNum] = useState(0)
  const handleClickUp = () => {
    if(currentModalNum+1 < props.numModals){
        setCurrentModal(modals[currentModalNum+1])
        setCurrentModalNum(currentModalNum+1)
    } else {
        setCurrentModal(modals[0]);
        setCurrentModalNum(0)
    }
  };
  const handleClickDown = () => {
    if(currentModalNum-1 >= 0){
        setCurrentModal(modals[currentModalNum-1])
        setCurrentModalNum(currentModalNum-1)
    } else {
        setCurrentModal(modals[props.numModals-1]);
        setCurrentModalNum(props.numModals-1)
    }
  };

  return (
    <div>
      <Modal 
        title={currentModal.title}
        description={currentModal.description}
        imgURL={currentModal.imgURL}
        projectURL={currentModal.projectURL}
      />
      <div className='carouselButton'>
        <button onClick={handleClickUp}><Icon src="/icon_up.svg"/></button>
        <button onClick={handleClickDown}><Icon src="/icon_down.svg"/></button>
      </div>
    </div>
  );
}


export default Carousel