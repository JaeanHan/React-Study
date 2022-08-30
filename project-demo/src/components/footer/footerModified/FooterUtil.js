import style from "./FooterUtil.module.css";

/**
 *
 * footer내부 main부분의 util 기능들을 rendering하는 component
 * 이거 사실 그냥 복붙한거라 이거 바꾸면서 연습해 보시면 좋을거 같아요
 */
const FooterUtil = () => {
  return (
    <div className={style.right_footer_content}>
      <div>
        <button className={style.language_button}>
          <span>한국어</span>
        </button>
      </div>
      <ul className={style.footer_linked}>
        <li className={style.footer_linked_list}>
          <a href="https://www.facebook.com/watchaKR/" target="blank">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </li>
        <li className={style.footer_linked_list}>
          <a href="https://twitter.com/watcha_kr" target="black">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </li>
        <li className={style.footer_linked_list}>
          <a href="https://watcha.team/" target="blank">
            <i className="fa-solid fa-b"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterUtil;
