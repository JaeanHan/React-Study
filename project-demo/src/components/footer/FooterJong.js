import React from "react";
import styles from "./FooterJong.module.css";

const FooterJong = () => {
  return (
    <div className={styles.footer}>
      <section className={styles.top_footer}>
        <span className={styles.rating_summary}>
          지금까지 <em> ★ 669,628,846개의 평가가 </em> 쌓였어요.
        </span>
      </section>
      <section className={styles.bottom_footer}>
        <div className={styles.footer_content}>
          <div className={styles.left_footer_content}>
            <ul className={styles.footer_content_policy}>
              <li>서비스 이용약관</li>
              <li>개인정보 처리방침</li>
              <li>회사 안내</li>
            </ul>
            <ul className={styles.footer_content_service}>
              <li>고객센터</li>
              <li>cs@watchapedia.co.kr, 02-515-9985</li>
            </ul>
            <ul className={styles.footer_content_advertisement}>
              <li>광고 문의</li>
              <li>ad@watcha.com</li>
            </ul>
            <ul className={styles.footer_content_contact}>
              <li>제휴 및 대외 협력</li>
              <li>https://watcha.team/contack</li>
            </ul>
            <ul className={styles.footer_content_info}>
              <li>주식회사 뫗챠</li>
              <li>대표 문종성</li>
              <li>부산광역시 수영구 호암로 29번길 150 몰래빌딩 150층</li>
            </ul>
            <ul className={styles.footer_content_businessNumber}>
              <li>사업자 등록 번호 211-88-66013</li>
            </ul>
            <ul className={styles.footer_content_rights}>
              <li>WATCHA PEDIA</li>
              <li>ⓒ 2022 by WATCHA, Inc. All rights reserved</li>
            </ul>
          </div>
          <div className={styles.right_footer_content}>
            <div>
              <button className={styles.language_button}>
                <span>한국어</span>
              </button>
            </div>
            <ul className={styles.footer_linked}>
              <li className={styles.footer_linked_list}>
                <a href="https://www.facebook.com/watchaKR/" target="blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className={styles.footer_linked_list}>
                <a href="https://twitter.com/watcha_kr" target="black">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li className={styles.footer_linked_list}>
                <a href="https://watcha.team/" target="blank">
                  <i className="fa-solid fa-b"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterJong;
