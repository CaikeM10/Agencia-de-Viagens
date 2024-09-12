import React from "react";
import styles from "./styles.module.scss";

export default function ScrollText() {
  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {[...Array(15)].map((_, index) => (
          <React.Fragment key={index}>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <img src="/air1.svg" alt="Avião" className={styles.icon} />
                <span className={styles.companyName}>EASY VISA</span>
                <img src="/air2.svg" alt="Avião" className={styles.icon} />
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <span className={styles.slogan}>
                  A MELHOR AGÊNCIA DE VIAGEM
                </span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
