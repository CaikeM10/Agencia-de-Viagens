import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./styles.module.scss";

interface ExperienceProps {
  language: "pt" | "en" | "fr" | "es";
}

export default function Experience({ language }: ExperienceProps) {
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
      title: (
        <>
          Na E ai Destino, acreditamos que viajar{" "}
          <span>não deve ser um luxo inatingível.</span>
        </>
      ),
      description:
        "Estamos empenhados em democratizar a forma como as pessoas exploram o mundo, oferecendo opções que se encaixam em todos os orçamentos.",
      footerText: (
        <>
          Junte-se a nós nesta jornada emocionante. A E ai Destino é um convite
          para <span>explorar, aprender e se encantar.</span>
        </>
      ),
      infoCard1: "clientes satisfeitos em todo o mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "pacotes personalizados.",
    },
    en: {
      title: (
        <>
          At E ai Destino, we believe travel{" "}
          <span>shouldn&apos;t be an unattainable luxury.</span>
        </>
      ),
      description:
        "We are committed to democratizing the way people explore the world, offering options that fit all budgets.",
      footerText: (
        <>
          Join us on this exciting journey. E ai Destino is an invitation to{" "}
          <span>explore, learn, and be enchanted.</span>
        </>
      ),
      infoCard1: "satisfied customers worldwide.",
      infoCard2: "exotic destinations.",
      infoCard3: "customized packages.",
    },
    fr: {
      title: (
        <>
          Chez E ai Destino, nous pensons que voyager{" "}
          <span>ne doit pas être un luxe inaccessible.</span>
        </>
      ),
      description:
        "Nous nous engageons à démocratiser la façon dont les gens explorent le monde, en proposant des options adaptées à tous les budgets.",
      footerText: (
        <>
          Rejoignez-nous dans ce voyage passionnant. E ai Destino est une
          invitation à <span>explorer, apprendre et s&apos;émerveiller.</span>
        </>
      ),
      infoCard1: "clients satisfaits dans le monde entier.",
      infoCard2: "destinations exotiques.",
      infoCard3: "forfaits personnalisés.",
    },
    es: {
      title: (
        <>
          En E ai Destino, creemos que viajar{" "}
          <span>no debe ser un lujo inalcanzable.</span>
        </>
      ),
      description:
        "Nos comprometemos a democratizar la forma en que las personas exploran el mundo, ofreciendo opciones que se ajustan a todos los presupuestos.",
      footerText: (
        <>
          Únete a nosotros en este emocionante viaje. E ai Destino es una
          invitación a <span>explorar, aprender y dejarse encantar.</span>
        </>
      ),
      infoCard1: "clientes satisfechos en todo el mundo.",
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
            <h2>{text.title}</h2>
            <p className={styles.description}>{text.description}</p>
            <p className={styles.highlight}>{text.footerText}</p>
          </div>

          <div className={styles.rightside}>
            <div className={styles.carouselContainer}>
              {carouselImages.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`Destino ${index + 1}`}
                  className={`${styles.carouselImage} ${
                    index === currentImageIndex ? styles.activeImage : ""
                  }`}
                  width={500}
                  height={500}
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
            <Image
              src="/happy.svg"
              alt="Clientes felizes"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>40+</strong> {text.infoCard2}
            </p>
            <Image
              src="/palm.svg"
              alt="Destinos exóticos"
              width={50}
              height={50}
            />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>1000+</strong> {text.infoCard3}
            </p>
            <Image
              src="/pkg.svg"
              alt="Pacotes personalizados"
              width={50}
              height={50}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
