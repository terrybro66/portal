import React from "react";
import styles from "./Head.module.css";

const Head = ({ homeLink }) => {
  return (
    <div className={styles.head}>
      <div className={styles.logo} onClick={() => homeLink("graph")}>
        Sublime<span className={styles.dataLogo}>Data</span>
      </div>
    </div>
  );
};

export default Head;
