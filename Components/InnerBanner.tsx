import { Fragment } from "react";
import styles from "./InnerBanner.module.css";
import Image from "next/image";
import Link from "next/link";
const InnerBanner = ({title}: {title: string}) => {
  return (
    <Fragment>
      <div className={styles.innerBannerWrap}>
        <div className={styles.wrap}>
          <div className={styles.innerBanner_breadcrumb}>
            <Link href={"/"}>
            <p><Image src={"/banner-houses.png"} alt="" width={40} height={24} />
            {title}</p></Link>
          </div>
          <h1>{title}</h1>
          <div className={styles.innerBanner_Banner}></div>
          <div className={styles.innerBanner_bottom}>
            <div className={styles.innerBaanner_body}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default InnerBanner;
