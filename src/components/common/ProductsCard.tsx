"use client";

import Image from "next/image";
import cn from "classnames/bind";
import styles from "./ProductsCard.module.scss";

const cx = cn.bind(styles);

type ProductCardProps = {
  image: string;
  title: string;
  subtitle?: string;
  price?: string;
  onClick?: () => void;
};

const ProductCard = ({ image, title, subtitle, price }: ProductCardProps) => {
  return (
    <div className={cx("Card")}>
      <div className={cx("Thumb")}>
        <Image src={image} alt={title} fill sizes="20vw" className={cx("Image")} />
      </div>

      <p className={cx("Title")}>{title}</p>

      {subtitle && <p className={cx("Subtitle")}>{subtitle}</p>}
      {price && <p className={cx("Price")}>{price}</p>}
    </div>
  );
};

export default ProductCard;
