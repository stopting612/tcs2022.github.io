import React, { Fragment } from "react";
import styles from "./HomeBanner.module.css";
import Image from "next/image";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <Fragment>
      <div className={styles.main_banner}>
        <div className={`${styles.home_banner_wrap}`}>
          <div className={`${styles.wrap} ${styles.home_banner}`}>
            <div className={styles.home_logo_container}>
              <Image
                src="/homeBanner_logo.png"
                alt=""
                width={235}
                height={82}
              ></Image>
            </div>
            <div className={styles.responsiveImgDesktop}>
              <Image
                src="/main-banner-zh-HK.png"
                alt=""
                width={1180}
                height={512}
              ></Image>
            </div>
            <div className={styles.responsiveImgMobile}>
              <Image
                src="/bg_banner_mob_zh-HK.png"
                alt=""
                width={1180}
                height={1180}
              ></Image>
            </div>
          </div>
          <div className={styles.home_startSurvey}>
            <Link href="/online-survey">
              <a>填報網上問卷或預約訪問</a>
            </Link>
          </div>
        </div>
        <div className={styles.home_obj_banner}>
          <div className={styles.home_obj_wrap}>
            <div className={`${styles.wrap} ${styles.home_obj}`}>
              <div className={styles.home_homeParagraph}>
                <h2 className={styles.home_homeSubtitle}>目的</h2>
                <p>
                  交通習慣調查旨在搜集市民最新的出行資料，以更新及改良策略性運輸模型，作預測交通情況之用。有關交通預測將在規劃運輸設施及制訂運輸政策時提供重要參考，讓未來運輸系統更切合市民的需要。
                </p>
                <div className={styles.home_imgWrap}>
                  <Image
                    src="/graphics_objectives_bus.png"
                    alt=""
                    width={388}
                    height={67}
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default HomeBanner;
