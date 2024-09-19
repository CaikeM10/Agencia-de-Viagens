import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface TravelShowcaseProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

const translations = {
  pt: {
    title:
      "Explore os destinos dos seus sonhos.\nEncontre experiências únicas.\nViva momentos inesquecíveis.",
    slogan: "3X MELHOR AGÊNCIA DO MUNDO",
  },
  en: {
    title:
      "Explore your dream destinations.\nFind unique experiences.\nLive unforgettable moments.",
    slogan: "3X BEST AGENCY IN THE WORLD",
  },
  fr: {
    title:
      "Explorez les destinations de vos rêves.\nDécouvrez des expériences uniques.\nVivez des moments inoubliables.",
    slogan: "3X MEILLEURE AGENCE DU MONDE",
  },
  es: {
    title:
      "Explora los destinos de tus sueños.\nEncuentra experiencias únicas.\nVive momentos inolvidables.",
    slogan: "3X MEJOR AGENCIA DEL MUNDO",
  },
};

export default function TravelShowcase({ language }: TravelShowcaseProps) {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const text = translations[language]; // Seleciona o idioma com base na prop

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (titleRef.current) {
        const spans = titleRef.current.querySelectorAll("span");

        gsap.set(spans, { y: 20, opacity: 0 });

        gsap.to(spans, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
        });
      }
    };

    loadGSAP();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1 ref={titleRef}>
            {text.title.split("").map((char, index) => (
              <span
                key={index}
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.25em" : "auto",
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
        <div className={styles.logo}>
          <img src="/logoCrop.png" alt="Logo" />
          {/* <hr />
          <p>{text.slogan}</p> */}
        </div>
      </div>
    </section>
  );
}
