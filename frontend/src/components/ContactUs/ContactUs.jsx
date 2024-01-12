import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export  const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9evzq1i', 'template_bjb7cuj', form.current, 'zeXqHnwyk_c5OOjIk',{ 'Content-Type': 'application/json', 'scope': 'https://www.googleapis.com/auth/gmail.send' })
      .then((result) => {
          console.log(result.text);
         // console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};