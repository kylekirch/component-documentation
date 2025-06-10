import styles from "./page.module.css";
import MainTitle from "./components/blocKit/MainTitle";
import Subtitle from "./components/blocKit/Subtitle";
import Description from "./components//blocKit/Description";
import Card from "./components/blocKit/Card";
import CardDeck from "./components/blocKit/CardDeck";
import ContactForm from "./components/blocKit/ContactForm";
import Carousel from "./components/blocKit/Carousel";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainTitle titleText="Component Unit Test" />
        <Subtitle subText="By Kyle" />
        <Description text="June 6, 2025" />
        <Card header="Header" body="Body" />
        <CardDeck cardData={[["Title", "Desc"], ["Title", "Desc"]]}/>
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