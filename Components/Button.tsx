import { Fragment } from "react";
import styles from "./Button.module.css";



const Button = ({title}: any) => {
  return (
    <Fragment>
        <div className={styles.buttonComponent}>
                <div className={styles.btn}>{title}</div>
        </div>
      
    </Fragment>
  );
};

export default Button;
