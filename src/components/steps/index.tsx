import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function Steps() {
  const rowRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      rowRefs.current.forEach((row) => {
        if (row) {
          gsap.fromTo(
            row,
            { opacity: 0, y: 50 }, // Começa invisível e deslocado
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "bottom top", // Termina quando a parte inferior do elemento atinge o topo
                toggleActions: "play reverse play reverse",
                onLeave: () => {
                  gsap.to(row, {
                    opacity: 0,
                    y: 50, // Desliza para baixo ao sumir
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
          <h3>
            Viajar pode ser mais fácil do que você imagina. Deixe-nos cuidar de
            todos os detalhes.
          </h3>
        </div>
        <div className={styles.rows}>
          <div
            className={styles.row}
            ref={(el) => {
              if (el) rowRefs.current[0] = el;
            }}
          >
            <div className={styles.leftside}>
              <p>01</p>
              <div className={styles.rowTitle}>
                <img src="/users.svg" alt="" />
                <h3>Destino dos Sonhos</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Conheça os destinos mais incríveis ao redor do mundo com pacotes
                personalizados.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={styles.row}
            ref={(el) => {
              if (el) rowRefs.current[1] = el;
            }}
          >
            <div className={styles.leftside}>
              <p>02</p>
              <div className={styles.rowTitle}>
                <img src="/users.svg" alt="" />
                <h3>Facilidade de Pagamento</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Oferecemos condições especiais para parcelamento, tornando sua
                viagem ainda mais acessível.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={styles.row}
            ref={(el) => {
              if (el) rowRefs.current[2] = el;
            }}
          >
            <div className={styles.leftside}>
              <p>03</p>
              <div className={styles.rowTitle}>
                <img src="/users.svg" alt="" />
                <h3>Experiências Únicas</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Tenha experiências inesquecíveis em cada viagem, com roteiros
                pensados especialmente para você.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.rows}>
          <div
            className={styles.row}
            ref={(el) => {
              if (el) rowRefs.current[3] = el;
            }}
          >
            <div className={styles.leftside}>
              <p>04</p>
              <div className={styles.rowTitle}>
                <img src="/users.svg" alt="" />
                <h3>Suporte 24/7</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Nossa equipe está disponível a qualquer momento para garantir
                que sua viagem seja perfeita.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
