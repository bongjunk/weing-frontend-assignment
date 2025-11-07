"use client";

import cn from "classnames/bind";
import styles from "./MainSlide.module.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { mainSlidesData } from "@/app/_data/mainSlideData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const cx = cn.bind(styles);

const MainSlide = () => {
  return (
    <section className={cx("MainVisual")}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop
        autoplay={{ delay: 4000 }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: `swiper-bullet ${styles.Bullet}`,
          bulletActiveClass: styles.BulletActive,
        }}
        className={cx("Swiper")}
      >
        {mainSlidesData.map((item) => (
          <SwiperSlide key={item.id} className={cx("Slide")}>
            <div className={cx("ImageWrap")}>
              <Image
                src={item.image}
                alt={item.alt ?? ""}
                fill
                priority
                sizes="100vw"
                className={cx("Image")}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className={`prev-btn ${styles.NavBtn} ${styles.Prev}`} aria-label="이전" />
      <button className={`next-btn ${styles.NavBtn} ${styles.Next}`} aria-label="다음" />

      <div className={cx("Overlay")}>
        <a href="/" className={cx("CtaBtn")}>
          자세히 보기
        </a>
        <div className={`custom-pagination ${styles.Pagination}`} />
      </div>
    </section>
  );
};

export default MainSlide;
