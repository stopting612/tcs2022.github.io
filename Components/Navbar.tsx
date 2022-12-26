import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.module.css";
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router";
import axios from 'axios'
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./locale-switcher";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticProps, InferGetStaticPropsType } from "next";



export interface pathData {
  id: number;
  path: string;
  title: string;
}

const Navbar = (props: any) => {
  const {data: session, status} = useSession();
  const [navbarData, setNavbarData] = useState([])
  const {t} = useTranslation('navbar')
  const router = useRouter()

  


  /*useEffect(() => {
    // console.log(data.venueID)
    axios
      .get('http://localhost:3000/api/link'
      )
      .then((res) => {
        setNavbarData(res.data.data)
      })
      .catch((e) => {
        console.error(e)

      })

  }, [])*/


  const [state, setState] = useState(false);
 function openMenu() {
    setState(!state);
  }

  return (
    <header className={style.header}>
      <div className={style.wrap}>
        <div className={style.logo}>
          <Link href="/">
            <a>
              <Image
                src="/logo.png"
                alt=""
                width={140}
                height={140}
                className={style.logo}
              ></Image>
            </a>
          </Link>
        </div>
        <nav className={state ? style.mainMenu : style.mainMenu_active}>
          <div className={style.topMenu}>
            <div className={style.fontSizeBtn}>
              <Link href="/howToChangeTextSize">
                <a>
                  <Image
                    src="/icon_font_size.c700924c.png"
                    alt=""
                    width={26}
                    height={23}
                  ></Image>
                </a>
              </Link>
            </div>
            <div className={style.language_btn_wrap}>
            <LocaleSwitcher />
              
            </div>
          </div>
          <div className={style.menu} >
            
          <Link href="/about_tcs" locale={props.locale}>
                  <a>{t("about-tcs")}</a>
          </Link>
          <Link href="/online-survey" locale={props.locale}>
                  <a>{t("online-survey")}</a>
          </Link>
          <Link href="/new_media" locale={props.locale}>
                  <a>{t("new-media")}</a>
          </Link>
          <Link href="/faq" locale={props.locale}>
                  <a>{t("faq")}</a>
          </Link>
          <Link href="/contact-us" locale={props.locale}>
                  <a>{t("contact-us")}</a>
          </Link>
          {session? <div className={style.buttonComponent}>
                <button onClick={() => signOut()} className={style.btn}>登出</button>
        </div> : ""}
          </div>
        </nav>
        <button className={style.nav_btn} onClick={openMenu}>
          {state ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["navbar"])),
    },
  };
}


export default Navbar;