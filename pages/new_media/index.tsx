import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Fragment } from "react";
import InnerBanner from "../../Components/InnerBanner";
import Navbar from "../../Components/Navbar";
import NewsMediaCard from "../../Components/NewsMediaCard/NewsMediaCard";
import styles from "./new_media.module.css"



const new_media = (result: any) => {
  const data = result.result
  return (
    <Fragment>
      <Navbar />
      <InnerBanner title={"新聞與媒體"} />
      <div className={styles.wrap}>
      {data.map((item: any, key: any) => (
          <NewsMediaCard key={key} item={item}></NewsMediaCard>
        ))}
      </div>
    </Fragment>
  );
};

export async function getServerSideProps({ locale }: any) {

  const res = await fetch('https://tcs2022.github.io/api/new_media')
  const result = await res.json()
  console.log(result)
  // return props
  return {
    props: { result : result.data, ...(await serverSideTranslations(locale, ["common", "navbar"]))}, // will be passed to the page component as props
  }
}
export default new_media;
