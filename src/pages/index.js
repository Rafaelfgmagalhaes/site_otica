import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Cabecalho from "@/components/Cabecalho";
import Banner from "@/components/Banner";
import SecaoPrincipal from "@/components/SecaoPrincipal";
import SecaoSecundaria from "@/components/SecaoSecundaria";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Head lang="pt-br">
        <title>Óticas Vida</title>
        <meta name="robots" content="follow, index"/>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./ocrim.png" />
      </Head>
      <Cabecalho/>
      <Banner/>
      <SecaoPrincipal/>
      <SecaoSecundaria/>
      <Footer/>
    </>
  );
}
