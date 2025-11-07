export type MenuItemTypes = {
  label: string;
  href: string;
  className?: string;
};

export type FooterItemTypes = {
  label: string;
  href: string;
};

export type MainSlideDataTypes = {
  id: string;
  image: string;
  href?: string;
  alt?: string;
};

export type FeaturesDataType = {
  id: number;
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  alt?: string;
};

export type CategorySelectorData = {
  id: number;
  label: string;
  image: string;
  alt?: string;
};

export type BestProductsData = {
  id: number;
  title: string;
  image: string;
  alt?: string;
};

export type EcoBannerData = {
  id: number;
  tab: string;
  title: string;
  desc: string;
  price: string;
  image: string;
  alt?: string;
};
