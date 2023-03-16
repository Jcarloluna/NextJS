import React from "react";
import "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={`${styles.headerContainer} container-fluid`}>
      <div className={`col-md-6 d-flex p-4`}>
        <h2>Just Another Minecraft Multiplayer</h2>
      </div>
      <div className={`col-md-6 p-4`}>
        <div>
          <Button>Register</Button>
          <Button className={`btn-primary`}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
