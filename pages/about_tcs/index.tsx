import { Fragment } from "react";
import InnerBanner from "../../Components/InnerBanner";
import { Button, Link } from "react-scroll/modules";
import FaqCard from "../../Components/FaqCard/FaqCard";
import Navbar from "../../Components/Navbar";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styles from "./about_tcs.module.css"
import AboutTcsCard from "../../Components/AboutTcsCard/AboutTcsCard";


const about_tcs = (result: any) => {
  const data = result.result
  return (
    <Fragment>
      <Navbar />
      <InnerBanner title={"認識交通習慣調查"} />
      <div className={styles.wrap}>
      {data.map((item: any, key: any) => (
          <AboutTcsCard key={key} item={item}></AboutTcsCard>
        ))}
      
      </div>  
    </Fragment>
  );
};



export async function getServerSideProps({ locale }: any) {

  const res = await fetch('https://tcs2022.github.io/api/about_tcs')
  const result = await res.json()
  console.log(result)
  // return props
  return {
    props: { result : result.data, ...(await serverSideTranslations(locale, ["common", "navbar"]))}, // will be passed to the page component as props
  }
}

export default about_tcs;
