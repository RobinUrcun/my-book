import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm/ContactForm";

export default function ContactMe() {
  return (
    <article id="contact" className="contactMeArticle">
      <div className="contactMeText">
        <h2>Contactez-moi</h2>
        <p className="contactMeDescription">
          N&apos;hésitez pas à me contacter pour discuter de nouveaux projets
        </p>
        <div className="contactMeInfo">
          <a href="tel: +337 50 51 29 56" className="contactMeInfoWrapper">
            <div className="contactMeImgBorder">
              <Image
                src={"/logos/callLogo.svg"}
                height={40}
                width={40}
                alt="Lien pour téléphoner"
              />
            </div>
            <p>+ 337 50 51 29 56</p>
          </a>
          <a
            href="mailto:robinurcun@gmail.com"
            className="contactMeInfoWrapper"
          >
            <div className="contactMeImgBorder">
              <Image
                src={"/logos/mailLogo.svg"}
                height={40}
                width={40}
                alt="Lien pour envoyer un mail"
              />
            </div>
            <p>robinurcun@gmail.com</p>
          </a>
          <div className="contactMeInfoWrapper">
            <div className="contactMeImgBorder">
              <Image
                src={"/logos/positionLogo.svg"}
                height={40}
                width={40}
                alt="Ma localisation"
              />
            </div>
            <p>Les Issambres, VAR</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </article>
  );
}
