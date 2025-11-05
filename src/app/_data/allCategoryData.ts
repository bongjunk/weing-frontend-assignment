import { CategoryItem } from "@/app/_types/categoty";

export const allCategoryData: CategoryItem[] = [
  {
    title: "제트상품",
    subtitle: "~11시 이전",
    type: "zet",
  },
  {
    title: "현수막",
    children: [
      "수성현수막",
      "솔벤현수막",
      "그레이PVC현수막",
      "페트지",
      "즉자현수막",
      "카로등현수막",
      "Re-pet현수막",
    ],
  },
  {
    title: "실사출력",
    children: ["PVC켈지", "그레이PVC켈지"],
  },
  {
    title: "배너",
    children: ["X배너", "철제배너", "윈드배너", "Re-pet배너"],
  },
  {
    title: "명함",
    children: ["일반지명함", "고급지명함", "특수지명함", "PET명함", "쿠폰명함"],
  },
  {
    title: "스티커",
    children: ["도무송스티커", "사각형스티커", "원형스티커"],
  },
  {
    title: "인쇄/판촉",
    children: ["전단", "카탈로그", "각티슈", "물티슈", "독일행주", "리유저블컵"],
  },
  {
    title: "간판",
    children: ["채널간판", "플렉스간판", "갈바간판", "성형간판", "돌출간판"],
  },
  {
    title: "친환경",
    type: "eco",
    children: ["Re-pet 현수막", "Re-pet X배너", "재생용지전단", "리유저블컵"],
  },
  {
    title: "셀프디자인",
    children: ["준비중"],
  },
  {
    title: "제트몰",
    type: "zet",
    children: ["준비중"],
  },
];
