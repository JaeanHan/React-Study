import style from "./FooterAddress.module.css";
import FooterAddressItem from "./FooterAddressItem";
import FooterAddressItemLogo from "./FooterAddressItemLogo";

const policy = ["서비스 이용약관", "개인정보 처리방침", "회사 안내"];
const service = ["고객센터", "cs@watchapedia.co.kr, 02-515-9985"];
const advertisement = ["광고 문의", "ad@watcha.com"];
const cooperation = ["제휴 및 대외 협력", "https://watcha.team/contack"];
const info = [
  "주식회사 왓챠",
  "대표 박태훈",
  "서울특별시 서초구 강남대로 343 신덕빌딩 3층",
  "qweqweqe",
];
const registration = ["사업자 등록 번호 211-88-66013"];
const hi = ["© 2022 by WATCHA, Inc. All rights reserved."];

/**
 *
 * footer의 address 부분을 rendering하는 component
 */

/*
  사실 여기 조차 FooterAddressItem의 반복이기 때문에
  데이터들을 2중 객체로 감싸서 위에서 map 돌리고
  여기서도 map 돌려도 되는데
  지금은 너무 귀찮아서 그냥 이렇게 함

  데이터를 이렇게 배열로 만들어 놓으면 map 돌리기 편함
*/
const FooterAddress = () => {
  return (
    <ul className={style.footer__main__address}>
      <FooterAddressItem items={policy} key={1} />
      <FooterAddressItem items={service} key={2} />
      <FooterAddressItem items={advertisement} key={3} />
      <FooterAddressItem items={cooperation} key={4} />
      <FooterAddressItem items={info} key={5} />
      <FooterAddressItem items={registration} key={6} />
      <FooterAddressItemLogo items={hi} key={7} />
    </ul>
  );
};

export default FooterAddress;
