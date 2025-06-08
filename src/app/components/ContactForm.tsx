"use client"
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Subtitle from './Subtitle';

export default function ContactForm(props: {
                                    fields?: Array<Array<string>>;
                                    buttonText?: string;
                                    id?: string;
}) {
  
  /* Define defaults */
  const defaultFields=[
                      ["fieldText", "text", "fieldName"],
                      ["fieldText", "text", "fieldName"],
                      ["fieldText", "textarea", "fieldName"],
                    ];
  const defaultButtonText="buttonText";

    /* Normalize props */
  const fields = props.fields? props.fields: defaultFields;
  const buttonText = props.buttonText? props.buttonText: defaultButtonText;
  const id = props.id? props.id: 'defaultForm';

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(buttonText);

  /* Handle sending the email */
  const sendEmail = (e: React.FormEvent) => {
    emailjs.init('EMAILJS_USER_ID_PLACEHOLDER')
    e.preventDefault();
    if (!formRef.current) return;

    // Grab the individual fields by name
    //const { name, email, message } = formRef.current.elements as HTMLInputElement;
    // elements.name.value, elements.email.value, etc.
    const form = formRef.current;

    const nameInput = (form.elements.namedItem('name') as HTMLInputElement).value;
    const emailInput = (form.elements.namedItem('email') as HTMLInputElement).value;
    const messageInput = (form.elements.namedItem('message') as HTMLTextAreaElement).value;
    
    // ... work with emailInput and passwordInput
    const params = {
      name: nameInput,
      email: emailInput,
      message: messageInput,
    };
    const serviceID = 'default_service';
    const templateID = 'template_n0qkiq7';
    setStatus('Sending…');
    emailjs
      .send(
        serviceID,  // pull service ID
        templateID, // pull template ID
        params,
      )
      .then(
        () => {
          setStatus('Message sent!');
          formRef.current!.reset();
        },
        (err) => {
          console.error(err);
          setStatus('Failed to send, please try later.');
        }
      );
  };

  return (
    <form className="contactForm" id={id} ref={formRef} onSubmit={sendEmail}>
      {fields.map((field,index) => (
        <label key={index}>
          <Subtitle key={index} subText={field[0]}/>
          {field[1] === "textarea"? 
            <textarea id="messageBox" name={field[2]} required />
              :
            <input type={field[1]} name={field[2]} required />
          }
        </label>
      ))}
      <button className="submitButton" type="submit"><p>{status}</p></button>
    </form>
  );
};

