import React from "react";
import Description from "./Description";
import IconBelt from "./IconBelt"
import Hyperlink from "./Hyperlink";

export default function Footer(props: {
                iconData?:Array<Array<string>>; 
                hyperlinkData?:Array<Array<string>>; 
                descriptions?:Array<string>
                id?:string
  }) {
  /* PROPS
    * icons:Array<string> - (Required) The text displayed in the top section of the card
    * hyperlinks:Array<string> - (Required) The text displayed in the top section of the card
    * id?:string - (Optional) An optional id attribute that the <div className="iconBelt"> subcomponent inherits
  */
    /*Designates the location of the 'no file attatched' error image*/
    const errorImageAddress = `/icon_error.svg`;
    

    /* Define the default footer data */
    const defaultIcon = errorImageAddress;
    const defaultHyperlinkText = "[hyperlink]";
    const defaultIconData= [
                      [defaultIcon, "#"],
                      [defaultIcon, "#"],
                      [defaultIcon, "#"],
                      [defaultIcon, "#"]
                    ];
    const defaultHyperlinkData=[
                      [defaultHyperlinkText, "#"],
                      [defaultHyperlinkText, "#"],
                      [defaultHyperlinkText, "#"],
                    ];
    const defaultDescriptions=[
                      "&copy; 2025 Kyle Kirchgessner",
                      "All rights reserved"
                    ];

    /* Normalize props - If the prop is sent: store it, otherwise: store its default*/
    const icons = props.iconData? props.iconData: defaultIconData; //defaults to 4 error icons, each links to '#'
    const iconSrc = icons.map((icon) => (icon[0]));
    const iconRef = icons.map((icon) => (icon[1]));
    const hyperlinks = props.hyperlinkData? props.hyperlinkData: defaultHyperlinkData; //defaults to 3 links "[hyperlink]", each links to '#'
    const descriptions = props.descriptions? props.descriptions: defaultDescriptions; //defaults to 3 links "[hyperlink]", each links to '#'
    const id = props.id? props.id: "defaultFooter"

    return (
    <div className="footer" id={id}>
      <div className="footerText">
        <div id="left"> 
          {hyperlinks.map((hyperlink, index) => (
            <Hyperlink 
                key={index} 
                linkText={hyperlink[0]} 
                href={hyperlink[1]} 
                id="underlined" 
              />
            ))}
        </div>
        <div id="right">
          {descriptions.map((description, index) => (
              <Description 
                  key={index} 
                  text={description} 
                />
            ))}
        </div>
      </div>
      <IconBelt icons={iconSrc} hyperlinks={iconRef}/>
    </div>
  );
};

