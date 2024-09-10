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
        <div id="roundBackground"></div>
        <Image
          id="mainPicture"
          src="/HomePicture3.png"
          height={610}
          width={580}
          alt="Une photos de moi !"
        />
        <Image
          id="decoration1"
          src={"decorations/decoration1.svg"}
          height={100}
          width={200}
          alt="décoration"
        />
        <Image
          id="decoration2"
          src={"decorations/decoration2.svg"}
          height={100}
          width={200}
          alt="décoration"
        />
        <div id="cubeContainer">
          <div id="cube">
            <div className="face front">
              <Image
                src={"/decorations/hook/hook.svg"}
                height={20}
                width={20}
                alt="a hook"
              />
              <Image
                src={"/decorations/hook/hook.svg"}
                height={20}
                width={20}
                alt="a hook"
              />
            </div>
            <div className="face back">
              <Image
                src={"/decorations/cross/bar.svg"}
                height={20}
                width={20}
                alt="a cross"
              />
              <Image
                src={"/decorations/cross/bar.svg"}
                height={20}
                width={20}
                alt="a cross"
              />
            </div>
            <div className="face right">
              <Image
                src={"/decorations/point/point.svg"}
                height={10}
                width={10}
                alt="a point"
              />
              <Image
                src={"/decorations/point/point.svg"}
                height={10}
                width={10}
                alt="a point"
              />
              <Image
                src={"/decorations/point/point.svg"}
                height={10}
                width={10}
                alt="a point"
              />
            </div>
            <div className="face left">
              <Image
                src={"/decorations/splint/splint.svg"}
                height={20}
                width={20}
                alt="a splint"
              />
              <Image
                src={"/decorations/splint/splint.svg"}
                height={20}
                width={20}
                alt="a splint"
              />
            </div>
            <div className="face top"></div>
            <div className="face bottom"></div>
          </div>
        </div>
        <Image
          id="decoration3"
          src={"/decorations/decoration3.svg"}
          height={20}
          width={20}
          alt="a ball"
        />
        <Image
          id="decoration4"
          src={"/decorations/decoration3.svg"}
          height={20}
          width={20}
          alt="a ball"
        />
      </div>
    </article>
  );
}
