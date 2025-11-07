"use client";

import Image from "next/image";
import cn from "classnames/bind";
import styles from "./MidBanner.module.scss";

const cx = cn.bind(styles);

const MidBanner = () => {
  return (
    <section className={cx("MidBanner")}>
      <Image
        src="/images/main/MainMidBanner.png"
        alt="중앙 배너"
        fill
        priority
        sizes="100vw"
        className={cx("Image")}
      />
    </section>
  );
};

export default MidBanner;
