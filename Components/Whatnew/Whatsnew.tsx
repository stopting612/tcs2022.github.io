import React, { Fragment } from "react";
import WhatsnewCard from "./WhatsnewCard";
import styles from "./Whatsnew.module.css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Whatsnew = () => {
  const items = [
    {
      id: 1,
      title: "運輸署九月起進行「二O二二年交通習慣調查」",
      date: "2022年09月05日",
    },
    {
      id: 2,
      title: "2022年交通習慣調查 – 政府電視宣傳短片",
      date: "2022年09月06日",
    },
    {
      id: 3,
      title: "運輸署九月起進行「二O二二年交通習慣調查」",
      date: "2022年09月05日",
    },
    {
      id: 4,
      title: "2022年交通習慣調查 – 政府電視宣傳短片",
      date: "2022年09月06日",
    },
  ];
  return (
    <Fragment>
      <div className={styles.home_whatsnew_wrap}>
        <h2 className={`${styles.whatnew_subtitle}`}>新聞與媒體</h2>
        <div className={styles.swiper_container2}>
            <Swiper
            breakpoints={
              {
                320: { 
                  slidesPerView: 1,
                  spaceBetween: 10
                },
                890: { 
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                1280: { 
                  slidesPerView: 3,
                  spaceBetween: 30
                },
                1780: { 
                  slidesPerView: 4,
                  spaceBetween: 30
                }
              }
            }
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={{
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {items.map((item: any, key: any) => (
                <SwiperSlide key={key}>
                  <WhatsnewCard item={item}/>
                </SwiperSlide>
              ))}
            </Swiper>
        </div>
        <div className={styles.home_btnWrap}>
          <MdChevronLeft size={40} className="swiper-button-prev2" />
          <MdChevronRight size={40} className="swiper-button-next2" />
        </div>
      </div>
    </Fragment>
  );
};

export default Whatsnew;
