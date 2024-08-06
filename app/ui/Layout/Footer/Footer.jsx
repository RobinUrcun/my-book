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
            <a href="https://github.com/RobinUrcun">
              <Image
                src={"/logos/gitHubLogo.svg"}
                width={30}
                height={30}
                alt=""
              />
            </a>
          </li>
          <li className="footerNavLinkedin">
            <a href="https://fr.linkedin.com/in/robin-urcun-a97461291">
              <Image
                src={"/logos/linkedinLogo.svg"}
                width={30}
                height={30}
                alt=""
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
