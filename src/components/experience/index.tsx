import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface ExperienceProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

export default function Experience({ language }: ExperienceProps) {
  const ballRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  const translations = {
    pt: {
      header:
        "Na EAI DESTINO, transformamos o desejo de viajar em experiências reais e inesquecíveis.",
      experienceText: "120+ destinos disponíveis",
      experienceDescription:
        "Levamos você para mais de 120 destinos ao redor do mundo",
      infoCard1: "clientes satisfeitos em todo o mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "pacotes personalizados.",
    },
    en: {
      header:
        "We are a company committed to transforming your travels into incredible experiences",
      experienceText: "120+ available destinations",
      experienceDescription:
        "We take you to over 120 destinations around the world",
      infoCard1: "satisfied customers worldwide.",
      infoCard2: "exotic destinations.",
      infoCard3: "customized packages.",
    },
    fr: {
      header:
        "Nous sommes une entreprise engagée à transformer vos voyages en expériences incroyables",
      experienceText: "120+ destinations disponibles",
      experienceDescription:
        "Nous vous emmenons vers plus de 120 destinations dans le monde",
      infoCard1: "clients satisfaits dans le monde entier.",
      infoCard2: "destinations exotiques.",
      infoCard3: "forfaits personnalisés.",
    },
    es: {
      header:
        "Somos una empresa comprometida a transformar tus viajes en experiencias increíbles",
      experienceText: "120+ destinos disponibles",
      experienceDescription:
        "Te llevamos a más de 120 destinos alrededor del mundo",
      infoCard1: "clientes satisfechos en todo el mundo.",
      infoCard2: "destinos exóticos.",
      infoCard3: "paquetes personalizados.",
    },
  };

  const text = translations[language]; // Escolhe o idioma com base na prop

  useEffect(() => {
    // Load GSAP and ScrollTrigger
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      if (textRef.current) {
        const spans = textRef.current.querySelectorAll("span");

        gsap.set(spans, { y: 20, opacity: 0 });

        gsap.to(spans, {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          duration: 0.5,
          ease: "easeOut",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 100%",
            end: "top 50%",
            scrub: true,
          },
        });
      }

      // Fade-in effect for info cards
      const infoCardElements = document.querySelectorAll(`.${styles.infoCard}`);
      infoCardElements.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none reverse",
              once: true, // Trigger animation only once
            },
          }
        );
      });
    };

    loadGSAP();

    // Handle mouse movement for the ball animation
    const handleMouseMove = (event: MouseEvent) => {
      if (ballRef.current) {
        const ball = ballRef.current;
        const rect = ball.getBoundingClientRect();
        const ballCenterX = rect.left + rect.width / 2;
        const ballCenterY = rect.top + rect.height / 2;

        const deltaX = event.clientX - ballCenterX;
        const deltaY = event.clientY - ballCenterY;

        const rotateX = -(deltaY / 5);
        const rotateY = deltaX / 5;

        ball.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`; // Include scale on hover
        ball.style.transition = `transform 0.1s ease-out`; // Smooth transition during mouse movement
      }
    };

    const resetRotation = () => {
      if (ballRef.current) {
        ballRef.current.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`; // Reset scale on mouse leave
        ballRef.current.style.transition = `transform 1s ease`; // Smooth transition on mouse leave
      }
    };

    const ball = ballRef.current;

    if (ball) {
      ball.addEventListener("mousemove", handleMouseMove);
      ball.addEventListener("mouseleave", resetRotation);
    }

    return () => {
      if (ball) {
        ball.removeEventListener("mousemove", handleMouseMove);
        ball.removeEventListener("mouseleave", resetRotation);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.leftside}>
            <h2 ref={textRef}>
              {text.header.split("").map((char, index) => (
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
            </h2>
          </div>
          <div className={styles.rightside}>
            <div className={styles.ball} ref={ballRef}>
              <div className={styles.text}>
                <h3>120</h3>
                <span>+</span>
              </div>
            </div>
            <div className={styles.experienceText}>
              <span>{text.experienceText}</span>
              <p>{text.experienceDescription}</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.infoCard}>
            <p>
              <strong>350+</strong> {text.infoCard1}
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
