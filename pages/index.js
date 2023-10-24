import Head from "next/head";
import Image from "next/image";
import { Montserrat } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

const monserrat = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Bollo Güella</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={monserrat.className}>
        <div className="background-image"></div>
        <Header />
       
        <Banner />
        <div className="window-box"></div>
        <Menu />
        <div className="window-box"></div>
         <Hero />
         <div className="window-box"></div>
        <Blog />
        <div className="window-box"></div>
        <Gallery />
        <Contact /> 
      </main>
    </>
  );
}
