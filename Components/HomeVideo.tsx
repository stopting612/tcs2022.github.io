import { Fragment } from "react";
import styles from "./HomeVideo.module.css";
import Image from "next/image";

const HomeVideo = () => {
  const data = {
    id: 1,
    title: "2022年交通習慣調查",
    link: "https://www.youtube.com/embed/ZHvkoFLXHb0?rel=0",
  };
  return (
    <Fragment>
      <div className={styles.home_video_wrap}>
        <h3>{data.title}</h3>
        <iframe src={data.link}></iframe>
      </div>
      <div className={styles.responsiveImgDestop}>
        <Image
          src="/graphics_home_middle.png"
          alt=""
          width={1180}
          height={171}
        ></Image>
      </div>
      <div className={styles.responsiveImgMobile}>
        <Image
          src="/graphics_home_middle_mobile.png"
          alt=""
          width={558}
          height={179}
        ></Image>
      </div>

    </Fragment>
  );
};

export default HomeVideo;
