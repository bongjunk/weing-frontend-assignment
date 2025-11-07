"use client";

import cn from "classnames/bind";
import styles from "./EcoProducts.module.scss";
import ProductCard from "@/components/common/ProductsCard";
import { ecoProductsData } from "@/app/_data/ecoProductsData";

const cx = cn.bind(styles);

const EcoProducts = () => {
  return (
    <section className={cx("BestWrapper")}>
      <h2 className={cx("BestProductsTitle")}>환경을 보호하는 친환경 상품</h2>

      <div className={cx("ProductGrid")}>
        {ecoProductsData.map((item) => (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default EcoProducts;
