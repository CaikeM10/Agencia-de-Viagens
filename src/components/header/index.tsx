import { RefObject, useEffect, useState } from "react";
import styles from "./styles.module.scss";

type Language = "pt" | "en" | "fr" | "es";

interface HeaderProps {
  experienceRef: RefObject<HTMLElement>;
  stepsRef: RefObject<HTMLElement>;
  productsRef: RefObject<HTMLElement>;
  travelShowcaseRef: RefObject<HTMLElement>;
  contactRef: RefObject<HTMLElement>;
  language: Language;
  setLanguage: (language: Language) => void;
}

export default function Header({
  experienceRef,
  stepsRef,
  productsRef,
  travelShowcaseRef,
  contactRef,
  language,
  setLanguage,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false); // Controla se o select está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false); // Controla o estado do menu hamburguer
  const [scrolled, setScrolled] = useState(false); 
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false); // Fecha o menu ao clicar em um item
  };

 
const [isClosing, setIsClosing] = useState(false);

const handleMenuToggle = () => {
  if (menuOpen) {
    // If the menu is open, start the closing animation
    setIsClosing(true);
    setTimeout(() => {
      setMenuOpen(false); // Close the menu after the animation
      setIsClosing(false); // Reset the closing state
    }, 300); // Duration should match the CSS transition (300ms)
  } else {
    // If the menu is closed, open it directly
    setMenuOpen(true);
  }
};

  const translations = {
    pt: {
      experience: "Experiência",
      steps: "Passos",
      products: "Produtos",
      travelShowcase: "Prêmio",
      contact: "Contato",
      message: "Mande uma mensagem",
    },
    en: {
      experience: "Experience",
      steps: "Steps",
      products: "Products",
      travelShowcase: "Award",
      contact: "Contact",
      message: "Send a message",
    },
    fr: {
      experience: "Expérience",
      steps: "Étapes",
      products: "Produits",
      travelShowcase: "Récompense",
      contact: "Contact",
      message: "Envoyez un message",
    },
    es: {
      experience: "Experiencia",
      steps: "Pasos",
      products: "Productos",
      travelShowcase: "Premio",
      contact: "Contacto",
      message: "Enviar un mensaje",
    },
  };

  const text = translations[language];

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Alterna o estado do dropdown
  };

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false); // Fecha o dropdown ao selecionar
  };

  return (
    <header className={`${styles.container} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.content}>
        <div className={styles.leftside}>
          <img src="/logoCrop.png" alt="Logo" />
          <p onClick={() => scrollToSection(experienceRef)}>
            {text.experience}
          </p>
          <p onClick={() => scrollToSection(stepsRef)}>{text.steps}</p>
          <p onClick={() => scrollToSection(productsRef)}>{text.products}</p>
          <p onClick={() => scrollToSection(travelShowcaseRef)}>
            {text.travelShowcase}
          </p>
          <p onClick={() => scrollToSection(contactRef)}>{text.contact}</p>
        </div>

        {/* Menu Hamburguer */}
        <div
          className={styles.hamburgerMenu}
          onClick={handleMenuToggle}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        {/* Menu Lateral (Aberto/Fechado com o estado do menuOpen) */}
        <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ""} ${isClosing ? styles.closing : ""}`}>
          <p onClick={() => scrollToSection(experienceRef)}>{text.experience}</p>
          <p onClick={() => scrollToSection(stepsRef)}>{text.steps}</p>
          <p onClick={() => scrollToSection(productsRef)}>{text.products}</p>
          <p onClick={() => scrollToSection(travelShowcaseRef)}>
            {text.travelShowcase}
          </p>
          <p onClick={() => scrollToSection(contactRef)}>{text.contact}</p>

          {/* Adicionando o seletor de idioma dentro do menu lateral */}
          <div className={styles.languageSwitcher}>
            <div className={styles.selectedLanguage} onClick={toggleDropdown}>
              <img
                src={`/${language}.svg`}
                className={styles.flag}
                alt={`Idioma ${language}`}
              />
              <span className={styles.arrow}>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen && (
              <div className={styles.dropdown}>
                {language !== "pt" && (
                  <img
                    src="/pt.svg"
                    className={styles.flag}
                    alt="Português"
                    onClick={() => handleLanguageChange("pt")}
                  />
                )}
                {language !== "en" && (
                  <img
                    src="/en.svg"
                    className={styles.flag}
                    alt="Inglês"
                    onClick={() => handleLanguageChange("en")}
                  />
                )}
                {language !== "fr" && (
                  <img
                    src="/fr.svg"
                    className={styles.flag}
                    alt="Francês"
                    onClick={() => handleLanguageChange("fr")}
                  />
                )}
                {language !== "es" && (
                  <img
                    src="/es.svg"
                    className={styles.flag}
                    alt="Espanhol"
                    onClick={() => handleLanguageChange("es")}
                  />
                )}
              </div>
            )}
          </div>
        </nav>

        <div className={styles.rightside}>
          <button
            onClick={() =>
              window.open("https://wa.me/message/AVAYUU2HYYIOJ1", "_blank")
            }
          >
            <img
              src="/mail2.svg"
              className={styles.icon}
              alt="Ícone de email"
            />
            <p>{text.message}</p>
          </button>
        </div>
      </div>
    </header>
  );
}
