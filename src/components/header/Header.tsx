"use client";

import { useState } from "react";
import cn from "classnames/bind";
import styles from "./Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const cx = cn.bind(styles);

const topMenuItems = [
  { label: "로그인", href: "/login" },
  { label: "회원가입", href: "/signup" },
  { label: "주문/배송", href: "/orders" },
  { label: "고객센터", href: "/support" },
];
const navMenuItems = [
  { label: "현수막", href: "/hs" },
  { label: "배너", href: "/banner" },
  { label: "실사출력", href: "/output" },
  { label: "인쇄/판촉", href: "/print" },
  { label: "간판", href: "/sign" },
  { label: "친환경", href: "/eco", className: "eco" },
];

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isAllCategoryOpen, setIsAllCategoryOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleCategory = () => setIsAllCategoryOpen((prev) => !prev);

  const handleTopMenuClick = (label: string) => {
    console.log(label);
  };

  console.log("pathname", pathname);
  return (
    <header className={cx("HeaderWrapper")}>
      <div className={cx("TopBar")}>
        <div className={cx("TopInner")}>
          <ul className={cx("TopMenu")}>
            {topMenuItems.map((item) => (
              <li key={item.label}>
                <Link href="/" onClick={() => handleTopMenuClick(item.label)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={cx("MidBar")}>
        <div className={cx("MidInner")}>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={110}
              height={30}
              priority
              className={cx("Logo")}
            />
          </Link>
          <Link href="/" className={cx("Cart")}>
            <Image src="../icons/Cart.svg" alt="장바구니" width={20} height={20} priority />
            <span>장바구니</span>
          </Link>

          {/* <button className={cx("menuToggle")} onClick={toggleMenu}>
            <span className={cx("bar")} />
            <span className={cx("bar")} />
            <span className={cx("bar")} />
          </button> */}
        </div>
      </div>
      <nav className={cx("NavBar", { open: isMenuOpen })}>
        <div className={cx("NavInner")}>
          <ul className={cx("NavMenu")}>
            <li className={cx("allCategory")}>
              <button className={cx("categoryBtn")} onClick={toggleCategory}>
                전체 카테고리 <span className={cx("arrow")}>▼</span>
              </button>
            </li>

            {navMenuItems.map((item) => (
              <li
                key={item.label}
                className={cx(item.className, {
                  active: pathname === item.href,
                })}
              >
                <Link href={item.href ?? "#"}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
