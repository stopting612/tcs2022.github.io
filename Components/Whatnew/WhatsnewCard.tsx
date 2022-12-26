import React, { Fragment, FC } from "react";
import styles from "./WhatsnewCard.module.css";

interface WhatsnewItemProps {
  id: number;
  title: string;
  date: string;
}

const WhatsnewCard = ({ item }: { item: WhatsnewItemProps }) => {
  return (
    <Fragment>
        <div  className={`${styles.swiper_slide2} ${styles.home_slide2}`}>
          <p>{item.title}</p>
          <div className={styles.home_date}>{item.date}</div>
        </div>
    </Fragment>
  );
};

export default WhatsnewCard;
