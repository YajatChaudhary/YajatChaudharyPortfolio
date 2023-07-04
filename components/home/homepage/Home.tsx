import React from "react";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <>
      <div className={styles.home}>
        <main id="main">
          <div
            style={{
              height: "200px",
              background:
                "linear-gradient(180deg, var(--background), var(--background-dark))",
            }}
          />
        </main>
      </div>
    </>
  );
};
