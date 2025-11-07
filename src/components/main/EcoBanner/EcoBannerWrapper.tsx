"use client";

import { useState } from "react";
import EcoBannerTaps from "./EcoBannerTaps";
import EcoBanner from "./EcoBanner";
import { ecoBannerData } from "@/app/_data/ecoBannerData";

const EcoBannerWrapper = () => {
  const [active, setActive] = useState(1);

  const selected = ecoBannerData.find((v) => v.id === active);

  return (
    <>
      <EcoBannerTaps active={active} setActive={setActive} />
      <EcoBanner data={selected} />
    </>
  );
};

export default EcoBannerWrapper;
