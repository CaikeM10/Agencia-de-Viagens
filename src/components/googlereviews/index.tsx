import React, { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

interface GoogleReviewsProps {
  language: "pt" | "en" | "fr" | "es";
}

const translations = {
  pt: {
    title: "O que dizem os nossos viajantes?",
    reviewSource: "Fonte: Google Maps",
    reviewCount: "Baseado em 80+ avaliações",
    ctaText: "Ver todas as avaliações no Google",
  },
  en: {
    title: "What our travelers say?",
    reviewSource: "Source: Google Maps",
    reviewCount: "Based on 80+ reviews",
    ctaText: "See all reviews on Google",
  },
  fr: {
    title: "Que disent nos voyageurs ?",
    reviewSource: "Source : Google Maps",
    reviewCount: "Basé sur 80+ avis",
    ctaText: "Voir tous les avis sur Google",
  },
  es: {
    title: "¿Qué dicen nuestros viajeros?",
    reviewSource: "Fuente: Google Maps",
    reviewCount: "Basado en 80+ reseñas",
    ctaText: "Ver todas las reseñas en Google",
  },
};

const reviewData = [
  {
    id: 1,
    name: "Thiago de Macedo",
    photo: "/thiago.png",
    texts: {
      pt: "Eu simplesmente tive zero problemas com a Agência. E já viajo com eles a um bom tempo. Entregam tudo na palma da mão fora as assistências com os voos. Já precisei adiantar alguns e em minutos tudo estava resolvido. Sem contar que não achei melhor valor em outras agências. Ponto muito positivo também são as indicações dos profissionais referente a lugares e estadias. Tudo pensado para o seu perfil. Sem palavras.",
      en: "I simply had zero problems with the Agency. I have been traveling with them for quite some time. They put everything in the palm of your hand, including assistance with flights. I needed to expedite a few things and everything was resolved in minutes. Not to mention, I couldn't find better prices at other agencies. A very positive point is the professionals' recommendations for places and stays. Everything tailored to your profile. No words.",
      fr: "Je n'ai eu absolument aucun problème avec l'Agence. Je voyage avec eux depuis assez longtemps. Ils donnent tout entre vos mains, y compris l'assistance pour les vols. J'ai dû accélérer certaines démarches et tout a été réglé en quelques minutes. Sans parler du fait que je n'ai pas trouvé de meilleurs tarifs chez d'autres agences. Un point très positif également : les recommandations des professionnels pour les lieux et les hébergements. Tout est pensé pour votre profil. Je n'ai pas de mots.",
      es: "Simplemente no tuve ningún problema con la Agencia. Llevo viajando con ellos desde hace bastante tiempo. Entregan todo en la palma de la mano, incluida la asistencia con los vuelos. Tuve que adelantar algunas cosas y todo se resolveu en minutos. Además, no encontré mejores precios en otras agencias. Un punto muy positivo son las recomendaciones de los profesionales sobre lugares y estancias. Todo pensado para tu perfil. Sin palabras.",
    },
  },
  {
    id: 2,
    name: "Bruno Jesus",
    photo: "/bruno.png",
    texts: {
      pt: "Eles entenderam exatamente o que eu buscava e criaram um roteiro personalizado que superou todas as expectativas. As acomodações eram excelentes, os passeios bem organizados e todos os transfers pontuais. Além disso, sempre estavam disponíveis para esclarecer dúvidas durante a viagem, o que me deixou muito tranquilo.",
      en: "They understood exactly what I was looking for and created a personalized itinerary that exceeded all expectations. The accommodations were excellent, the tours well organized, and all transfers punctual. Additionally, they were always available to answer questions during the trip, which made me feel very at ease.",
      fr: "Ils ont parfaitement compris ce que je recherchais et ont créé un itinéraire personnalisé qui a dépassé toutes mes attentes. Les hébergements étaient excellents, les excursions bien organisées et tous les transferts ponctuels. De plus, ils étaient toujours disponibles pour répondre aux questions pendant le voyage, ce qui m'a beaucoup rassuré.",
      es: "Entendieron exactamente lo que buscaba y crearon un itinerario personalizado que superó todas las expectativas. Los alojamientos fueron excelentes, los paseos bien organizados y todos los traslados puntuales. Además, siempre estuvieron disponibles para aclarar dudas durante el viaje, lo que me dejó muy tranquilo.",
    },
  },
  {
    id: 3,
    name: "Eder Gustavo",
    photo: "/ederr.jpg",
    texts: {
      pt: "Empresa incrível, já realizei viagens pela Europa e América do Sul com eles e foi além do esperado, sempre que tenho em mente uma viagem, eles são minha primeira opção de escolha, sigo recomendando a todos colegas e amigos sempre que me pedem indicações de agências para realizar suas viagens!!!!",
      en: "Incredible company — I've already traveled through Europe and South America with them and it exceeded expectations. Whenever I have a trip in mind, they are my first choice. I keep recommending them to colleagues and friends whenever they ask me for agency suggestions for their trips!!!!",
      fr: "Entreprise incroyable — j'ai déjà voyagé en Europe et en Amérique du Sud avec eux et cela a dépassé mes attentes. Chaque fois que je pense à un voyage, ce sont mon premier choix. Je continue de les recommander à mes collègues et amis quand ils me demandent des suggestions d'agences pour leurs voyages!!!!",
      es: "Compañía increíble: ya he viajado por Europa y Sudamérica con ellos y superó las expectativas. Siempre que tengo un viaje en mente, son mi primera opción. Sigo recomendándolos a colegas y amigos cuando me piden sugerencias de agencias para sus viajes!!!!",
    },
  },
  {
    id: 4,
    name: "Marline Albuquerque",
    photo: "/ederr.jpg",
    texts: {
      pt: "Na Eai destino você pode viajar sem medo, atendimento de primeira qualidade os preços das viagens também são excelentes.parabēns por nos atender tão bem.",
      en: "At Eai Destino you can travel without fear; top-quality service and travel prices are also excellent. Congratulations for serving us so well.",
      fr: "Chez Eai Destino, vous pouvez voyager sans crainte ; un service de première qualité et des prix de voyage également excellents. Félicitations pour nous avoir si bien servis.",
      es: "En Eai Destino puedes viajar sin miedo; atención de primera calidad y los precios de los viajes también son excelentes. Felicitaciones por atendernos tan bien.",
    },
  },
  {
    id: 5,
    name: "Ricardo Barbosa",
    photo: "/ricardo.png",
    texts: {
      pt: "Não tenho palavras pra descrever o quão grato sou pela agência por me ajudar na realização de um sonho em assistir as olimpíadas em Paris. Preços das passagens super em conta e em altíssima temporada, além de todo o suporte durante a minha viagem, recomendo sempre a agência. Nota 10 em suporte ao cliente 🙌🏾",
      en: "I have no words to describe how grateful I am to the agency for helping me fulfill a dream of attending the Olympics in Paris. Ticket prices were super affordable even in peak season, and I received full support during my trip. I always recommend the agency. 10/10 for customer support 🙌🏾",
      fr: "Je n'ai pas de mots pour décrire à quel point je suis reconnaissant envers l'agence de m'avoir aidé à réaliser un rêve : assister aux Jeux olympiques à Paris. Les prix des billets étaient très abordables même en haute saison et j'ai bénéficié d'un soutien complet pendant mon voyage. Je recommande toujours l'agence. 10/10 pour le service client 🙌🏾",
      es: "No tengo palabras para describir lo agradecido que estoy con la agencia por ayudarme a cumplir el sueño de asistir a los Olímpicos en París. Los precios de los pasajes fueron muy accesibles incluso en temporada alta y recibí todo el apoyo durante mi viaje. Siempre recomiendo la agencia. 10/10 en atención al cliente 🙌🏾",
    },
  },
];

const googleUrl = "https://www.google.com/maps";

export default function GoogleReviews({ language }: GoogleReviewsProps) {
  const text = translations[language];
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      if (isPaused.current) return;

      if (
        scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
        scrollContainer.scrollWidth - 10
      ) {
        scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Desloca 350px (tamanho do card 320px + gap 30px)
        scrollContainer.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{text.title}</h2>

      <div className={styles.googleCredibility}>
        <div className={styles.ratingInfo}>
          <Image src="/maps.svg" alt="Logo Google" width={80} height={26} />
          <p className={styles.ratingValue}>4.9</p>
          <div className={styles.starIcons}>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
            <span>★</span>
          </div>
          <p className={styles.reviewCount}>{text.reviewCount}</p>
        </div>
      </div>

      <div
        className={styles.reviewsCarouselWrapper}
        ref={scrollRef}
        onMouseEnter={() => (isPaused.current = true)}
        onMouseLeave={() => (isPaused.current = false)}
        onTouchStart={() => (isPaused.current = true)}
        onTouchEnd={() => (isPaused.current = false)}
      >
        <div className={styles.reviewsWrapper}>
          {reviewData.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <span className={styles.quoteIcon}>“</span>
              <p className={styles.reviewText}>{review.texts[language]}</p>

              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerPhotoContainer}>
                  <Image
                    src={review.photo}
                    alt={`Foto de ${review.name}`}
                    width={70}
                    height={70}
                    className={styles.reviewerPhoto}
                  />
                </div>
                <h4 className={styles.reviewerName}>{review.name}</h4>
                <span className={styles.source}>{text.reviewSource}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href={googleUrl} passHref legacyBehavior>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
        >
          {text.ctaText}
        </a>
      </Link>
    </section>
  );
}
