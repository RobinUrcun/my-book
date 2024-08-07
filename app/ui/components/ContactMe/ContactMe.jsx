import React from "react";
import Image from "next/image";

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
                alt=""
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
                alt=""
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
                alt=""
              />
            </div>
            <p>Les Issambres, VAR</p>
          </div>
        </div>
      </div>
      <form className="contactMeForm">
        <label htmlFor="name">Votre Nom*</label>
        <input type="text" name="name" placeholder="Ex. Michel Dupont" />
        <label htmlFor="mail">Adresse Email*</label>
        <input type="mail" name="mail" placeholder="exemple@exemple.com" />
        <label htmlFor="phone">Numéro de Téléphone*</label>
        <input type="phone" name="phone" placeholder="+336 12 34 56 78" />

        <label htmlFor="message">Votre Message*</label>
        <textarea name="message" placeholder="Votre message ..."></textarea>
        <button>Envoyer un message</button>
      </form>
    </article>
  );
}
