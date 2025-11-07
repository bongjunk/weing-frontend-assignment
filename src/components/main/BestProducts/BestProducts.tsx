"use client";

import cn from "classnames/bind";
import styles from "./BestProducts.module.scss";
import { bestProductsData } from "@/app/_data/mainBestProductsData";
import ProductsCard from "@/components/common/ProductsCard";

const cx = cn.bind(styles);

const BestProducts = () => {
  return (
    <section className={cx("BestWrapper")}>
      <h2 className={cx("BestProductsTitle")}>가장 많이 구매하시는 상품이에요!</h2>
      <div className={cx("ProductGrid")}>
        {bestProductsData.map((item) => (
          <ProductsCard key={item.id} image={item.image} title={item.title} />
        ))}
      </div>
    </section>
  );
};

export default BestProducts;
