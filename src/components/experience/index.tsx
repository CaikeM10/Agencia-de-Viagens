import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface ExperienceProps {
  language: "pt" | "en" | "fr" | "es";
}

export default function Experience({ language }: ExperienceProps) {
  const textRef = useRef<HTMLHeadingElement>(null);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  {
    /** adicionar uma forma que as fotos fiquem mais ao meio e preencha a lacuna de "espaço vazio" */
  }
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

  //procurar uma forma de fazer a quebra de linha funcionar corretamente e o texto ficar centralizado na versão mobile e desktop
  const translations = {
    pt: {
      header:
        "Na E ai Destino,  acreditamos  que viajar não deve ser um luxo inatingível reais e inesquecíveis. Estamos empenhados em democratizar a forma como as pessoas exploram o mundo, oferecendo opções que se encaixam em todos os orçamentos. Junte-se a nós nesta jornada emocionante e descubra um mundo de possibilidades. E ai Destino é mais que uma agência de viagens, é um convite para explorar, aprender  e se encantar.",
      infoCard1: "clientes satisfeitos em todo o mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "pacotes personalizados.",
    },
    en: {
      header:
        "At E ai Destino, we believe that travel shouldn't be an unattainable luxury—it should be a real, unforgettable experience. We're committed to democratizing the way people explore the world, offering options to suit all budgets. Join us on this exciting journey and discover a world of possibilities. E ai Destino is more than a travel agency; it's an invitation to explore, learn, and be enchanted.",
      infoCard1: "satisfied customers worldwide.",
      infoCard2: "exotic destinations.",
      infoCard3: "customized packages.",
    },
    fr: {
      header:
        "Chez E ai Destino, nous pensons que voyager ne devrait pas être un luxe inaccessible, mais une expérience authentique et inoubliable. Nous nous engageons à démocratiser la découverte du monde en proposant des options adaptées à tous les budgets. Embarquez pour ce voyage passionnant et découvrez un monde de possibilités. E ai Destino est plus qu'une agence de voyages ; c'est une invitation à explorer, apprendre et se laisser enchanter.",
      infoCard1: "clients satisfaits dans le monde entier.",
      infoCard2: "destinations exotiques.",
      infoCard3: "forfaits personnalisés.",
    },
    es: {
      header:
        "En E ai Destino, creemos que viajar no debería ser un lujo inalcanzable, sino una experiencia real e inolvidable. Nos comprometemos a democratizar la forma en que las personas exploran el mundo, ofreciendo opciones para todos los presupuestos. Únase a nosotros en este emocionante viaje y descubra un mundo de posibilidades. E ai Destino es más que una agencia de viajes; es una invitación a explorar, aprender y dejarse llevar.",
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
              {text.header.split("|BR|").map((line, index, arr) => (
                <React.Fragment key={index}>
                  {/* 1. Renderiza as palavras da linha (com o espaço após cada palavra) */}
                  {line.split(" ").map((word, wordIndex) => (
                    <span key={`${index}-${wordIndex}`}>{word} </span>
                  ))}

                  {/* 2. Adiciona a quebra de linha dupla (simulando um parágrafo) */}
                  {index < arr.length - 1 && (
                    <React.Fragment>
                      <br />
                      <br />
                    </React.Fragment>
                  )}
                </React.Fragment>
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
              <strong>5000+</strong> {text.infoCard1}
            </p>
            <img src="/happy.svg" alt="Clientes felizes" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>40+</strong> {text.infoCard2}
            </p>
            <img src="/palm.svg" alt="Destinos exóticos" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>1000+</strong> {text.infoCard3}
            </p>
            <img src="/pkg.svg" alt="Pacotes personalizados" />
          </div>
        </div>
      </div>
    </div>
  );
}
