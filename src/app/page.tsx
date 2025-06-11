import styles from "./page.module.css";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components//blocKit/Description";
import Card from "./components/blocKit/Card";
import CardDeck from "./components/blocKit/CardDeck";
import ContactForm from "./components/blocKit/ContactForm";
import Carousel from "./components/blocKit/Carousel";
import Hyperlink from "./components/blocKit/Hyperlink";
import Image from "next/image";
import * as dotenv from 'dotenv';

export default function Home() {
  dotenv.config();
  const EMAILJS_USER_ID = process.env.REACT_APP_EMAILJS_USER_ID? 
                                      process.env.REACT_APP_EMAILJS_USER_ID
                                      :
                                      'ERROR';
  const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID? 
                                      process.env.REACT_APP_EMAILJS_TEMPLATE_ID
                                      :
                                      'ERROR';
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainTitle text="Component Unit Test" />
        <Subtitle text="By Kyle" />
        <Description text="June 6, 2025" />
        <div>
          <Hyperlink fontSize="24px" href="#">
            <Subtitle text="[Click Here]" id="text" />
            <Image src="/icon_github.svg" width={50} height={50} alt="hyperlink-img" id="invertable"/>
            <Description text="Docs" />
          </Hyperlink>
        </div>
        <div>
        <Card header="Card Header" body="This is the body"> 
          <Hyperlink text="This is a child hyperlink">
            <Subtitle text="[So is this]" id="text"/>
          </Hyperlink>
        </Card>
        </div>
        <div>
        <CardDeck deckTitle="Card Deck" cardData={[["Title", "Desc"]]}>
          <Card body="This is the body"> 
            <Hyperlink text="This is a child hyperlink">
              <Subtitle text="[So is this]" id="text"/>
            </Hyperlink>
          </Card>
          <Card />
        </CardDeck>
        </div>
        <ContactForm   
            EMAILJS_KEY={EMAILJS_USER_ID}
            TEMPLATE_ID={EMAILJS_TEMPLATE_ID}
            id={"defaultForm"}  
        /> 
        <Carousel    
            numModals={3} 
            modalData={[ 
              ["Project 1", "Project 1 Description", "/icon_light.svg", "#proj1"], 
              ["Project 2", "Project 2 Description", "/icon_github.svg", "#proj2"], 
              ["Project 3", "Project 3 Description", "/icon_dark.svg", "#proj3"] 
            ]} 
        /> 
      </main>
    </div>
  )
}