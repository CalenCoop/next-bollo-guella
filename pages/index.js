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
import grainBread from "../public/pexels-rdne-stock-project-8964024.jpg"

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
        <div className="overlay"></div>
        <div className="background-image"></div>

        <Header />

        <Banner />
        <div className="window-box"></div>
        <Menu />

        <div className="window-box"></div>
        <Image
        src="/victoria-shes-IUk1S6n2s0o-unsplash.jpg" width={700} height={700}
        sizes="100vw"
       
        style={{
          width: '100%',
          height: 'auto',
          padding: "30px"
        }}
      

      />
        <Hero />

        <Blog />
        <div className="window-box"></div>
        <Gallery />
        <Contact />
      </main>
    </>
  );
}
