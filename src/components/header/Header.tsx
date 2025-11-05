"use client";

import { useState } from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { allCategoryData } from "@/app/_data/allCategoryData";
import { MenuItemTypes } from "@/app/_types/menuItem";

const cx = cn.bind(styles);

const topMenuItems: MenuItemTypes[] = [
  { label: "로그인", href: "/login" },
  { label: "회원가입", href: "/signup" },
  { label: "주문/배송", href: "/orders" },
  { label: "고객센터", href: "/support" },
];
const navMenuItems: MenuItemTypes[] = [
  { label: "현수막", href: "/hs" },
  { label: "배너", href: "/banner" },
  { label: "실사출력", href: "/output" },
  { label: "인쇄/판촉", href: "/print" },
  { label: "간판", href: "/sign" },
  { label: "친환경", href: "/eco", className: "eco" },
];

const Header = () => {
  const pathname = usePathname();
  const [isAllCategoryOpen, setIsAllCategoryOpen] = useState<boolean>(false);

  return (
    <header className={cx("HeaderWrapper")}>
      <div className={cx("TopBar")}>
        <div className={cx("TopInner")}>
          <ul className={cx("TopMenu")}>
            {topMenuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx("MidBar")}>
        <div className={cx("MidInner")}>
          <Link href="/" className={cx("Logo")}>
            <Image src="/images/logo.svg" alt="로고" width={110} height={30} priority />
          </Link>
          <Link href="/" className={cx("Cart")}>
            <Image src="/icons/Cart.svg" alt="장바구니" width={17} height={17} priority />
            <span>장바구니</span>
          </Link>
        </div>
      </div>
      <nav className={cx("NavBar")}>
        <div className={cx("NavInner")}>
          <ul className={cx("NavMenu")}>
            <li
              className={cx("allCategory")}
              onMouseEnter={() => setIsAllCategoryOpen(true)}
              onMouseLeave={() => setIsAllCategoryOpen(false)}
            >
              <button type="button" className={cx("CategoryBtn")}>
                <span className={cx("CategoryText")}>전체 카테고리</span>
                <Image
                  src="/icons/ExpandMore.svg"
                  alt="전체 카테고리"
                  width={9}
                  height={6}
                  priority
                />
              </button>

              <div
                className={cx("AllCategoryWrapper", {
                  open: isAllCategoryOpen,
                })}
              >
                <div className={cx("AllCategoryMenu")}>
                  <div className={cx("MenuInner")}>
                    {allCategoryData.map((category) => (
                      <div key={category.title} className={cx("MenuBlock")}>
                        <div className={cx("TitleWrapper", category?.type && category.type)}>
                          <div>
                            <div className={cx("TitleEco")}>
                              <span className={cx("MainTitle")}>{category.title}</span>
                              {category.type === "eco" && (
                                <Image
                                  src="/icons/EcoLeaf.svg"
                                  alt="친환경"
                                  width={17}
                                  height={17}
                                  className={cx("ecoIcon")}
                                />
                              )}
                            </div>
                            {category.subtitle && (
                              <span className={cx("Subtitle")}>{category.subtitle}</span>
                            )}
                          </div>

                          <Image
                            src="/icons/ExpandMoreRight.svg"
                            alt="카테고리 이동"
                            width={6}
                            height={10}
                            className={cx("arrowIcon")}
                          />
                        </div>
                        <ul>
                          {category.children?.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <span className={cx("Divider")} />
            </li>

            {navMenuItems.map((item) => (
              <li
                key={item.label}
                className={cx(item.className, {
                  active: pathname === item.href,
                })}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
