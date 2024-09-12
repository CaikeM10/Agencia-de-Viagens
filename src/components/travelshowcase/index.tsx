import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function TravelShowcase() {
  const titleRef = useRef<HTMLHeadingElement>(null);

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
            {"Explore os destinos dos seus sonhos.\nEncontre experiências únicas.\nViva momentos inesquecíveis."
              .split("")
              .map((char, index) => (
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
          <hr />
          <p>3X MELHOR AGÊNCIA DO MUNDO</p>
        </div>
      </div>
    </section>
  );
}
