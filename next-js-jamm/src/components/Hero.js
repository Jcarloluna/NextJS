import React, { Fragment } from "react";
import SigninCard from "./SigninCard";
import styles from "./Hero.module.css";
import { useSelector } from "react-redux";
import Backdrop from "@/components/UI/Backdrop";
import ContentOverview from "@/components/ContentOverview";

const Hero = () => {
  const showModal = useSelector((state) => state.credsModal.showModal)
  
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>Just Another Minecraft Multiplayer</h1>
        <hr/>
        {showModal && <SigninCard/>}
        {showModal && <Backdrop/>}
      </div>
    </Fragment>
  );
};

export default Hero;
