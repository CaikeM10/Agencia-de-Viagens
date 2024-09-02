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
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: row,
                start: "top 85%",
                end: "top 50%",
                toggleActions: "play none none reverse",
                once: true,
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
            É tão desafiador encontrar uma boa equipe para fazer grandes coisas.
            Mas podemos fornecer a você a melhor.
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
                <h3>Ambiente</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Venha conhecer o nosso ambiente de trabalho e veja como é
                trabalhar conosco.
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
                <h3>Ambiente</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Venha conhecer o nosso ambiente de trabalho e veja como é
                trabalhar conosco.
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
                <h3>Ambiente</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Venha conhecer o nosso ambiente de trabalho e veja como é
                trabalhar conosco.
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
                <h3>Ambiente</h3>
              </div>
            </div>
            <div className={styles.rightside}>
              <p>
                Venha conhecer o nosso ambiente de trabalho e veja como é
                trabalhar conosco.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
