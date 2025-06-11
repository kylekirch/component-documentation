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

export default function Home() {
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
        <Card header="Card Header" body="This is the body"> 
          <Hyperlink text="This is a child hyperlink">
            <Subtitle text="[So is this]" id="text"/>
          </Hyperlink>
        </Card>
        <CardDeck deckTitle="Card Deck" cardData={[["Title", "Desc"], ["Title", "Desc"]]}/>
        <ContactForm   
            fields={[ 
              ["Name", "text", "name"], 
              ["Email", "email", "email"], 
              ["Message", "textarea", "message"], 
            ]} 
            buttonText={"Send"} 
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