import styles from "./styles.module.scss";

interface BannerProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

export default function Banner({ language }: BannerProps) {
  // Textos traduzidos
  const translations = {
    pt: {
      title1: "EAI",
      title2: "DESTINO",
      description: "Somos a melhor agência de viagem com o preço mais justo!",
      buttonText: "Saiba mais!",
      rightBoxTitle: "Conheça lugares incríveis!",
      rightBoxDescription:
        "Entre em contato conosco, faça um orçamento agora mesmo!",
    },
    en: {
      title1: "EAI",
      title2: "DESTINATION",
      description: "We are the largest travel agency with the best prices!",
      buttonText: "Learn more!",
      rightBoxTitle: "Discover amazing places!",
      rightBoxDescription: "Contact us for a quote!",
    },
    fr: {
      title1: "EAI",
      title2: "DESTINATION",
      description:
        "Nous sommes la plus grande agence de voyage avec les meilleurs prix!",
      buttonText: "En savoir plus!",
      rightBoxTitle: "Découvrez des lieux incroyables!",
      rightBoxDescription: "Contactez-nous pour un devis!",
    },
    es: {
      title1: "EAI",
      title2: "DESTINO",
      description:
        "¡Somos la agencia de viajes más grande con los mejores precios!",
      buttonText: "Saber más!",
      rightBoxTitle: "¡Descubre lugares increíbles!",
      rightBoxDescription: "¡Contáctanos para una cotización!",
    },
  };

  // Seleciona o texto de acordo com o idioma
  const text = translations[language];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.leftSide}>
          <div className={styles.leftLines}>
            <div className={styles.title}>
              <h1>{text.title1}</h1>
              <h2>{text.title2}</h2>
              <div className={styles.description}>
                <p>
                  {text.description.split("").map((char, index) => (
                    <span
                      key={index}
                      style={{
                        animationDelay: `${index * 0.05}s`,
                        display: char === " " ? "inline-block" : "inline",
                        width: char === " " ? "0.25em" : "auto",
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                <button
                  onClick={() =>
                    window.open("https://wa.me/5511967930315", "_blank")
                  }
                >
                  <img
                    src="/button.svg"
                    alt="ButtonArrow"
                    className={styles.arrow}
                  />
                  {text.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <div className={styles.rightBox}>
            <img src="/arrow.svg" alt="Arrow" />
            <h2>{text.rightBoxTitle}</h2>
            <p>{text.rightBoxDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
