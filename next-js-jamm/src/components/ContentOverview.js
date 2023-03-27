import React from "react";
import { Fragment } from "react";
import styles from "./ContentOverview.module.css";

const ContentOverview = () => {
  return (
    <div>
      <Fragment>
        <div className={styles.container}>
          <div>Houses
            <div className={styles.card}>
                
            </div>
          </div>
          <div>Equipments</div>
          <div>Enchantments</div>
        </div>
      </Fragment>
    </div>
  );
};

export default ContentOverview;
