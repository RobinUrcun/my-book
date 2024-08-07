"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <React.Fragment>
      <nav className={isOpen ? "isOpen" : null}>
        <ul>
          <Image
            className="closeBtn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            src={"/logos/closeLogo.svg"}
            width={25}
            height={25}
            alt=""
          />
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="#about"
            >
              À propos de moi
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="#skills"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="#projects"
            >
              Mes réalisations
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setIsOpen(false);
              }}
              href="#contact"
              className="bold"
            >
              Contactez-moi
            </Link>
          </li>
          <li>
            <a
              href="/upload/CV_page.pdf"
              download={"CV_Robin_Urcun.pdf"}
              className="surrounded bold"
            >
              Télécharger mon CV
            </a>
          </li>
        </ul>
      </nav>
      <Image
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className="headerMenuLogo"
        src={"/logos/menuLogo.svg"}
        width={40}
        height={40}
        alt=""
      />
    </React.Fragment>
  );
}
