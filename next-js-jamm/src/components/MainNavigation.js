import React from "react";
import { useSelector } from "react-redux";
import styles from "./MainNavigation.module.css";

import NavigationButtons from "../UI/NavigationButtons";
const MainNavigation = () => {
  const showModal = useSelector((state) => state.showModal);
  return (
    <div className={styles.container}>
      <h2>JAMM</h2>
      <NavigationButtons />
    </div>
  );
};

export default MainNavigation;
