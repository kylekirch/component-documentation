import styles from "./page.module.css";
import MainTitle from "./components/MainTitle";
import Subtitle from "./components/Subtitle";
import Description from "./components/Description";
import Properties from "./components/Properties";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <MainTitle titleText="React Component Documentation" id="underlined"/>
        <br id="styles"/>
        <br />
        <ul>
          <li>
            <Subtitle subText="Styles"/>
          </li>
          <li>
            <MainTitle titleText="Root Color Scheme:"/>
            <Subtitle subText="Light Mode" id="underlined" />
            <code>{`
                  --background: #ebebeb; `}<br />{`
                  --foreground: #000000; `}<br />{`
                  --accent: #470FF4; `}<br />{`
                  --hyperlink: #26C485; `}
            </code>
            <Subtitle subText="Dark Mode" id="underlined" />
            <code>{`
                  --background: #000000; `}<br />{`
                  --foreground: #ebebeb; `}<br />{`
                  --accent: #470FF4; `}<br />{`
                  --hyperlink: #26C485; `}
            </code>
            <Subtitle subText="Fonts" id="underlined" />
            <code>
              {`{ Anton, Goldman, Iceland } from "next/font/google";`}
            </code>
          </li>
          <li>
            <MainTitle titleText="Container Element Styling: " />
            <Subtitle subText="html, body" id="underlined" />
            <code>{`
              max-width: 100vw;`}<br />{`
              scroll-behavior: smooth; `}
            </code>
            <Subtitle subText="body" id="underlined" />
            <code>{`
              color: var(--foreground); `}<br />{`
              background: var(--background); `}<br />{`
              font-family: var(--font-anton), var(--font-goldman), var(--font-iceland); `}<br />{`
              -webkit-font-smoothing: antialiased; `}<br />{`
              -moz-osx-font-smoothing: grayscale;
              font-weight: 400; `}
            </code>
            <Subtitle subText="all (*)" id="underlined" />
            <code>{`
              box-sizing: border-box; `}<br />{`
              padding: 0; `}<br />{`
              margin: 0; `}
            </code>
          </li>
        </ul>
        <br id="components"/>
        <br />
        <ul>
          <li><Subtitle subText='Components' /></li>
          <li>
            <MainTitle titleText="MainTitle" />
            <Description text="Serves as primary heading/title text. Extends the <h1> class." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage: \n\n`}
                {` <MainTitle \n`}
                {`    titleText={"Trending News - Today"} \n`}
                {`    id={"defaultTitle"} \n`}
                {` /> \n\n`}
                {`(.tsx)`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` h1.mainTitle { \n`}
                {`  font-family: var(--font-anton); \n`}
                {`  font-weight: 400; \n`}
                {`  font-size: 64px; \n`}
                {`  letter-spacing: 1px; \n`}
                {`  -webkit-text-stroke-color: var(--background); \n`}
                {`  -webkit-text-stroke-width: 1px; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['titleText', 
                    'titleText={"Example Title"}',
                    'string',
                    'required'],
                  ['id', 
                    'id={"username"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Subtitle" />
            <Description text="Provides a secondary heading/title text. Extends the <h3> class." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage: \n\n`}
                {` <Subtitle \n`}
                {`    subtitleText={"Log In"} \n`}
                {`    id={"defaultSubtitle"} \n`}
                {` /> \n\n`}
                {`(.tsx)`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` h3.subTitle { \n`}
                {`  font-family: var(--font-goldman); \n`}
                {`  font-size: 56px; \n`}
                {`  font-weight: 400; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['subText', 
                    'subText={"Example subtitle"}',
                    'string',
                    'required'],
                  ['id', 
                    'id={"underlined"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Description" />
            <Description text="Serves as paragraph/description text. Extends the <p> class." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage: \n\n`}
                {` <Description \n`}
                {`    text={"These animals are unable to swim. Because of this, \n`}
                {`          they tend to stay near the shoreline when feeding"} \n`}
                {`    id={"defaultDescription"} \n`}
                {` /> \n\n`}
                {`(.tsx)`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` p.description { \n`}
                {`  font-family: var(--font-iceland); \n`}
                {`  font-size: 42px; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['text', 
                    'text={"Example description text..."}',
                    'string',
                    'required'],
                  ['id', 
                    'id={"hidden"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Icon" />
            <Description text="A custom Image component for seamless hyperlink wrapping. Uses the <Image />  
                              class from 'next/image'. If an href prop is provided, the Image is wrapped in an 
                              <a> tag, linking the Image to the address." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage: \n\n`}
                {`  <Icon \n`}
                {`    src={'/icon_light.svg'} \n`}
                {`    href={"www.xyz.com"} \n`}
                {`    width={50} \n`}
                {`    iconType={"invertable"} \n`}
                {`    id={"defaultIcon"} \n`}
                {`  /> \n\n`}
                {`(.tsx)`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` @media (prefers-color-scheme: light) { \n`}
                {`  #invertable { \n`}
                {`    filter:invert(1) \n`}
                {`  } \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['src', 
                    'src={"./icon_social.svg"}',
                    'string',
                    'required'],
                  ['href', 
                    'href={"www.xyz.com"}',
                    'string',
                    'required'],
                  ['alt', 
                    'alt={"Instagram Icon"}',
                    'string',
                    ''],
                  ['width', 
                    'width={50}',
                    'number(px)',
                    ''],
                  ['height', 
                    'height={100}',
                    'number(px)',
                    ''],
                  ['imgClass', 
                    'imgClass={"filtered"}',
                    'string',
                    ''],
                  ['iconType', 
                    'id={"invertable"}',
                    'string',
                    ''],
                  ['id', 
                    'id={"productIcon"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="MainButton" />
            <Description text="A button component wrapped in an <a> tag. For the buttons display text, it can
                              be passed text, an image source, or both." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage: \n\n`}
                {`  <MainButton \n`}
                {`    buttonText={"Send"};          /* Optional IFF an 'icon' is provided */ \n`}
                {`    icon={'/icon_envelope.svg'};  /* Optional IFF a 'buttonText' is provided */ \n`}
                {`    iconWidth={50}; \n`}
                {`    id={"defaultButton"}; \n`}
                {`  /> \n\n`}
                {`(.tsx)`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` button.mainButton{ \n`}
                {`  padding: 10px; \n`}
                {`  border-radius: 5px; \n`}
                {`  border: 1px solid var(--background); \n`}
                {`  box-shadow: 1px 0px 1px 0px #000000; \n`}
                {`  background-color: var(--accent); \n`}
                {` } button.mainButton:hover { \n`}
                {`    opacity: .8; \n`}
                {`    cursor: pointer; \n`}
                {`    transition: all .1s; \n`}
                {` } .mainButton p{ \n`}
                {`    color: #ebebeb; \n`}
                {`} \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['buttonText', 
                    'buttonText={"Submit"}',
                    'string',
                    'required'],
                  ['icon', 
                    'icon={"./icon_star.svg"}',
                    'string',
                    'required'],
                  ['href', 
                    'href={"#info"}',
                    'string',
                    ''],
                  ['iconWidth', 
                    'iconWidth={50}',
                    'number(px)',
                    ''],
                  ['iconHeight', 
                    'icon={"75"}',
                    'number(px)',
                    ''],
                  ['id', 
                    'id={"submitButton"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Navbar" />
            <Description text="A navbar component with a standardized layout and minimal customizability. 2 icon buttons, 
                              2 text buttons, and a title. They will be displayed in order (Left -> Right), the second 
                              element of each prop will be the corresponding button's href destination." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage : \n\n`}
                {` <Navbar \n`}
                {`  leftIcon={["./smile.svg", "#about"]} \n`}
                {`  leftText={["Shop", "/shop"]} \n`}
                {`  navbarTitle={"Home"} \n`}
                {`  rightText={"Contact"} \n`}
                {`  rightIcon={["./phone.svg", "#contact"]} \n`}
                {`  id={"defaultNavbar"}  \n`}
                {` /> \n\n`}
                {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.navbar { \n`}
                {`  background-color: transparent; \n`}
                {`  backdrop-filter: invert(.1); \n`}
                {`  position: sticky; \n`}
                {`  width: 100%; \n`}
                {`  top: 0; \n`}
                {`  padding: 10px; \n`} 
                {`  display: flex; \n`}
                {`  align-items: center; \n`}
                {`  justify-content: space-between; \n`}
                {`  border-radius: 0px 0px 5px 5px; \n`} 
                {` } .navbarSection { \n`}
                {`    display: flex; \n`}
                {`    align-items: center; \n`}
                {`    gap: 5px \n`}
                {` } .navbarSection a { \n`}
                {`    color: #ebebeb; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['leftIcon', 
                    'leftIcon={["./data.svg", "#info"]}',
                    'Array<string>[2]',
                    ''],
                  ['leftText', 
                    'leftText={["About", "/about"]}',
                    'Array<string>[2]',
                    ''],
                  ['navbarTitle', 
                    'navbarTitle={"Home"}',
                    'string',
                    'required'],
                  ['rightText', 
                    'rightText={["Bio", "/bio"]}',
                    'Array<string>[2]',
                    ''],
                  ['rightIcon', 
                    'rightIcon={["./write.svg", "#projects"]}',
                    'Array<string>[2]',
                    ''],
                  ['id', 
                    'id={"homeNavigation"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Card" />
            <Description text="A minimal component that combines a title, and description section. Can be passed
                              title text or a description text individually, however, it is designed for both." />
            <div className="codeSection">
              <pre><code>
                {`Example Usage : \n\n`}
                {` <Card  \n`}
                {`    header={"Pointer"}                      /* Optional IFF a 'body' is provided */ \n`}
                {`    body={"References a memory address"}    /* Optional IFF a 'header' is provided */ \n`}
                {`    id={"defaultCard"}    \n`}
                {`  /> \n\n`}
                {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.card { \n`}
                {`  border: 1px solid var(--foreground); \n`}
                {`  width: fit-content; \n`}
                {`  max-width: 850px; \n`}
                {`  padding: 5px 15px; \n`}
                {`  border-radius: 10px; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['header', 
                    'header={"Card Title"}',
                    'string',
                    'required'],
                  ['body', 
                    'body={"Card body text"}',
                    'string',
                    'required'],
                  ['id', 
                    'id={"idCard"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="CardDeck" />
            <Description text="A dynamic component that combines an undefined number of cards into a
                              vertical stack or 'deck'. Allows for a title to be provided and displayed 
                              as a MainTitle component above the card stack." />
              <div className="codeSection">
              <pre><code>
                {`Example Usage : \n\n`}
                {` <CardDeck  \n`}
                {`    deckTitle={"Dough Recipie"} \n`}
                {`    cardData={[ \n`}
                {`      ["Flour", \n`}
                {`       "8oz - Packed" \n`}
                {`      ], \n`}
                {`      ["Salt", \n`}
                {`       "2tbsp" \n`}
                {`      ], \n`}
                {`      ["Purified Water", \n`}
                {`       "4oz" \n`}
                {`      ], \n`}
                {`     ]} \n`}
                {`    id={"defaultDeck"}  \n`}
                {` /> \n\n`}
                {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.cardDeck { \n`}
                {`  border: 1px solid var(--foreground); \n`}
                {`  border-radius: 10px; \n`}
                {`  width: fit-content; \n`}
                {`  padding: 15px; \n`}
                {`  padding-top: 0px; \n`}
                {` } .cardDeck .card { \n`}
                {`    width: 650px; \n`}
                {`    border: none; \n`}
                {` } .cardDeck h1 { \n`}
                {`    text-align: center; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['deckTitle', 
                    'deckTitle={"Example Title"}',
                    'string',
                    ''],
                  ['cardData', 
                    'cardData={[' +'\n'+
                    '     ["Ingredients -",       //Card 1 Header'     +'\n'+
                    '       "1 Tomato, 1 Bread"], //Card 1 Description' +'\n'+
                    '     ["Tools Needed -", '  +'\n'+
                    '       "Fork, Knife"] '    +'\n'+
                    ' ]}',
                    'Array<<string>[2]>',
                    'required'],
                  ['id', 
                    'id={"ingredientCards"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          
          <li>
            <MainTitle titleText="ContactForm" />
            <Description text="Serves as a standard contact form component for an emailJS
                                message. Credentials must be updated via the environment.
                                Accepts an array of fields, [fieldTitle, fieldType, fieldName]"
                                />
            <div className="codeSection">
              <pre><code>
                {`Example Usage : \n\n`}
                {` <ContactForm   \n`}
                {`    fields={[ \n`}
                {`      ["Name", "text", "name"], \n`}
                {`      ["Email", "email", "email"], \n`}
                {`      ["Message", "textarea", "message"], \n`}
                {`    ]} \n`}
                {`    buttonText={"Send"} \n`}
                {`    id={"defaultForm"}  \n`}
                {` /> \n\n`}
                {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.contactForm { \n`}
                {`  display: flex; \n`}
                {`  flex-direction: column; \n`}
                {`  padding: 0px 20px; \n`}
                {`  width: 500px; \n`}
                {`  border: 1px solid var(--foreground); \n`}
                {`  border-radius: 10px; \n`}
                {` } .contactForm label { \n`}
                {`    padding: 10px; \n`}
                {` } .contactForm input { \n`}
                {`    min-height: 40px; \n`}
                {`    min-width: 75%; \n`}
                {`    width: fit-content; \n`}
                {`    max-width: 100%; \n`}
                {`    padding: 10px; \n`}
                {` } .contactForm textarea { \n`}
                {`    resize: none; \n`}
                {`    min-height: 150px; \n`}
                {`    width: 100%; \n`}
                {`    padding: 10px; \n`}
                {` } .contactForm .submitButton { \n`}
                {`   margin: 20px 0px; \n`}
                {` } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['fields', 
                    'fields={[' +'\n'+
                    '     ["-Name-",    //Field 1 Text' +'\n'+
                    '       "text",     //Field 1 Type' +'\n'+
                    '       "field1"],  //Field 1 Name' +'\n'+
                    '     ["-Email-", '   +'\n'+
                    '       "email",  '  +'\n'+
                    '       "field2"] '  +'\n'+
                    ' ]}',
                    'Array<<string>[3]>',
                    'required'],
                  ['buttonText', 
                    'buttonText={"Submit Email"}',
                    'string',
                    ''],
                  ['id', 
                    'id={"emailForm"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="IconBelt" />
            <Description text="A custom belt style icon container that can be passed an array of tuples.
                              These tuples will describe the icons within the belt itself, with the first element
                              of each tuple designating the icon's image address, and the second element designating
                              the icon's hyperlink wrapper"
                                />
            <div className="codeSection">
              <pre><code>
                  {`Example Usage : \n\n`}
                  {` <IconBelt    \n`}
                  {`    icons={[   \n`}
                  {`      "./home_icon.svg", \n`}
                  {`      "./contact_icon.svg", \n`}
                  {`    ]} \n`}
                  {`    hyperlinks={[ \n`}
                  {`          "#", \n`}
                  {`          "#", \n`}
                  {`    ]} \n`}
                  {`    id={"defaultBelt"}  \n`}
                  {` /> \n\n`}
                  {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                  {`Default Style Attributes : \n\n`}
                  {` div.iconBelt { \n`}
                  {`  width: 100%; \n`}
                  {`  display: flex; \n`}
                  {`  flex-direction: row; \n`}
                  {`  justify-content: space-evenly; \n`}
                  {`  align-items: center; \n`}
                  {` } \n\n`}
                  {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['icons', 
                    'icons={[' +'\n'+
                    '     "./x_icon.svg",     //src [0]'  +'\n'+
                    '     "./info_icon.svg"   //src [1]'  +'\n'+
                    ' ]}',
                    'Array<string>',
                    'required'],
                  ['hyperlinks', 
                    'hyperlinks={[' +'\n'+
                    '       "https://x.com",  //href [0]' +'\n'+
                    '       "#more-info"      //href [1]' +'\n'+
                    ' ]}',
                    'Array<string>',
                    ''],
                  ['id', 
                    'id={"navigationIcons"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Footer" />
            <Description text="Minimal footer component with 3 content sections. The 'icon section',
                                the 'hyperlink section', and the 'description section'. The visual display 
                                of these sections rely on the root styling of the subcomponents."
                                />
            <div className="codeSection">
              <pre><code>
                  {`Example Usage : \n\n`}
                  {` <Footer   \n`}
                  {`    iconData= {[ \n`}
                  {`      ["./icon_x.svg", "https://x.com/user"], \n`}
                  {`      ["./icon_insta.svg", "https://instagram.com/user"], \n`}
                  {`      ["./icon_github.svg", "https://github.com/user"], \n`}
                  {`      ["./icon_linkedin.svg", "https://linkedin.com/user"] \n`}
                  {`    ]} \n`}
                  {`    hyperlinkData={[ \n`}
                  {`          ["Legal", "/legal.html"], \n`}
                  {`          ["Contact", "#contact"], \n`}
                  {`          ["More", "#"] \n`}
                  {`    ]} \n`}
                  {`    descriptions={[ \n`}
                  {`          "Copyright Kyle Kirchgessner" \n`}
                  {`          "All rights reserved, 2025" \n`}
                  {`    ]} \n`}
                  {`    id={"defaultFooter"}  \n`}
                  {` /> \n\n`}
                  {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.footer { \n`}
                {`  border-top: 1px solid var(--foreground); \n`}
                {`  width: 100%; \n`}
                {`  padding: 25px 10px; \n`}
                {`  display: flex; \n`}
                {`  flex-direction: column; \n`}
                {` } .footer .iconBelt { \n`}
                {`     margin: 25px 0px; \n`}
                {`     padding: 25px 0px; \n`}
                {` } .footer .footerText { \n`}
                {`     width: 100%; \n`}
                {`     display: flex; \n`}
                {`     flex-direction: row; \n`}
                {`     justify-content: center; \n`}
                {`     align-items: center; \n`}
                {`     gap: 15%; \n`}
                {`  } .footerText #left { \n`}
                {`      width: fit-content; \n`}
                {`   } .footerText #right { \n`}
                {`      width: fit-content; \n`}
                {`   } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['descriptions', 
                    'descriptions={[' +'\n'+
                    '      "Copyright KK - 2025",'  +'\n'+
                    '      "All rights reserved"'    +'\n'+
                    ' ]}',
                    'Array<string>',
                    'required'],
                  ['iconData', 
                    'iconData={[' +'\n'+
                    '     ["./icon_x.svg",      //src'   +'\n'+
                    '       "https://x.com"],   //href' +'\n'+
                    '     ["./icon_insta.svg",'       +'\n'+
                    '       "https://instagram.com"],'  +'\n'+
                    ' ]}',
                    'Array<<string[2]>>',
                    ''],
                  ['hyperlinkData', 
                    'hyperlinkData={[' +'\n'+
                    '     ["Back to Top",     //Hyperlink text'  +'\n'+
                    '       "#top"],          //href'       +'\n'+
                    '     ["More Info",'    +'\n'+
                    '       "/wiki"],'      +'\n'+
                    ' ]}',
                    'Array<<string[2]>>',
                    ''],
                  ['id', 
                    'id={"homeFooter"}',
                    'string',
                    ''],
                ]}
              />
          </li>
          <li>
            <MainTitle titleText="Carousel " />
            <Description text="A standard carousel component that allows for alternation between images,
                              each image can be provided a description and a hyperlink. The 'numModals' prop
                              must exactly reflect the size of the modalData prop."
                                />
            <div className="codeSection">
              <pre><code>
                {`Example Usage : \n\n`}
                {` <Carousel    \n`}
                {`    numModals={3} \n`}
                {`    modalData={[ \n`}
                {`      ["Project 1", "Project 1 Description", "/icon_light.svg", "#proj1"], \n`}
                {`      ["Project 2", "Project 2 Description", "/icon_proj1.svg", "#proj2"], \n`}
                {`      ["Project 3", "Project 3 Description", "/icon_dark.svg", "#proj3"] \n`}
                {`    ]} \n`}
                {`    id={"defaultCarousel"} \n`}
                {` /> \n\n`}
                {`(.tsx) \n`}
              </code></pre>
              <pre><code>
                {`Default Style Attributes : \n\n`}
                {` div.modalContainer { \n`}
                {`  display: flex; \n`}
                {`  flex-direction: column; \n`}
                {`  justify-content: center; \n`}
                {`  width: 100%; \n`}
                {` } .modalContainer .modalFocus { \n`}
                {`     text-align: center; \n`}
                {`     align-self: center; \n`}
                {`     align-items: center; \n`}
                {` } .carouselButton { \n`}
                {`     width: 100%; \n`}
                {`     display: flex; \n`}
                {`     justify-content: space-evenly; \n`}
                {`     margin-top: 20px; \n`}
                {`   } \n\n`}
                {`(.css)`}
              </code></pre>
            </div>
            <Properties 
                propData={[
                  ['numModals', 
                    'numModals={4}',
                    'number',
                    'required'],
                  ['modalData', 
                    'modalData={[' +'\n'+
                    '     ["-Project 1-",             /*Modal 1 Title*/'        +'\n'+
                    '       "My first project",       /*Modal 1 Description*/'  +'\n'+
                    '       "./preview_img.png",      /*Modal 1 Img Address*/'  +'\n'+
                    '       "https://project.com"],   /*Modal 1 Hyperlink*/'    +'\n'+
                    '     ["-Project 1-",'          +'\n'+
                    '       "My first project",'    +'\n'+
                    '       "./preview_img.png",'   +'\n'+
                    '       "https://project.com"],'+'\n'+
                    ' ]}',
                    'Array<<string[4]>>',
                    'required'],
                  ['id', 
                    'id={"projectCarousel"}',
                    'string',
                    ''],
                ]}
              />
          </li>
        </ul>
      
      </main>
    </div>

  );
}
