import { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ExperienceProps {
  language: "pt" | "en" | "fr" | "es";
}

export default function Experience({ language }: ExperienceProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/visto.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const translations = {
    pt: {
      header:
        "Na EAI DESTINO, transformamos o desejo de viajar em experiências reais e inesquecíveis. Nascemos com o propósito de facilitar o acesso a viagens bem planejadas, oferecendo soluções personalizadas.",
      infoCard1: "clientes satisfeitos em todo o mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "pacotes personalizados.",
    },
    en: {
      header:
        "We are a company committed to transforming your travels into incredible experiences",
      infoCard1: "satisfied customers worldwide.",
      infoCard2: "exotic destinations.",
      infoCard3: "customized packages.",
    },
    fr: {
      header:
        "Nous sommes une entreprise engagée à transformer vos voyages en expériences incroyables",
      infoCard1: "clients satisfaits dans le monde entier.",
      infoCard2: "destinations exotiques.",
      infoCard3: "forfaits personnalisés.",
    },
    es: {
      header:
        "Somos una empresa comprometida a transformar tus viajes en experiencias increíbles",
      infoCard1: "clientes satisfechos en todo o mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "paquetes personalizados.",
    },
  };

  const text = translations[language];

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.leftside}>
            <h2 ref={textRef}>
              {text.header.split(" ").map((word, index) => (
                <span key={index}>{word} </span>
              ))}
            </h2>
          </div>
          <div className={styles.rightside}>
            <div className={styles.carouselContainer}>
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Destino ${index + 1}`}
                  className={`${styles.carouselImage} ${
                    index === currentImageIndex ? styles.activeImage : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.infoCard}>
            <p>
              <strong>500+</strong> {text.infoCard1}
            </p>
            <img src="/happy.svg" alt="Clientes felizes" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>27+</strong> {text.infoCard2}
            </p>
            <img src="/palm.svg" alt="Destinos exóticos" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>50+</strong> {text.infoCard3}
            </p>
            <img src="/pkg.svg" alt="Pacotes personalizados" />
          </div>
        </div>
      </div>
    </div>
  );
}
