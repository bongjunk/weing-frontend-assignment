import styles from "./ServiceFeatures.module.scss";
import Image from "next/image";
import cn from "classnames/bind";
import { featuresData } from "@/app/_data/mainServiceFeaturesData";

const cx = cn.bind(styles);

const ServiceFeatures = () => {
  return (
    <section className={cx("FeatureWrapper")}>
      <div className={cx("FeaturesInner")}>
        {featuresData.map((item) => (
          <div key={item.id} className={cx("Card")}>
            <div className={cx("ContentWrapper")}>
              <div className={cx("Thumb")}>
                <Image src={item.image} alt={item.alt ?? ""} width={104} height={104} />
              </div>
              <div className={cx("TextWrap")}>
                <h3 className={cx("Title")}>{item.title}</h3>
                <p className={cx("Desc")}>{item.desc1}</p>
                <p className={cx("Desc")}>{item.desc2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceFeatures;
