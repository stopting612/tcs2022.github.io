import { Fragment } from "react";
import styles from "./faq.module.css";
import InnerBanner from "../../Components/InnerBanner";
import { Button, Link } from "react-scroll/modules";
import FaqCard from "../../Components/FaqCard/FaqCard";
import Navbar from "../../Components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const faq = (result: any) => {
  const data = result.result
  return (
    <Fragment>
      <Navbar />
      <InnerBanner title={"常見問題"} />
      <div className={styles.wrap}>
        <div className={styles.faq_outline}>
          <ul>
            <div className={styles.faq_outline_box}>
              <li>
                <Link
                  activeClass="active"
                  to="survey"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  調查程序
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="online"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  網上問卷
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="interview"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  面談訪問
                </Link>
              </li>
            </div>
            <div className={styles.faq_outline_box}>
              <li>
                <Link
                  activeClass="active"
                  to="telephone"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  電話訪問
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="confidentiality"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  資料安全及保密性
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="measures"
                  spy={true}
                  smooth={true}
                  offset={500}
                  duration={500}
                >
                  防疫措施
                </Link>
              </li>
            </div>
          </ul>
        </div>
        <div className={styles.faq_point_line_grey}></div>
        {data.map((item: any, key: any) => (
          <FaqCard key={key} item={item}></FaqCard>
        ))}
        
      </div>
    </Fragment>
  );
};



export async function getServerSideProps({ locale }: any) {

  const res = await fetch('https://tcs2022.github.io/api/faq')
  const result = await res.json()
  // return props
  return {
    props: { result : result.data, ...(await serverSideTranslations(locale, ["common", "navbar"]))}, // will be passed to the page component as props
  }
}

export default faq;
