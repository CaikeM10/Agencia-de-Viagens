import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

// Definindo a interface para cada estudo de caso
interface CaseStudy {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
}

// Definindo a interface para as traduções
interface Translations {
  title: string;
  categories: string[];
  caseStudies: CaseStudy[];
}

// Definindo a interface para as props do componente
interface CaseStudiesProps {
  language: "pt" | "en" | "fr" | "es"; // Adiciona a prop de idioma
}

// Criando o objeto de traduções
const translations: Record<CaseStudiesProps["language"], Translations> = {
  pt: {
    title: "Nossos Produtos",
    categories: ["todos", "agência", "documentos", "cidadania"],
    caseStudies: [
      {
        id: 1,
        category: "agência",
        title: "Passagens Nacionais e Internacionais",
        description:
          "Encontre as melhores opções de voos para qualquer destino ao redor do mundo, com suporte completo na escolha e reserva.",
        image: "/plane.jpg",
      },
      {
        id: 2,
        category: "agência",
        title: "Hospedagem",
        description:
          "Escolha entre uma vasta gama de hotéis, pousadas e acomodações exclusivas para garantir uma estadia confortável e conveniente.",
        image: "/hospedagem.jpg",
      },
      {
        id: 3,
        category: "novos",
        title: "Chip Internacional",
        description:
          "Mantenha-se conectado durante sua viagem com nossos chips internacionais pré-pagos, oferecendo dados móveis em diversos países.",
        image: "/chip.jpg",
      },
      {
        id: 4,
        category: "agência",
        title: "Seguro Viagem",
        description:
          "Viaje com tranquilidade sabendo que está protegido com nossos seguros de viagem abrangentes, cobrindo imprevistos e garantindo sua segurança.",
        image: "/seguro.jpg",
      },
      {
        id: 5,
        category: "agência",
        title: "Locação de Carro",
        description:
          "Explore seu destino com liberdade e conforto alugando um carro adequado às suas necessidades e preferências.",
        image: "/car.jpg",
      },
      {
        id: 6,
        category: "documentos",
        title: "Assessoria de Passaporte",
        description:
          "Obtenha ajuda especializada para regularizar e obter passaportes, tanto para casos regulares quanto emergenciais.",
        image: "/passport.jpeg",
      },
      {
        id: 7,
        category: "documentos",
        title: "Assessoria de Visto",
        description:
          "Facilitamos a obtenção de vistos para turismo, estudo, trabalho e nômade digital, garantindo que você esteja em conformidade com as exigências de cada país.",
        image: "/visto.png",
      },
      {
        id: 8,
        category: "cidadania",
        title: "Cidadania Europeia",
        description:
          "Conquiste a cidadania portuguesa, espanhola ou italiana com nosso suporte completo em todo o processo.",
        image: "/europa2.jpg",
      },
      {
        id: 9,
        category: "documentos",
        title: "Tradução Juramentada e Apostilamento de Haia",
        description:
          "Oferecemos tradução juramentada em Inglês, Francês, Italiano, Espanhol e Alemão, com apostilamento de Haia para garantir a validade dos seus documentos no exterior.",
        image: "/0.jpeg",
      },
    ],
  },
  en: {
    title: "Our Products",
    categories: ["all", "agency", "documents", "citizenship"],
    caseStudies: [
      {
        id: 1,
        category: "agency",
        title: "Domestic and International Flights",
        description:
          "Find the best flight options for any destination around the world, with full support in choosing and booking.",
        image: "/plane.jpg",
      },
      {
        id: 2,
        category: "agency",
        title: "Accommodation",
        description:
          "Choose from a wide range of hotels, inns, and exclusive accommodations to ensure a comfortable and convenient stay.",
        image: "/hospedagem.jpg",
      },
      {
        id: 3,
        category: "new",
        title: "International SIM Card",
        description:
          "Stay connected during your trip with our prepaid international SIM cards, offering mobile data in various countries.",
        image: "/chip.jpg",
      },
      {
        id: 4,
        category: "agency",
        title: "Travel Insurance",
        description:
          "Travel with peace of mind knowing you're covered by our comprehensive travel insurance, protecting against unforeseen events.",
        image: "/seguro.jpg",
      },
      {
        id: 5,
        category: "agency",
        title: "Car Rental",
        description:
          "Explore your destination with freedom and comfort by renting a car tailored to your needs and preferences.",
        image: "/car.jpg",
      },
      {
        id: 6,
        category: "documents",
        title: "Passport Assistance",
        description:
          "Get specialized help to regularize and obtain passports, both for regular and emergency cases.",
        image: "/passport.jpeg",
      },
      {
        id: 7,
        category: "documents",
        title: "Visa Assistance",
        description:
          "We facilitate obtaining visas for tourism, study, work, and digital nomadism, ensuring you comply with each country's requirements.",
        image: "/visto.png",
      },
      {
        id: 8,
        category: "citizenship",
        title: "European Citizenship",
        description:
          "Achieve Portuguese, Spanish, or Italian citizenship with our full support throughout the process.",
        image: "/europa2.jpg",
      },
      {
        id: 9,
        category: "documents",
        title: "Sworn Translation and Hague Apostille",
        description:
          "We offer sworn translation in English, French, Italian, Spanish, and German, with Hague Apostille to ensure your documents' validity abroad.",
        image: "/0.jpeg",
      },
    ],
  },
  fr: {
    title: "Nos Produits",
    categories: ["tous", "agence", "documents", "citoyenneté"],
    caseStudies: [
      {
        id: 1,
        category: "agence",
        title: "Vols nationaux et internationaux",
        description:
          "Trouvez les meilleures options de vol pour n'importe quelle destination dans le monde, avec un support complet pour le choix et la réservation.",
        image: "/plane.jpg",
      },
      {
        id: 2,
        category: "agence",
        title: "Hébergement",
        description:
          "Choisissez parmi une large gamme d'hôtels, d'auberges et d'hébergements exclusifs pour garantir un séjour confortable et pratique.",
        image: "/hospedagem.jpg",
      },
      {
        id: 3,
        category: "nouveau",
        title: "Carte SIM internationale",
        description:
          "Restez connecté pendant votre voyage avec nos cartes SIM internationales prépayées, offrant des données mobiles dans divers pays.",
        image: "/chip.jpg",
      },
      {
        id: 4,
        category: "agence",
        title: "Assurance voyage",
        description:
          "Voyagez en toute tranquillité en sachant que vous êtes couvert par nos assurances voyage complètes, vous protégeant contre les imprévus.",
        image: "/seguro.jpg",
      },
      {
        id: 5,
        category: "agence",
        title: "Location de voiture",
        description:
          "Explorez votre destination en toute liberté et confort en louant une voiture adaptée à vos besoins et préférences.",
        image: "/car.jpg",
      },
      {
        id: 6,
        category: "documents",
        title: "Assistance Passeport",
        description:
          "Obtenez une aide spécialisée pour régulariser et obtenir des passeports, à la fois pour des cas réguliers et d'urgence.",
        image: "/passport.jpeg",
      },
      {
        id: 7,
        category: "documents",
        title: "Assistance Visa",
        description:
          "Nous facilitons l'obtention de visas pour le tourisme, les études, le travail et le nomadisme numérique, en veillant à ce que vous respectiez les exigences de chaque pays.",
        image: "/visto.png",
      },
      {
        id: 8,
        category: "citoyenneté",
        title: "Citoyenneté Européenne",
        description:
          "Obtenez la citoyenneté portugaise, espagnole ou italienne avec notre soutien complet tout au long du processus.",
        image: "/europa2.jpg",
      },
      {
        id: 9,
        category: "documents",
        title: "Traduction Assermentée et Apostille de La Haye",
        description:
          "Nous proposons des traductions assermentées en anglais, français, italien, espagnol et allemand, avec une apostille de La Haye pour garantir la validité de vos documents à l'étranger.",
        image: "/0.jpeg",
      },
    ],
  },
  es: {
    title: "Nuestros Productos",
    categories: ["todos", "agencia", "documentos", "ciudadanía"],
    caseStudies: [
      {
        id: 1,
        category: "agencia",
        title: "Vuelos Nacionales e Internacionales",
        description:
          "Encuentra las mejores opciones de vuelos para cualquier destino en todo el mundo, con soporte completo en la elección y reserva.",
        image: "/plane.jpg",
      },
      {
        id: 2,
        category: "agencia",
        title: "Alojamiento",
        description:
          "Elige entre una amplia gama de hoteles, posadas y alojamientos exclusivos para garantizar una estancia cómoda y conveniente.",
        image: "/hospedagem.jpg",
      },
      {
        id: 3,
        category: "nuevo",
        title: "Chip Internacional",
        description:
          "Mantente conectado durante tu viaje con nuestros chips internacionales prepago, que ofrecen datos móviles en diversos países.",
        image: "/chip.jpg",
      },
      {
        id: 4,
        category: "agencia",
        title: "Seguro de Viaje",
        description:
          "Viaja con tranquilidad sabiendo que estás cubierto por nuestros seguros de viaje completos, protegiéndote contra imprevistos.",
        image: "/seguro.jpg",
      },
      {
        id: 5,
        category: "agencia",
        title: "Alquiler de Coches",
        description:
          "Explora tu destino con libertad y comodidad alquilando un coche adaptado a tus necesidades y preferencias.",
        image: "/car.jpg",
      },
      {
        id: 6,
        category: "documentos",
        title: "Asistencia de Pasaporte",
        description:
          "Obtén ayuda especializada para regularizar y obtener pasaportes, tanto para casos regulares como de emergencia.",
        image: "/passport.jpeg",
      },
      {
        id: 7,
        category: "documentos",
        title: "Asistencia de Visado",
        description:
          "Facilitamos la obtención de visados para turismo, estudio, trabajo y nómadas digitales, asegurándonos de que cumplas con los requisitos de cada país.",
        image: "/visto.png",
      },
      {
        id: 8,
        category: "ciudadanía",
        title: "Ciudadanía Europea",
        description:
          "Obtén la ciudadanía portuguesa, española o italiana con nuestro apoyo completo en todo el proceso.",
        image: "/europa2.jpg",
      },
      {
        id: 9,
        category: "documentos",
        title: "Traducción Jurada y Apostilla de La Haya",
        description:
          "Ofrecemos traducción jurada en inglés, francés, italiano, español y alemán, con apostilla de La Haya para garantizar la validez de tus documentos en el extranjero.",
        image: "/0.jpeg",
      },
    ],
  },
};

export default function CaseStudies({ language }: CaseStudiesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const cardRefs = useRef<HTMLDivElement[]>([]);

  const text = translations[language]; // Escolhe o idioma com base na prop

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      cardRefs.current.forEach((card) => {
        if (card && card.matches(":hover")) {
          const rect = card.getBoundingClientRect();
          const cardCenterX = rect.left + rect.width / 2;
          const cardCenterY = rect.top + rect.height / 2;

          const deltaX = event.clientX - cardCenterX;
          const deltaY = event.clientY - cardCenterY;

          const rotateX = -(deltaY / 10); // Ajuste da sensibilidade
          const rotateY = deltaX / 10;

          card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
          card.style.transition = `transform 0.1s ease-out`;
        }
      });
    };

    const resetRotation = () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.style.transform = `rotateX(0deg) rotateY(0deg) scale(1)`;
          card.style.transition = `transform 1s ease`;
        }
      });
    };

    cardRefs.current.forEach((card) => {
      if (card) {
        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", resetRotation);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          card.removeEventListener("mousemove", handleMouseMove);
          card.removeEventListener("mouseleave", resetRotation);
        }
      });
    };
  }, []);

  const sortedStudies =
    selectedCategory === "todos"
      ? text.caseStudies
      : [
          ...text.caseStudies.filter(
            (study) => study.category === selectedCategory
          ),
          ...text.caseStudies.filter(
            (study) => study.category !== selectedCategory
          ),
        ];

  return (
    <section className={styles.container}>
      <div className={styles.caseStudies}>
        <div className={styles.categories}>
          <div className={styles.title}>
            <h2>{text.title}</h2>
          </div>
          {/* <div className={styles.subcate}>
            {text.categories.map((category) => (
              <button
                key={category}
                className={selectedCategory === category ? styles.active : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div> */}
        </div>
        <div className={styles.grid}>
          {sortedStudies.map((study, index) => (
            <div
              key={study.id}
              className={`${styles.item} ${
                study.category !== selectedCategory &&
                selectedCategory !== "todos"
                  ? styles.hidden
                  : ""
              }`}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              onClick={() => {
                const message = `Gostaria de saber mais sobre ${study.title}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(
                  `https://wa.me/5511967930315?text=${encodedMessage}`,
                  "_blank"
                );
              }}
            >
              <img src={study.image} alt={study.title} />
              <div className={styles.overlay}>
                <h5>{study.title}</h5>
                <p className={styles.description}>{study.description}</p>
                <img
                  src="/arrowWhite.svg"
                  alt="Arrow"
                  className={styles.arrow}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
