"use client";

import { useState } from "react";
import cn from "classnames/bind";
import styles from "./CategorySelector.module.scss";
import { categorySelectorData } from "@/app/_data/mainCategoryData";
import Image from "next/image";

const cx = cn.bind(styles);

const CategorySelector = () => {
  const [active, setActive] = useState<number>(1);

  return (
    <div className={cx("CategoryWrap")}>
      <div className={cx("ScrollArea")}>
        {categorySelectorData.map((category) => (
          <button
            key={category.id}
            className={cx("Item", { active: active === category.id })}
            onClick={() => setActive(category.id)}
          >
            <div className={cx("Circle")}>
              <Image
                src={category.image}
                alt={category.label}
                fill
                sizes="64px"
                className={cx("CategoryIcon")}
              />
            </div>
            <span className={cx("Label")}>{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelector;
