import Link from "next/link";
import styles from "./styles.module.scss";

interface FooterProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
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
    footerText: "© 2025 Eai Destino desenvolvido por Caike Marinho.",
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
    footerText: "© 2025 Eai Destino developed by Caike Marinho.",
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
    footerText: "© 2025 Eai Destino développé par Caike Marinho.",
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
    footerText: "© 2025 Eai Destino desarrollado por Caike Marinho.",
    privacyPolicy: "Política de Privacidad",
    termsConditions: "Términos y Condiciones",
    copyrights: "Derechos de Autor",
  },
};

export default function Footer({ language }: FooterProps) {
  const text = translations[language]; // Seleciona o idioma com base na prop

  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.leftside}>
            <img src="/logo redondo.png" alt="Logo Eai Destino" />
            <div className={styles.letters}>
              <Link href="https://www.instagram.com/eaidestino/">
                <img src="/instagram.svg" alt="insta" />
              </Link>
              <Link href="https://wa.me/5511967930315">
                <img src="/whatsapp.svg" alt="whats" />
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
              <div className={styles.inputContainer}>
                <input type="email" placeholder="Digite seu email..." />
                <img src="/mail.svg" alt="Ícone de email" />
              </div>
              <div className={styles.privacy}>
                <img src="/hand.svg" alt="Ícone de privacidade" />
                <p>{text.privacy}</p>
              </div>
            </div>
            <div className={styles.rightBottom}>
              <Link href="https://www.reclameaqui.com.br/">
                <img src="reclame.png" alt="reclame" />
              </Link>
              <Link href="https://cadastur.turismo.gov.br/cadastur/#!/public/qrcode/54299788000108">
                <img src="cadastur.png" alt="cadastur" />
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.leftBottom}>
            <p>{text.footerText}</p>
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
}
