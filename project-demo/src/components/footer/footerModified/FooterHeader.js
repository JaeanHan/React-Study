import style from "./FooterHeader.module.css";

/**
 *
 * @param {string} hits 조회수를 props로 전달받음.
 *
 * 조회수는 항상 바뀌기 때문에 ajax 날려야함 (유동적)
 */
const FooterHeader = (props) => {
  return (
    <section className={style.footer__header}>
      <span className={style.footer__header__banner}>
        지금까지 <em> ★ {props.hits}개의 평가가 </em> 쌓였어요.
      </span>
    </section>
  );
};

export default FooterHeader;
