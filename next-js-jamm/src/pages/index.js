import MainNavigation from "@/components/MainNavigation";
import Hero from "@/components/Hero";
import { Fragment } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";


const HomePage = () => {
  return (
    <Fragment>
      <Head>
        <link rel="shortcut icon" href="/images/appIcon.png" />
        <title>
          JAMM
        </title>
      </Head>
      <MainNavigation/>
      <Hero/>
      <Footer/>
    </Fragment>

  )
}

export default HomePage;
