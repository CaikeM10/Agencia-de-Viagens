import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Banner from "@/components/banner";
import Experience from "@/components/experience";
import Services from "@/components/services";
import Steps from "@/components/steps";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Banner />
      <Experience />
      <Steps />
      <Services />
    </>
  );
}
