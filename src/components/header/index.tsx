import { RefObject } from "react";
import styles from "./styles.module.scss";

interface HeaderProps {
  experienceRef: RefObject<HTMLElement>;
  stepsRef: RefObject<HTMLElement>;
  productsRef: RefObject<HTMLElement>;
  travelShowcaseRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
}

export default function Header({
  experienceRef,
  stepsRef,
  productsRef,
  travelShowcaseRef,
  contactRef,
}: HeaderProps) {
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/logoCrop.png" alt="Logo" />
          <p onClick={() => scrollToSection(experienceRef)}>Experiência</p>
          <p onClick={() => scrollToSection(stepsRef)}>Passos</p>
          <p onClick={() => scrollToSection(productsRef)}>Produtos</p>
          <p onClick={() => scrollToSection(travelShowcaseRef)}>Prêmio</p>
          <p onClick={() => scrollToSection(contactRef)}>Contato</p>
        </div>
        <div className={styles.rightside}>
          <button>
            <img
              src="/mail2.svg"
              className={styles.icon}
              alt="Ícone de email"
            />
            <p>Mande uma mensagem</p>
          </button>
        </div>
      </div>
    </header>
  );
}
