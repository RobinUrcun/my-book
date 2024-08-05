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
          Lorem ipsum dolor sit amet consectetur. Feugiat integer amet donec
          vivamus. Est a molestie.
        </p>
        <Link href="" className="contactBtn">
          Contactez-moi
        </Link>
      </div>
      <div className="presentionArticleWrapperImg">
        <Image src="/HomePicture.png" height={610} width={580} alt="" />
      </div>
    </article>
  );
}
