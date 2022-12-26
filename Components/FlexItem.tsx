import styles from "./FlexItem.module.css";
import { useEffect } from "react";

const FlexItem = () => {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }, [])
  return (
    <div className={styles.fixedItem}>
      <button onClick={() => {
        window.scrollTo({top: 0, behavior: 'smooth'})
      }} className={styles.btn_backtoTop}></button>
    </div>
  );
};

export default FlexItem;
