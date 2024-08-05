import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="headerName">Robin Urcun</div>
      <nav>
        <Link href="#about">À propos de moi</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Mes réalisations</Link>
        <Link href="#contact" className="bold">
          Contactez-moi
        </Link>
        <Link href="" className="surrounded bold">
          Télécharger mon CV
        </Link>
      </nav>
    </header>
  );
}
