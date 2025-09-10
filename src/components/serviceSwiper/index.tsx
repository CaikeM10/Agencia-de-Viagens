"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useRef } from "react";
import styles from "./styles.module.scss";

const BairrosSlider = () => {
  const slides = [
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
  ];

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");

  return (
    <div className={styles["bairros-slider"]}>
      <div className={styles.content}>
        <h2>Nossos Serviços</h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          breakpoints={{
            768: { slidesPerView: 3 },
            480: { slidesPerView: 1 },
          }}
          className={`${styles["swiper-container"]} custom-swiper`}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                key={slide.id}
                className={`${styles.item} ${
                  selectedCategory !== "todos" &&
                  selectedCategory !== slide.title
                    ? styles.hidden
                    : ""
                }`}
                ref={(el) => {
                  if (el) cardRefs.current[index] = el;
                }}
                onClick={() => {
                  const message = `Gostaria de saber mais sobre ${slide.title}`;
                  const encodedMessage = encodeURIComponent(message);
                  window.open(
                    `https://wa.me/5511967930315?text=${encodedMessage}`,
                    "_blank"
                  );
                }}
              >
                <img src={slide.image} alt={slide.title} />
                <div className={styles.overlay}>
                  <h5>{slide.title}</h5>
                  <p className={styles.description}>{slide.description}</p>
                  <img
                    src="/arrowWhite.svg"
                    alt="Arrow"
                    className={styles.arrow}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BairrosSlider;
