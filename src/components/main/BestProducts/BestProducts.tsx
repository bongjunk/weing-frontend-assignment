"use client";

import Image from "next/image";
import cn from "classnames/bind";
import styles from "./BestProducts.module.scss";
import { bestProductsData } from "@/app/_data/mainBestProductsData";

const cx = cn.bind(styles);

const BestProducts = () => {
  return (
    <section className={cx("BestWrapper")}>
      <h2 className={cx("BestProductsTitle")}>가장 많이 구매하시는 상품이에요!</h2>
      <div className={cx("ProductGrid")}>
        {bestProductsData.map((item) => (
          <div key={item.id} className={cx("Card")}>
            <div className={cx("Thumb")}>
              <Image src={item.image} alt={item.title} sizes="20vw" fill className={cx("Image")} />
            </div>

            <p className={cx("ThumbTitle")}>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
