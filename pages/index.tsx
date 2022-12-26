import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBanner from "../Components/HomeBanner";
import { Fragment } from "react";
import Whatsnew from "../Components/Whatnew/Whatsnew";
import HomeVideo from "../Components/HomeVideo";
import HomeQuickLinkWrap from "../Components/HomeQuickLinkWrap/HomeQuickLinkWrap";
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  const {t} = useTranslation('common')

  return (
    <Fragment>
      <Navbar/>
      <HomeBanner/>
      <Whatsnew />
      <HomeVideo />
      <HomeQuickLinkWrap />
    </Fragment>
  );
};


export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    
    props: {
      ...(await serverSideTranslations(locale, ["common", "navbar"])),
      // Will be passed to the page compone nt as props
    },
  };
}



