import styles from "./styles.module.scss";
import Image from "next/image";

interface PartnersProps {
  language: "pt" | "en" | "fr" | "es";
}

// DADOS DE TRADUÇÃO DOS PARCEIROS
// ADICIONAR OS PARCEIROS RESTANTES AQUI PEGAR DOS LINKS QUE FORAM ENVIADOS
const partnerData = {
  pt: {
    title: "NOSSOS PRINCIPAIS PARCEIROS",
    partners: [
      { logo: "/aldeia records.png", name: "Aldeia Records" },
      { logo: "/WorkDrone.jpg", name: "Work Drone" },
      { logo: "/mega model brasil.png", name: "Mega Model Brasil" },
      { logo: "/Logo_BDA.png", name: "Batalha da Aldeia" },
    ],
  },
  en: {
    title: "OUR MAIN PARTNERS",
    partners: [
      { logo: "/aldeia records.png", name: "Aldeia Records" },
      { logo: "/decolar_logo.svg", name: "Parceiro2" },
      { logo: "/partner_booking.svg", name: "Parceiro3" },
      { logo: "/partner_hostgator.svg", name: "Parceiro4" },
    ],
  },
  fr: {
    title: "NOS PARTENAIRES PRINCIPAUX",
    partners: [
      { logo: "/aldeia records.png", name: "Aldeia Records" },
      { logo: "/decolar_logo.svg", name: "Parceiro2" },
      { logo: "/partner_booking.svg", name: "Parceiro3" },
      { logo: "/partner_hostgator.svg", name: "Parceiro4" },
    ],
  },
  es: {
    title: "NUESTROS PRINCIPALES SOCIOS",
    partners: [
      { logo: "/aldeia records.png", name: "Aldeia Records" },
      { logo: "/decolar_logo.svg", name: "Parceiro2" },
      { logo: "/partner_booking.svg", name: "Parceiro3" },
      { logo: "/partner_hostgator.svg", name: "Parceiro4" },
    ],
  },
};

export default function Partners({ language }: PartnersProps) {
  // Seleciona os dados com base no idioma
  const data = partnerData[language] || partnerData.pt;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{data.title}</h2>
      <div className={styles.logosWrapper}>
        {data.partners.map((partner, index) => (
          <div key={index} className={styles.partnerItem}>
            {/* NOVO: Contêiner para aplicar o formato circular via SCSS */}
            <div className={styles.logoContainer}>
              <Image
                src={partner.logo}
                alt={`Logo ${partner.name}`}
                width={120}
                height={60}
                className={styles.partnerLogo}
              />
            </div>
            {/* NOVO: Classe para melhorar a visibilidade do nome via SCSS */}
            <p className={styles.partnerName}>{partner.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
