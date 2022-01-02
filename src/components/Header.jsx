import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="headerBox">
      <a href="/">
        <img className="headerLogo" src="/logo.png" alt="Logo PauloSMLins" />
      </a>
    </header>
  );
};

export default Header;
