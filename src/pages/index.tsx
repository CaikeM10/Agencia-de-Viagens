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
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const experienceRef = useRef(null);
  const stepsRef = useRef(null);
  const productsRef = useRef(null);
  const travelShowcaseRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <ScrollProgressBar />
      <Banner />
      <Header
        experienceRef={experienceRef}
        stepsRef={stepsRef}
        productsRef={productsRef}
        travelShowcaseRef={travelShowcaseRef}
        contactRef={contactRef}
      />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={stepsRef}>
        <Steps />
      </div>
      <div ref={productsRef}>
        <CaseStudies />
      </div>
      <div ref={travelShowcaseRef}>
        <TravelShowcase />
      </div>
      <div ref={contactRef}>
        <ScrollText />
      </div>
      <Footer />
    </>
  );
}
