import React from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import Heading from "../heading/Heading";

export default function Contact() {
  const contact = {
    title_first: "írj",
    title_last: "nekem",
  }

  function sendEmail(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const user_email = document.getElementById("user_email").value;
    const message = document.getElementById("message").value;

    const patterns = {
      nameValid: /^[A-záéíóőúű]{2,20}?$/,
      emailValid: /^([a-z\d-]+)@([a-z\d-]{2,})\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
      messageValid: /^[A-záéíóőúű,\d]{5,}$/,
    };

    if (
      name.match(patterns.nameValid) &&
      user_email.match(patterns.emailValid) &&
      message.match(patterns.messageValid)
    ) {
      emailjs
        .sendForm(
          "service_8d7gu3l",
          "template_nh83com",
          e.target,
          "user_bBlPbPasGkKlY88wtUe5s"
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("hiba!!");
    }
  }

  return (
    <section className="contact" id="contact">
      <Heading heading={contact}/>

      <form onSubmit={sendEmail}>
        <input
          type="text"
          name="name"
          id="name"
          className="box"
          placeholder="neved"
        />
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="box"
          placeholder="e-mail"
        />
        {/* <input type="text" placeholder="téma" className="box" /> */}
        <textarea
          name="message"
          id="message"
          className="box"
          placeholder="üzeneted..."
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" value="elküldöm" className="btn" />
      </form>
    </section>
  );
}

// function sanitizeString(str) {
//   str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
//   return str.trim();
// }
