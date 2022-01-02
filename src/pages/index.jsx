import React from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textLeft}>
        <h2>Oi 👋🏽, meu nome é</h2>
        <h1>Paulo Lins</h1>
      </div>
      <img
        className={styles.myImgHome}
        src="/myimg.png"
        alt="Logo PauloSMLins"
      />
      <div className={styles.textRight}>
        <h2>Front-End Developer</h2>
        <h2>
          <span>🆄🅸 Designer</span>
        </h2>
      </div>
    </div>
  );
}
