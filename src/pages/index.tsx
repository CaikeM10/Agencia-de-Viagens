import Head from "next/head";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CaseStudies from "@/components/products";
//import ScrollProgressBar from "@/components/scrollBar";
import ScrollText from "@/components/scrollText";
import Steps from "@/components/steps";
import TravelShowcase from "@/components/travelshowcase";
import GoogleReviews from "@/components/googlereviews";
import Partners from "@/components/partners";

import { Inter } from "next/font/google";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Language = "pt" | "en" | "fr" | "es";

export default function Home() {
  const aboutUsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [language, setLanguage] = useState<Language>("pt");

  const translations = {
    pt: {
      title: "E ai Destino | Sua Agência de Viagens",
      description:
        " E ai, qual será o seu próximo detino ? A melhor agência de viagens com os melhores preços. Planeje sua próxima aventura conosco!",
      previewImage: "https://wwW.eaidestino.com.br/graph-pt.jpg",
    },
    en: {
      title: "E AI DESTINO - Your Travel Agency",
      description:
        "The best travel agency with the best prices. Plan your next adventure with us!",
      previewImage: "https://www.eaidestino.com.br/graph-en.jpg",
    },
    fr: {
      title: "E AI DESTINO - Votre Agence de Voyages",
      description:
        "La meilleure agence de voyage avec les meilleurs prix. Planifiez votre prochaine aventure avec nous !",
      previewImage: "https://www.eaidestino.com.br/graph-fr.jpg",
    },
    es: {
      title: "E AI DESTINO - Tu Agencia de Viajes",
      description:
        "La mejor agencia de viajes con los mejores precios. ¡Planifica tu próxima aventura con nosotros!",
      previewImage: "https://www.eaidestino.com.br/graph-es.jpg",
    },
  };

  const text = translations[language];

  return (
    <>
      <Head>
        <title>{text.title}</title>
        <meta name="description" content={text.description} />

        {/* Adiciona a tag canonical, que evita conteúdo duplicado para SEO */}
        <link rel="canonical" href="https://www.eaidestino.com.br" />

        {/* Tags para favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Tags para WhatsApp, Facebook, etc. (Open Graph) */}
        <meta property="og:title" content={text.title} />
        <meta property="og:description" content={text.description} />
        <meta property="og:image" content={text.previewImage} />
        <meta property="og:url" content="https://www.eaidestino.com.br" />
        <meta property="og:type" content="website" />

        {/* Tags para o Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={text.title} />
        <meta name="twitter:description" content={text.description} />
        <meta name="twitter:image" content={text.previewImage} />
      </Head>
      <Header
        aboutUsRef={aboutUsRef}
        servicesRef={servicesRef}
        contactRef={contactRef}
        language={language}
        setLanguage={setLanguage}
      />
      <main>
        <Banner language={language} />
        <div ref={aboutUsRef}>
          <Experience language={language} />
        </div>
        <div>
          <Steps language={language} />
        </div>
        <div ref={servicesRef}>
          <CaseStudies language={language} />
        </div>
        <div>
          <TravelShowcase language={language} />
        </div>
        <div ref={contactRef}>
          <ScrollText language={language} />
        </div>
        <GoogleReviews language={language} />
        {/* NOVO: Componente Partners adicionado abaixo de GoogleReviews */}
        <Partners language={language} />
      </main>
      <Footer ref={contactRef} language={language} />
    </>
  );
}
