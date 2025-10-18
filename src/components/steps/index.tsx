import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

interface StepsProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

export default function Steps({ language }: StepsProps) {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  const translations = {
    pt: {
      title:
        "Viajar pode ser mais fácil do que você imagina. Deixe-nos cuidar de todos os detalhes.",
      steps: [
        {
          number: "01",
          title: "Destino dos Sonhos",
          description:
            "Conheça os destinos mais incríveis ao redor do mundo com pacotes personalizados.",
        },
        {
          number: "02",
          title: "Facilidade de Pagamento",
          description:
            "Oferecemos condições especiais para parcelamento, tornando sua viagem ainda mais acessível.",
        },
        {
          number: "03",
          title: "Experiências Únicas",
          description:
            "Tenha experiências inesquecíveis em cada viagem, com roteiros pensados especialmente para você.",
        },
        {
          number: "04",
          title: "Suporte Humanizado",
          description:
            "Nossa equipe está disponivel para garantir que sua viagem seja perfeita. ",
        },
      ],
    },
    en: {
      title:
        "Travel can be easier than you think. Let us take care of all the details.",
      steps: [
        {
          number: "01",
          title: "Dream Destination",
          description:
            "Discover the most incredible destinations around the world with personalized packages.",
        },
        {
          number: "02",
          title: "Easy Payment Options",
          description:
            "We offer special installment plans, making your trip even more affordable.",
        },
        {
          number: "03",
          title: "Unique Experiences",
          description:
            "Have unforgettable experiences on every trip, with itineraries designed just for you.",
        },
        {
          number: "04",
          title: "humanized support",
          description:
            "Our team is available anytime to ensure your trip is perfect.",
        },
      ],
    },
    fr: {
      title:
        "Voyager peut être plus facile que vous ne le pensez. Laissez-nous nous occuper de tous les détails.",
      steps: [
        {
          number: "01",
          title: "Destination de Rêve",
          description:
            "Découvrez les destinations les plus incroyables avec des forfaits personnalisés.",
        },
        {
          number: "02",
          title: "Facilité de Paiement",
          description:
            "Nous offrons des conditions spéciales de paiement pour rendre votre voyage encore plus accessible.",
        },
        {
          number: "03",
          title: "Expériences Uniques",
          description:
            "Vivez des expériences inoubliables à chaque voyage, avec des itinéraires spécialement conçus pour vous.",
        },
        {
          number: "04",
          title: "soutien humanisé",
          description:
            "Notre équipe est disponible à tout moment pour garantir que votre voyage soit parfait.",
        },
      ],
    },
    es: {
      title:
        "Viajar puede ser más fácil de lo que piensas. Déjanos encargarnos de todos los detalles.",
      steps: [
        {
          number: "01",
          title: "Destino de Ensueño",
          description:
            "Descubre los destinos más increíbles alrededor del mundo con paquetes personalizados.",
        },
        {
          number: "02",
          title: "Facilidad de Pago",
          description:
            "Ofrecemos condiciones especiales para pagos a plazos, haciendo tu viaje aún más accesible.",
        },
        {
          number: "03",
          title: "Experiencias Únicas",
          description:
            "Disfruta de experiencias inolvidables en cada viaje, con itinerarios pensados especialmente para ti.",
        },
        {
          number: "04",
          title: "apoyo humanizado",
          description:
            "Nuestro equipo está disponible en cualquier momento para garantizar que tu viaje sea perfecto.",
        },
      ],
    },
  };

  const text = translations[language]; // Seleciona o texto com base no idioma selecionado no menu na versão mobile

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      rowRefs.current.forEach((row) => {
        if (row) {
          gsap.fromTo(
            row,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "bottom top",
                toggleActions: "play reverse play reverse",
                onLeave: () => {
                  gsap.to(row, {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    ease: "power3.out",
                  });
                },
              },
            }
          );
        }
      });
    };

    loadGSAP();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>
          <h3>{text.title}</h3>
        </div>
        {text.steps.map((step, index) => (
          <div className={styles.rows} key={index}>
            <div
              className={styles.row}
              ref={(el) => {
                if (el) rowRefs.current[index] = el;
              }}
            >
              <div className={styles.leftside}>
                <p>{step.number}</p>
                <div className={styles.rowTitle}>
                  <img src="/users.svg" alt="Usúarios" />
                  <h3>{step.title}</h3>
                </div>
              </div>
              <div className={styles.rightside}>
                <p>{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
