import { useState, useRef } from "react";
import { Swiper as SwiperType } from "swiper/types"; // Import Swiper types

import { Swiper, SwiperSlide } from "swiper/react";
// @ts-ignore

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
import "swiper/css/effect-cards";
import styles from "../styles/new-page.module.scss";
import {
  A11y,
  Autoplay,
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Header from "@/components/header";

export default function NewPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null); // Reference for the Swiper instance

  const slides = [
    {
      title: "BALI",
      description:
        "Em Bali, você pode encontrar praias paradisíacas e muita natureza.",
      backgroundImage: "/travel1.jpg",
      pageBackground: "/images/bali2.jpg",
    },
    {
      title: "Kerala",
      description:
        "Kerala é um dos destinos mais populares da Índia para turistas de todo o mundo.",
      backgroundImage: "/images/bali1.jpg",
      pageBackground: "/images/bali3.jpg",
    },
    {
      title: "Indonesia",
      description:
        "Indonésia oferece vistas deslumbrantes e praias paradisíacas.",
      backgroundImage: "/travel2.webp",
      pageBackground: "/images/bali4.jpg",
    },
    {
      title: "Tokyo",
      description: "Tokyo é uma cidade incrível e cheia de cultura.",
      backgroundImage: "/images/bali.jpg",
      pageBackground: "/images/tokyo.jpg",
    },
  ];

  type Language = "pt" | "en" | "fr" | "es";
  const experienceRef = useRef(null);
  const stepsRef = useRef(null);
  const productsRef = useRef(null);
  const travelShowcaseRef = useRef(null);
  const contactRef = useRef(null);

  const [language, setLanguage] = useState<Language>("pt");

  return (
    <>
      <Header
        experienceRef={experienceRef}
        stepsRef={stepsRef}
        productsRef={productsRef}
        travelShowcaseRef={travelShowcaseRef}
        contactRef={contactRef}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Custom Navigation Buttons */}

      <div
        className={styles.container}
        style={{
          backgroundImage: `url(${slides[currentSlide].pageBackground})`,
          transition: "background-image 1s ease-in-out",
        }}
      >
        <div className={styles.content}>
          <h1 data-swiper-animation="animate__fadeIn" data-duration="0.6s">
            {slides[currentSlide].title}
          </h1>
          <p data-swiper-animation="animate__fadeIn" data-duration="0.6s">
            {slides[currentSlide].description}
          </p>
          <button className={styles.exploreButton}>Saiba Mais</button>
        </div>
        <div className={styles.customNavButtons}>
          <button onClick={() => swiperRef.current?.slidePrev()}>
            <img src="/images/arrow.svg" alt="" />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <img src="/images/arrow-right.svg" alt="" />
          </button>
        </div>
        <Swiper
          modules={[
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
            EffectCards,
            Navigation,
          ]}
          spaceBetween={50}
          loop={true}
          slidesPerView={2.5}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={1500}
          //   pagination={{ clickable: true }}
          onSlideChange={(swiper) => setCurrentSlide(swiper.realIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Capture Swiper instance
          className={styles.slider}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageContent}>
                <div
                  className={styles.imageCard}
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                ></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
