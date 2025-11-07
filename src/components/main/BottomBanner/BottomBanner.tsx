"use client";

import Image from "next/image";
import cn from "classnames/bind";
import styles from "./BottomBanner.module.scss";

const cx = cn.bind(styles);

const BottomBanner = () => {
  return (
    <section className={cx("BottomBanner")}>
      <Image
        src="/images/main/MainBottomBanner.png"
        alt="하단 홍보 배너"
        fill
        priority
        sizes="100vw"
        className={cx("Image")}
      />
    </section>
  );
};

export default BottomBanner;
