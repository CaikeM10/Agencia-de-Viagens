import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import Steps from "@/components/steps";
import TravelShowcase from "@/components/travelshowcase";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Experience />
      <Steps />
      <Services />
      <TravelShowcase />
      <Footer />
    </>
  );
}
