import { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

// URLs das imagens para o pré-carregamento
const imagesToPreload = [
  "/suica.webp",
  "/images/brasil.jpg",
  "/bg1.webp",
  "/maldives.webp",
  "/images/chile.jpg",
  "/bg2.webp",
  "/japan.webp",
];

const preloadImages = (urls: string[]) => {
  urls.forEach((url) => {
    const img = new window.Image();
    img.src = url;
  });
};

interface BannerProps {
  language: "pt" | "en" | "fr" | "es";
}

export default function Banner({ language }: BannerProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    preloadImages(imagesToPreload);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % imagesToPreload.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [imagesToPreload.length]);

  const translations = {
    pt: {
      title1: "E AI",
      title2: "DESTINO",
      description: "Somos a melhor agência de viagem com o preço mais justo!",
      buttonText: "Saiba mais!",
      rightBoxTitle: "Conheça lugares incríveis!",
      rightBoxDescription:
        "Entre em contato conosco, faça um orçamento agora mesmo!",
    },
    en: {
      title1: "E AI",
      title2: "DESTINATION",
      description: "We are the largest travel agency with the best prices!",
      buttonText: "Learn more!",
      rightBoxTitle: "Discover amazing places!",
      rightBoxDescription: "Contact us for a quote!",
    },
    fr: {
      title1: "E AI",
      title2: "DESTINATION",
      description:
        "Nous sommes la plus grande agence de voyage avec les meilleurs prix!",
      buttonText: "En savoir plus!",
      rightBoxTitle: "Découvrez des lieux incroyables!",
      rightBoxDescription: "Contactez-nous pour un devis!",
    },
    es: {
      title1: "E AI",
      title2: "DESTINO",
      description:
        "¡Somos la agencia de viajes más grande con los mejores precios!",
      buttonText: "Saber más!",
      rightBoxTitle: "¡Descubre lugares increíbles!",
      rightBoxDescription: "¡Contáctanos para una cotización!",
    },
  };

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
                <p>{text.description}</p>
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
          {/* Altere o código do carrossel para usar o componente Image */}
          {imagesToPreload.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Imagem de fundo ${index}`}
              layout="fill"
              objectFit="cover"
              className={`${styles.rightsideImage} ${
                index === currentImageIndex ? styles.activeImage : ""
              }`}
            />
          ))}
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
