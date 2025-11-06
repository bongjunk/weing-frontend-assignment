"use client";

import cn from "classnames/bind";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FooterItemTypes } from "@/app/_types/menuItem";

const cx = cn.bind(styles);

const footerMenu: FooterItemTypes[] = [
  { label: "회사소개", href: "/" },
  { label: "고객센터", href: "/" },
  { label: "이용약관", href: "/" },
  { label: "개인정보처리방침", href: "/" },
  { label: "공지사항", href: "/" },
  { label: "대량문의", href: "/" },
  { label: "제휴문의", href: "/" },
];

const Footer = () => {
  return (
    <footer className={cx("FooterWrapper")}>
      <div className={cx("FooterInner")}>
        <div className={cx("FooterWeb")}>
          <ul className={cx("MenuList")}>
            {footerMenu.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
            <li className={cx("CallCenter")}>
              고객센터 <span className={cx("Tell")}>032-710-1271</span>
            </li>
            <li className={cx("KaKaoIcon")}>
              <Image src="/icons/Kakao.svg" alt="카카오톡" width={17} height={16} />
            </li>
          </ul>
          <div className={cx("Divider")} />
          <ul className={cx("SiteInfo")}>
            <li>
              주소 : 인천광역시 서구 탁옥로51번길 11, 505호 | 대표자 : 김상헌 | 대표번호 :
              032-710-1271 | 이메일 : brandesign123@naver.com | 사업자등록번호 : 000-00-00000
              <br />
              통신판매신고 : 제2022-인천서구-2491 | 사업자등록번호 : 000-00-00000 | 통신판매신고 :
              제2022-인천서구-2491
              <br />
              copyrightⓒBRANDESIGN. All rights reserved.
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
