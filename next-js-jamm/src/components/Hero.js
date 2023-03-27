import React, { Fragment } from "react";
import SigninCard from "../UI/SigninCard";
import styles from "./Hero.module.css";
import { useSelector } from "react-redux";
import Backdrop from "@/UI/Backdrop";

const Hero = () => {
  const showModal = useSelector((state) => state.credsModal.showModal)
  
  return (
    <Fragment>
      <div className={styles.container}>
        <h1 className={styles.title}>Just Another Minecraft Server</h1>
        <hr/>
        {showModal && <SigninCard/>}
        {showModal && <Backdrop/>}
      </div>
    </Fragment>
  );
};

export default Hero;
