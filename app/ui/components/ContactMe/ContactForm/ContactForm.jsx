"use client";
import React from "react";

export default function ContactForm() {
  const sendMessage = (e) => {
    fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target.name.value,
        mail: e.target.mail.value,
        phone: e.target.phone.value,
        message: e.target.message.value,
      }),
    })
      .then(() => {
        console.log("mail envoyé");
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(e.target.name.value);

        sendMessage(e);
      }}
      className="contactMeForm"
    >
      <label htmlFor="name">Votre Nom*</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Ex. Michel Dupont"
        autoComplete="name"
      />
      <label htmlFor="mail">Adresse Email*</label>
      <input
        id="mail"
        type="mail"
        name="mail"
        placeholder="exemple@exemple.com"
        autoComplete="email"
      />
      <label htmlFor="phone">Numéro de Téléphone*</label>
      <input
        id="phone"
        type="phone"
        name="phone"
        placeholder="+336 12 34 56 78"
        autoComplete="tel"
      />

      <label htmlFor="message">Votre Message*</label>
      <textarea
        id="message"
        name="message"
        placeholder="Votre message ..."
      ></textarea>
      <button>Envoyer un message</button>
    </form>
  );
}
