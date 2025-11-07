import BestProducts from "@/components/main/BestProducts/BestProducts";
import BottomBanner from "@/components/main/BottomBanner/BottomBanner";
import CategorySelector from "@/components/main/CategorySelector/CategorySelector";
import EcoBannerWrapper from "@/components/main/EcoBanner/EcoBannerWrapper";
import MainSlide from "@/components/main/MainSlide/MainSlide";
import MidBanner from "@/components/main/MidBanner/MidBanner";
import ServiceFeatures from "@/components/main/ServiceFeatures/ServiceFetures";

export default function Home() {
  return (
    <>
      <MainSlide />
      <ServiceFeatures />
      <CategorySelector />
      <EcoBannerWrapper />
      <MidBanner />
      <BestProducts />
      <BottomBanner />
    </>
  );
}
