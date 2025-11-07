import Image from "next/image";
import styles from "./EcoBanner.module.scss";
import cn from "classnames/bind";
import Link from "next/link";

const cx = cn.bind(styles);

const EcoBanner = ({ data }: any) => {
  console.log("data", data);
  if (!data) return null;

  return (
    <section className={cx("EcoSection")}>
      <div className={cx("EcoInner")}>
        <div className={cx("ImageBox")}>
          <Image src={data.image} alt={data.title} fill sizes="100vw" className={cx("Thumb")} />
        </div>
        <div className={cx("Content")}>
          <p className={cx("Title")}>{data.title}</p>
          <p className={cx("Desc")}>{data.desc}</p>
          <p className={cx("Price")}>{data.price}</p>
          <Link href={`/eco/${data.id}`} className={cx("OrderBtn")}>
            주문하러 가기
          </Link>
          <div className={cx("Divider")} />
          <div className={cx("ConsultBox")}>
            <div className={cx("ConsoltBox")}>
              <div className={cx("ConsultTitle")}>
                <Image
                  src="/icons/Counselor.svg"
                  alt="상담"
                  width={20}
                  height={18}
                  className={cx("ConsultIcon")}
                />
                디자인 작업이 필요하신가요?
              </div>
              <p className={cx("ConsultDesc")}>
                제트디자인 디자이너가 맞춤형 디자인을 제작해 드려요.
                <br /> 상담 후 (상품명)을 제작해 보세요.
              </p>
            </div>
            <button className={cx("ConsultBtn")}>
              <Image src="/icons/Kakao.svg" alt="카카오" width={17} height={16} />
              디자인 상담
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoBanner;
