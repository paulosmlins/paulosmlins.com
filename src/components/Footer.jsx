import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footerBox">
      <div className="socialFooter">
        <a href="https://www.linkedin.com/in/paulosmlins/" target="_blank">
          <img
            className="socialItemFooter"
            src="/sociais/linkedin.png"
            alt="Linkedin"
          />
        </a>
        <a href="https://github.com/paulosmlins" target="_blank">
          <img
            className="socialItemFooter"
            src="/sociais/github.png"
            alt="Github"
          />
        </a>
      </div>
      <div className="menuFooter">
        <Link href="/">Projetos</Link>
        <Link href="/">UI</Link>
        <Link href="/">Contatos</Link>
      </div>
      <div className="socialFooter">
        <a href="https://twitter.com/paulosmLins" target="_blank">
          <img
            className="socialItemFooter"
            src="/sociais/twitter.png"
            alt="Twitter"
          />
        </a>
        <a href="https://www.instagram.com/paulosmlins" target="_blank">
          <img
            className="socialItemFooter"
            src="/sociais/instagram.png"
            alt="Instagram"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
