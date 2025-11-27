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
      pt: "Eu simplesmente tive zero problemas com a Agência. E já viajo com eles a um bom tempo. Entregam tudo na palma da mão fora as assistências com os voos. Já precisei adiantar alguns e em minutos tudo estava resolvido. Sem contar que não achei melhor valor em outras agências. Ponto muito positivo também são as indicações dos profissionais referente a lugares e estadias. Tudo pensado para  o seu perfil. Sem palavras.",
      en: "I simply had zero issues with the Agency. I have been traveling with them for a long time. They deliver everything right into your hands, plus assistance with flights. I needed to expedite some things, and everything was resolved in minutes. Not to mention I couldn't find a better value with other agencies. A very positive point is also the professionals' recommendations regarding places and stays. Everything tailored to your profile. No words.",
      fr: "Je n'ai tout simplement eu aucun problème avec l'Agence. Je voyage avec eux depuis longtemps. Ils livrent tout directement entre vos mains, avec une assistance pour les vols. J'ai eu besoin d'accélérer certaines choses, et tout a été résolu en quelques minutes. Sans compter que je n'ai pas trouvé meilleur rapport qualité-prix ailleurs. Les recommandations des professionnels concernant les lieux et séjours sont également un point très positif. Tout est adapté à votre profil. Sans voix.",
      es: "Simplemente tuve cero problemas con la Agencia. Llevo viajando con ellos bastante tiempo. Entregan todo en la palma de la mano, además de asistencia con los vuelos. Necesité adelantar algunas cosas y todo se resolvió en minutos. Sin mencionar que no encontré un mejor valor en otras agencias. Las recomendaciones de los profesionales sobre lugares y estancias también son un punto muy positivo. Todo pensado para tu perfil. Sin palabras.",
    },
  },
  {
    id: 2,
    name: "Bruno Jesus",
    photo: "/bruno.png",
    texts: {
      pt: "Eles entenderam exatamente o que eu buscava e criaram um roteiro personalizado que superou todas as expectativas. As acomodações eram excelentes, os passeios bem organizados e todos os transfers pontuais. Além disso, sempre estavam disponíveis para esclarecer dúvidas durante a viagem, o que me deixou muito tranquilo.",
      en: "They understood exactly what I was looking for and created a personalized itinerary that exceeded all expectations. The accommodations were excellent, the tours well organized, and all transfers punctual. Furthermore, they were always available to clarify doubts during the trip, which made me feel very secure.",
      fr: "Ils ont compris exactement ce que je cherchais et ont créé un itinéraire personnalisé qui a dépassé toutes les attentes. Les hébergements étaient excellents, les visites bien organisées et tous les transferts ponctuels. De plus, ils étaient toujours disponibles pour répondre aux questions pendant le voyage, ce qui m'a rassuré.",
      es: "Entendieron exactamente lo que buscaba y crearon un itinerario personalizado que superó todas las expectativas. Los alojamientos fueron excelentes, los tours bien organizados y todos los traslados puntuales. Además, siempre estuvieron disponibles para aclarar dudas durante el viaje, lo que me dejó muy tranquilo.",
    },
  },
  {
    id: 3,
    name: "Eder Gustavo",
    photo: "/ederr.jpg",
    texts: {
      pt: "Empresa incrível, já realizei viagens pela Europa e América do Sul com eles e foi além do esperado, sempre que tenho em mente uma viagem, eles são minha primeira opção de escolha, sigo recomendando a todos colegas e amigos sempre que me pedem indicações de agências para realizar suas viagens!!!!",
      en: "Incredible company, I have already traveled through Europe and South America with them, and it exceeded expectations. Whenever I plan a trip, they are my first choice, I continue to recommend them to all colleagues and friends whenever they ask me for agency recommendations for their trips!!!!",
      fr: "Entreprise incroyable, j'ai déjà voyagé en Europe et en Amérique du Sud avec eux, et cela a dépassé les attentes. Chaque fois que je pense à un voyage, ils sont mon premier choix, je continue de les recommander à tous mes collègues et amis qui me demandent des recommandations d'agences pour leurs voyages !!!!",
      es: "Compañía increíble, ya he viajado por Europa y Sudamérica con ellos y ha superado las expectativas. Siempre que tengo un viaje en mente, son mi primera opción, sigo recomendándolos a todos mis colegas y amigos que me piden recomendaciones de agencias para realizar sus viajes!!!!",
    },
  },
  {
    //trocar foto e nome para outro depoimento que preencha o espaço solicitado.
    id: 3,
    name: "Eder Gustavo",
    photo: "/ederr.jpg",
    texts: {
      pt: "Empresa incrível, já realizei viagens pela Europa e América do Sul com eles e foi além do esperado, sempre que tenho em mente uma viagem, eles são minha primeira opção de escolha, sigo recomendando a todos colegas e amigos sempre que me pedem indicações de agências para realizar suas viagens!!!!",
      en: "Incredible company, I have already traveled through Europe and South America with them, and it exceeded expectations. Whenever I plan a trip, they are my first choice, I continue to recommend them to all colleagues and friends whenever they ask me for agency recommendations for their trips!!!!",
      fr: "Entreprise incroyable, j'ai déjà voyagé en Europe et en Amérique du Sud avec eux, et cela a dépassé les attentes. Chaque fois que je pense à un voyage, ils sont mon premier choix, je continue de les recommander à tous mes collègues et amis qui me demandent des recommandations d'agences pour leurs voyages !!!!",
      es: "Compañía increíble, ya he viajado por Europa y Sudamérica con ellos y ha superado las expectativas. Siempre que tengo un viaje en mente, son mi primera opción, sigo recomendándolos a todos mis colegas y amigos que me piden recomendaciones de agencias para realizar sus viajes!!!!",
    },
  },
  {
    id: 4,
    name: "Ricardo Barbosa",
    photo: "/ricardo.png",
    texts: {
      pt: "Não tenho palavras pra descrever o quão grato sou pela agência por me ajudar na realização de um sonho em assistir as olimpíadas em Paris. Preços das passagens super em conta e em altíssima temporada, além de todo o suporte durante a minha viagem, recomendo sempre a agência. Nota 10 em suporte ao cliente 🙌🏾",
      en: "I have no words to describe how grateful I am to the agency for helping me fulfill a dream of watching the Olympics in Paris. Super affordable ticket prices, even in high season, plus all the support during my trip, I always recommend the agency. 10/10 customer support 🙌🏾",
      fr: "Je n'ai pas de mots pour décrire à quel point je suis reconnaissant envers l'agence de m'avoir aidé à réaliser un rêve en assistant aux Jeux olympiques de Paris. Prix des billets super abordables, même en haute saison, plus tout le soutien pendant mon voyage, je recommande toujours l'agence. Note 10 pour le support client 🙌🏾",
      es: "No tengo palabras para describir lo agradecido que estoy con la agencia por ayudarme a cumplir un sueño de ver las olimpiadas en París. Precios de pasajes súper asequibles, incluso en temporada alta, además de todo el apoyo durante mi viaje, siempre recomiendo la agencia. ¡10/10 en soporte al cliente 🙌🏾",
    },
  },
];

// URLs para o Google (A URL deve ser a mesma para todos os idiomas)
const googleUrl =
  "https://www.google.com/maps/place/E+ai+Destino/@-23.6463283,-46.7477352,17z/data=!4m8!3m7!1s0x94ce5152f97ecf19:0xca230375cc7ebeda!8m2!3d-23.6463283!4d-46.7451549!9m1!1b1!16s%2Fg%2F11vzx73j51?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D";
// LEMBRETE: Use SUA URL CORRETA do Google Maps Reviews AQUI!

export default function GoogleReviews({ language }: GoogleReviewsProps) {
  // Seleciona as traduções estáticas com base no idioma atual
  const text = translations[language];

  return (
    <section className={styles.container}>
      {/* 1. Título traduzido */}
      <h2 className={styles.title}>{text.title}</h2>

      {/* Bloco de Credibilidade (Estático/Números) */}
      <div className={styles.googleCredibility}>
        <div className={styles.ratingInfo}>
          <Image src="/maps.svg" alt="Logo Google" width={80} height={26} />

          <p className={styles.ratingValue}>4.9</p>
          <div className={styles.starIcons}>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
            <span className={styles.star}>★</span>
          </div>
          {/* 2. Contagem de avaliações traduzida */}
          <p className={styles.reviewCount}>{text.reviewCount}</p>
        </div>
      </div>

      {/* Wrapper para o Carrossel/Reviews */}
      <div className={styles.reviewsCarouselWrapper}>
        <div className={styles.reviewsWrapper}>
          {reviewData.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              <span className={styles.quoteIcon}>“</span>

              {/* 3. Texto do depoimento traduzido, selecionando a chave de linguagem */}
              <p className={styles.reviewText}>{review.texts[language]}</p>

              <div className={styles.reviewerInfo}>
                <div className={styles.reviewerPhotoContainer}>
                  <Image
                    src={review.photo}
                    alt={`Foto de perfil de ${review.name}`}
                    width={70}
                    height={70}
                    className={styles.reviewerPhoto}
                  />
                </div>

                <h4 className={styles.reviewerName}>{review.name}</h4>
                {/* 4. Fonte traduzida */}
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
          {/* 5. Texto do botão traduzido */}
          {text.ctaText}
        </a>
      </Link>
    </section>
  );
}
