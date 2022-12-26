import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import FlexItem from "./FlexItem";

const Footer = () => {
  return (
    <div className={`${styles.staticPageFooter} ${styles.tch}`}>
      <div className={styles.wrap}>
        <div className={styles.extLinksWrap}>
          <Link href="https://www.gov.hk/tc/residents/">
            <a>
              <Image
                src="/logo_hkgov.png"
                alt=""
                width={104}
                height={36}
              ></Image>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image
                src="/logo_hkdragon.png"
                alt=""
                width={84}
                height={31}
              ></Image>
            </a>
          </Link>
          <Link href="/">
            <a>
              <Image src="/logo_td.png" alt="" width={135} height={36}></Image>
            </a>
          </Link>
        </div>
        <div className={styles.credit_wrap}>
          <div className={styles.terms_wrap}>
            <Link href="/">
              <a>使用條款及條件</a>
            </Link>
            |  ©2022年交通習慣調查 版權所有
          </div>
          <div className={styles.lastrevision}>修訂日期: 2022年9月4日</div>
        </div>
        <FlexItem />
      </div>
    </div>
  );
};

export default Footer;
