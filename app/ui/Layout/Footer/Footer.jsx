import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <p className="footerName">Robin Urcun</p>
      <p className="footerCopyright">© 2024. All rights reserved.</p>
      <nav className="footerNav">
        <ul>
          <li className="footerNavGitHub">
            <a target="_blank" href="https://github.com/RobinUrcun">
              <Image
                src={"/logos/gitHubLogo.svg"}
                width={30}
                height={30}
                alt="Se rendre sur mon profil GitHub"
              />
            </a>
          </li>
          <li className="footerNavLinkedin">
            <a
              target="_blank"
              href="https://fr.linkedin.com/in/robin-urcun-a97461291"
            >
              <Image
                src={"/logos/linkedinLogo.svg"}
                width={30}
                height={30}
                alt="Se rendre sur mon profil Linkedin"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
