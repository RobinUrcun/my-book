import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function MyPresentation() {
  return (
    <article className="presentationArticle">
      <div className="presentationArticleWrapper">
        <p className="presentationBubble">
          Hi, I&apos;m <span></span>
        </p>
        <h1>
          <span>ROBIN</span>
          <span>URCUN</span>
        </h1>
        <h2 className="jobTitle">Développeur Web</h2>
        <p className="description">
          À l&apos;écoute et attentif aux détails, j&apos;ai une forte volonté
          d&apos;apprendre et de m&apos;améliorer continuellement. Je
          m&apos;engage à créer des solutions innovantes et efficaces.
        </p>
        <Link href="#contact" className="contactBtn">
          Contactez-moi
        </Link>
      </div>
      <div className="presentionArticleWrapperImg">
        <Image src="/HomePicture.png" height={610} width={580} alt="" />
      </div>
    </article>
  );
}
