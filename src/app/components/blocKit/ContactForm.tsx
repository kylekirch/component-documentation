"use client"

import styles from "./core/blocKit.module.css"

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Subtitle from './Subtitle';
import MainTitle from "./MainTitle";

export default function ContactForm(props: {
                                    title?: string;
                                    labels?: Array<string>;
                                    submitButton?: string;
                                    EMAILJS_KEY: string;
                                    TEMPLATE_ID: string;
                                    SERVICE_ID?: string;
                                    id?: string;
}) {
  
  /* Define defaults */
  const defaultLabels=["Name","Email","Message"];
  const defaultButtonText="Send";

    /* Normalize props */
  const title = props.title? props.title: 'Contact';
  const labels = props.labels? props.labels: defaultLabels;
  const submitButton = props.submitButton? props.submitButton: defaultButtonText;
  const id = props.id? props.id: 'defaultForm';

  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState(submitButton);

  /* Handle sending the email */
  const sendEmail = (e: React.FormEvent) => {
    emailjs.init(props.EMAILJS_KEY)
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
    const serviceID = props.SERVICE_ID? props.SERVICE_ID : 'default_service';
    const templateID = props.TEMPLATE_ID;
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
    <form className={styles.contactForm} id={id} ref={formRef} onSubmit={sendEmail}>
      {props.title? <MainTitle text={title} id={styles.underlined}/> : <></>}
      <div>
        <Subtitle text={labels[0]}/>
        <input type="text" name="name" required />
      </div>
      <div>
        <Subtitle text={labels[1]}/>
        <input type="email" name="email" required />
      </div>
      <div>
        <Subtitle text={labels[2]}/>
        <textarea name={"message"} id={styles.messageBox} required />
      </div>
      <button type="submit" className={styles.submitButton} ><Subtitle text={status} fontSize="18px" id={styles.text} /></button>
    </form>
  );
};