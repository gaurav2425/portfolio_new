import React from "react";
import styles from "./CoolStuff.module.css";
import DecryptedText from "./DecryptedText";
function CoolStuff() {
  return (
    <div className={styles.experience_container}>
      <div>
        <img
          src={require("../assets/macold.png")}
          className={styles.experience_img}
        ></img>
      </div>
      <div className={styles.experience_container_text}>
        <h1 className={styles.heading}>Tattle Cafe</h1>
        <h2 className={styles.link}>https://www.tattlecafe.com/</h2>
        <p className={styles.para}>
          I built an extensive library of highly customizable assets and created
          an optimized render pipeline to distribute these assets across web
          pages, social media, and the product itself, in the fastest way
          possible. This role taught me to excel under tight deadlines. Framer
        </p>
        <p className={styles.para}>
          For the past two years, I also contributed to the website, refining my
          ability to craft cool looking and innovative assets. During this time,
          I gained extensive experience with tools like Figma, Spline, Lottie,
          Rive, React Three Fiber and Framer
        </p>
        <p className={styles.para}>
          For the past two years, in the fastest way possible. This role taught
          me to excel under tight deadlines. I also contributed to the website,
          refining my ability to craft cool looking and innovative assets.
          During this time, I gained extensive experience with tools like Figma,
          Spline, Lottie, Rive, React Three Fiber and Framer
        </p>
      </div>
    </div>
  );
}

export default CoolStuff;
