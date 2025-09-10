import React from "react";
import styles from "./styles.module.scss";

interface ScrollTextProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

const translations = {
  pt: {
    companyName: "EAI DESTINO",
    slogan: "A MELHOR AGÊNCIA DE VIAGEM",
  },
  en: {
    companyName: "EAi DESTINATION",
    slogan: "THE BEST TRAVEL AGENCY",
  },
  fr: {
    companyName: "EAI DESTINATION",
    slogan: "LA MEILLEURE AGENCE DE VOYAGE",
  },
  es: {
    companyName: "EAI DESTINO",
    slogan: "LA MEJOR AGENCIA DE VIAJES",
  },
};

export default function ScrollText({ language }: ScrollTextProps) {
  const text = translations[language]; // Seleciona o idioma com base na prop

  return (
    <div className={styles.slider}>
      <div className={styles.slideTrack}>
        {[...Array(15)].map((_, index) => (
          <React.Fragment key={index}>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <img src="/air1.svg" alt="Avião" className={styles.icon} />
                <span className={styles.companyName}>{text.companyName}</span>
                <img src="/air2.svg" alt="Avião" className={styles.icon} />
              </div>
            </div>
            <div className={styles.slide}>
              <div className={styles.textContainer}>
                <span className={styles.slogan}>{text.slogan}</span>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
