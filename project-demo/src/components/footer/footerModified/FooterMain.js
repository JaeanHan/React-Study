import style from "./FooterMain.module.css";

/**
 *
 * @param {*} children
 * footer의 main부분에 대한 wrapper
 * 해당 wrapper는 이미 FooterAddress와 FooterUtil을 props으로 받고 있음
 */
const FooterMain = (props) => {
  return <div className={style.footer__main}>{props.children}</div>;
};

export default FooterMain;
