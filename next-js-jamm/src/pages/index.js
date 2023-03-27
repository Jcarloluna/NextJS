import MainNavigation from "@/components/MainNavigation";
import Hero from "@/components/Hero";
import { Fragment } from "react";
import Footer from "@/components/Footer";

const HomePage = () => {
  return (
    <Fragment>
      <MainNavigation/>
      <Hero/>
      <Footer/>
    </Fragment>

  )
}

export default HomePage;
