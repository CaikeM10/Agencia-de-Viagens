import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function Experience() {
  const ballRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

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
              {"Somos uma empresa séria com muita competência e anos de experiência"
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
            </h2>
          </div>
          <div className={styles.rightside}>
            <div className={styles.ball} ref={ballRef}>
              <div className={styles.text}>
                <h3>20</h3>
                <span>+</span>
              </div>
            </div>
            <div className={styles.experienceText}>
              <span>20 + anos de experiência</span>
              <p>Estamos a mais de 20 anos entregando as melhores viagens</p>
            </div>
          </div>
        </div>
        <div className={styles.bottomcontent}>
          <div className={styles.infoCard}>
            <p>
              <strong>350+</strong> very satisfied clients around the worldwide.
            </p>
            <img src="/happy.svg" alt="Happy Clients" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>350+</strong> very satisfied clients around the worldwide.
            </p>
            <img src="/happy.svg" alt="Happy Clients" />
          </div>
          <div className={styles.infoCard}>
            <p>
              <strong>350+</strong> very satisfied clients around the worldwide.
            </p>
            <img src="/happy.svg" alt="Happy Clients" />
          </div>
        </div>
      </div>
    </div>
  );
}
