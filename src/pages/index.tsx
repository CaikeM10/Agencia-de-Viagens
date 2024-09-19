import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import CaseStudies from "@/components/products";
import ScrollProgressBar from "@/components/scrollBar";
import ScrollText from "@/components/scrollText";
import Steps from "@/components/steps";
import TravelShowcase from "@/components/travelshowcase";
import { Inter } from "next/font/google";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

type Language = "pt" | "en" | "fr" | "es";
//
export default function Home() {
  const experienceRef = useRef(null);
  const stepsRef = useRef(null);
  const productsRef = useRef(null);
  const travelShowcaseRef = useRef(null);
  const contactRef = useRef(null);

  const [language, setLanguage] = useState<Language>("pt");

  return (
    <>
      <ScrollProgressBar />
      <Banner language={language} />
      <Header
        experienceRef={experienceRef}
        stepsRef={stepsRef}
        productsRef={productsRef}
        travelShowcaseRef={travelShowcaseRef}
        contactRef={contactRef}
        language={language}
        setLanguage={setLanguage}
      />
      <div ref={experienceRef}>
        <Experience language={language} />
      </div>
      <div ref={stepsRef}>
        <Steps language={language} />
      </div>
      <div ref={productsRef}>
        <CaseStudies language={language} />
      </div>
      <div ref={travelShowcaseRef}>
        <TravelShowcase language={language} />
      </div>
      <div ref={contactRef}>
        <ScrollText language={language} />
      </div>
      <Footer language={language} />
    </>
  );
}
