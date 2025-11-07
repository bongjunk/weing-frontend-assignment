"use client";

import styles from "./EcoBannerTaps.module.scss";
import cn from "classnames/bind";
import { ecoBannerData } from "@/app/_data/ecoBannerData";

const cx = cn.bind(styles);

interface EcoBannerTabsProps {
  active: number;
  setActive: (id: number) => void;
}

const EcoBannerTabs = ({ active, setActive }: EcoBannerTabsProps) => {
  return (
    <div className={cx("TabsWrap")}>
      {ecoBannerData.map((item) => (
        <button
          key={item.id}
          className={cx("Tab", { active: active === item.id })}
          onClick={() => setActive(item.id)}
        >
          {item.tab}
        </button>
      ))}
    </div>
  );
};

export default EcoBannerTabs;
