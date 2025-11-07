"use client";

import Image from "next/image";
import styles from "./EcoOrder.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

const EcoOrder = ({ id }: { id: string }) => {
  return (
    <section className={cx("DetailSection")}>
      <h1 className={cx("DetailTitle")}>친환경 현수막</h1>
      <div className={cx("DetailInner")}>
        <div className={cx("Left")}>
          <div className={cx("MainImageWrap")}>
            <Image
              src="/images/main/MainSeminar.png"
              alt="친환경 현수막"
              fill
              sizes="100vw"
              className={cx("MainImage")}
            />
          </div>

          <div className={cx("ThumbList")}>
            {[1, 2, 3, 4].map((list) => (
              <div key={list} className={cx("ThumbItem")}>
                <Image src="/images/main/MainSeminar.png" alt="" width={146} height={121} />
              </div>
            ))}
          </div>
        </div>

        <div className={cx("Right")}>
          <h1 className={cx("Title")}>친환경 현수막</h1>
          <p className={cx("Desc")}>사인물에서만 만날 수 있는 높은 퀄리티의 친환경 현수막입니다.</p>

          <div className={cx("Options")}>
            <label>제작물 제목</label>
            <input className={cx("Input")} placeholder="제작물 제목을 입력해 주세요" />

            <label>수량 선택</label>
            <select className={cx("Select")}>
              <option>10장</option>
              <option>20장</option>
            </select>

            <label>후가공 선택</label>
            <select className={cx("Select")}>
              <option>없음</option>
              <option>링 작업</option>
            </select>

            <label>추가 물품</label>
            <select className={cx("Select")}>
              <option>없음</option>
              <option>로프 6m 추가</option>
            </select>
          </div>
          <button className={cx("UploadBtn")}>디자인 파일 업로드</button>
          <div className={cx("ConsultBox")}>
            <div>
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
          <div className={cx("PriceBox")}>
            <div className={cx("Row")}>
              <span>상품 금액</span>
              <span>000원</span>
            </div>
            <div className={cx("Row")}>
              <span>추가 옵션 금액</span>
              <span>000원</span>
            </div>
            <div className={cx("Row")}>
              <span>후가공 금액</span>
              <span>000원</span>
            </div>
            <div className={cx("TotalRow")}>
              <span>총 금액</span>
              <div className={cx("TotalPriceWrap")}>
                <span className={cx("TotalPrice")}>00,000원</span>
                <span className={cx("TotalPriceText")}>배송비 별도</span>
              </div>
            </div>
          </div>
          <div className={cx("Buttons")}>
            <button className={cx("CartBtn")}>장바구니</button>
            <button className={cx("OrderBtn")}>주문하기</button>
          </div>
          <div className={cx("NoticeBox")}>
            <div className={cx("NoticeHeader")}>
              <Image src="/icons/Error.svg" alt="주의" width={19} height={19} />
              <span>참고사항</span>
            </div>

            <ul className={cx("NoticeList")}>
              <li>·500장 이상은 대량문의을 통해 주문해 주세요.</li>
              <li>·맞춤 디자인이 필요한 경우 카카오톡 디자인 상담을 통해 문의해 주세요.</li>
              <li>·디자인 파일 없는 경우 주문이 진행되지 않습니다.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={cx("MobileFixedButtons")}>
        <button className={cx("CartBtn")}>장바구니</button>
        <button className={cx("OrderBtn")}>주문하기</button>
      </div>
    </section>
  );
};

export default EcoOrder;
