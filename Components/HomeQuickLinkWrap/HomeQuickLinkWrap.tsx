import { Fragment } from "react";
import styles from "./HomeQuickLinkWrap.module.css";
import HomeQuickLinkCard from "./HomeQuickLinkCard";
import Link from "next/link";

const HomeQuickLinkWrap = () => {
  const data = [{
    id: 1 ,
    title: '調查方法',
    path: '/about-tcs-2022#surveyMethod',
    iconLogo:'/icon_survey.svg',
    bgColor: '#377d94',
    textBgColor: '#c9e1ea'
  },{
    id: 2 ,
    title: '網上問卷',
    path: '/online-survey',
    iconLogo:'/icon_data.svg',
    bgColor: '#7fcecd',
    textBgColor: '#b8e8e7'
  },{
    id: 3 ,
    title: '常見問題',
    path: '/faq',
    iconLogo:'/icon_faq.svg',
    bgColor: '#377d94',
    textBgColor: '#c9e1ea'
  },{
    id: 4 ,
    title: '新聞與媒體',
    path: '/news-and-media',
    iconLogo:'/icon_newsMedia.svg',
    bgColor: '#7fcecd',
    textBgColor: '#b8e8e7'
  }]
  return (
    <Fragment>
      <div className={styles.home_quickLinksWrap}>
        <div className={styles.home_quickLinksContainer}>
          {data.map((i: any, key: any) => (
            <HomeQuickLinkCard key={key} item={i} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default HomeQuickLinkWrap;
