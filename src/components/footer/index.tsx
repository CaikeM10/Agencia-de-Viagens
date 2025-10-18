import React, { forwardRef } from "react"; // Importa forwardRef
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface FooterProps {
  language: "pt" | "en" | "fr" | "es";
}

const translations = {
  pt: {
    serviceQuestions: "DÚVIDAS SOBRE SERVIÇOS",
    onlineService: "Atendimento 100% online",
    customerSupport: "SUPORTE AO CLIENTE",
    availableInBrazil: "Disponível em todo o Brasil",
    remoteService: "Atendimento remoto",
    subscribeTitle: "INSCREVA-SE PARA RECEBER NOVIDADES",
    privacy: "Garantimos a proteção da sua privacidade",
    footerText:
      "© 2025 E ai Destino. Todos os Direitos Reservados. |BR| Desenvolvido por Caike Marinho | Soluções Web.",
    privacyPolicy: "Política de Privacidade",
    termsConditions: "Termos e Condições",
    copyrights: "Direitos Autorais",
  },
  en: {
    serviceQuestions: "QUESTIONS ABOUT SERVICES",
    onlineService: "100% online service",
    customerSupport: "CUSTOMER SUPPORT",
    availableInBrazil: "Available throughout Brazil",
    remoteService: "Remote service",
    subscribeTitle: "SUBSCRIBE TO RECEIVE UPDATES",
    privacy: "We guarantee the protection of your privacy",
    footerText: "© 2025 E ai Destino developed by Caike Marinho.",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms and Conditions",
    copyrights: "Copyright",
  },
  fr: {
    serviceQuestions: "QUESTIONS SUR LES SERVICES",
    onlineService: "Service 100% en ligne",
    customerSupport: "SERVICE CLIENT",
    availableInBrazil: "Disponible dans tout le Brésil",
    remoteService: "Service à distance",
    subscribeTitle: "INSCRIVEZ-VOUS POUR RECEVOIR LES NOUVELLES",
    privacy: "Nous garantissons la protection de votre vie privée",
    footerText: "© 2025 E ai Destino développé par Caike Marinho.",
    privacyPolicy: "Politique de Confidentialité",
    termsConditions: "Termes et Conditions",
    copyrights: "Droits d'Auteur",
  },
  es: {
    serviceQuestions: "PREGUNTAS SOBRE SERVICIOS",
    onlineService: "Atención 100% online",
    customerSupport: "SOPORTE AL CLIENTE",
    availableInBrazil: "Disponible en todo Brasil",
    remoteService: "Atención remota",
    subscribeTitle: "SUSCRÍBETE PARA RECIBIR NOVEDADES",
    privacy: "Garantizamos la protección de tu privacidad",
    footerText: "© 2025 E ai Destino desarrollado por Caike Marinho.",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    copyrights: "Derechos de Autor",
  },
};

// 1. O componente é envolvido por forwardRef.
// 2. Ele recebe as props e a 'ref' como segundo argumento.
const Footer = forwardRef<HTMLElement, FooterProps>(({ language }, ref) => {
  const text = translations[language];

  return (
    // 3. A 'ref' é aplicada no elemento DOM raiz (<footer>)
    <footer ref={ref as React.Ref<HTMLElement>} className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <Image
              src="/logo redondo.png"
              alt="Logo E ai Destino"
              width={155}
              height={155}
            />
            <div className={styles.letters}>
              <Link href="https://www.instagram.com/eaidestino/">
                <Image
                  src="/instagram.svg"
                  alt="instagram"
                  width={40}
                  height={40}
                />
              </Link>
              <Link href="https://wa.me/5511967930315">
                <Image
                  src="/whatsapp.svg"
                  alt="whatsApp"
                  width={40}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className={styles.middle}>
            <div className={styles.box2}>
              <h5>{text.serviceQuestions}</h5>
              <p>{text.onlineService}</p>
              <h4>contato@eaidestino.com.br</h4>
            </div>
            <div className={styles.box2}>
              <h5>{text.customerSupport}</h5>
              <p>{text.availableInBrazil}</p>
              <p>{text.remoteService}</p>
              <h4>suporte@eaidestino.com.br</h4>
              <h4>contato +55 (11) 967930315</h4>
            </div>
          </div>
          <div className={styles.rightside}>
            <div className={styles.rightTop}>
              <h2>{text.subscribeTitle}</h2>
              <form action="/api/contact" method="POST">
                <div className={styles.inputContainer}>
                  <input
                    type="email"
                    placeholder="Digite seu email..."
                    name="email"
                  />
                  <button type="submit">
                    <Image
                      src="/mail.svg"
                      alt="Ícone de email"
                      width={30}
                      height={30}
                    />
                  </button>
                </div>
              </form>
              <div className={styles.privacy}>
                <Image
                  src="/hand.svg"
                  alt="Ícone de privacidade"
                  width={20}
                  height={20}
                />
                <p>{text.privacy}</p>
              </div>
            </div>
            <div className={styles.rightBottom}>
              <Link href="https://www.reclameaqui.com.br/">
                <Image
                  src="/reclame.png"
                  alt="reclame"
                  width={100}
                  height={100}
                />
              </Link>
              <Link href="https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/54299788000108">
                <Image
                  src="/cadastur.png"
                  alt="cadastur"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <p>
              {/* Substitui o separador |BR| pela tag <br /> */}
              {text.footerText.split("|BR|").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < text.footerText.split("|BR|").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className={styles.rightBottom}>
            <p>{text.privacyPolicy}</p>
            <p>{text.termsConditions}</p>
            <p>{text.copyrights}</p>
          </div>
        </div>
      </div>
    </footer>
  );
});

// Define o nome de exibição do componente para melhor depuração
Footer.displayName = "Footer";

export default Footer;
