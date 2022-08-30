import style from "./FooterWrap.module.css";

/**
 *
 * footer의 모든 요소들의 대한 최상위 component
 */
const FooterWrap = (props) => {
  return <div className={style.footer}>{props.children}</div>;
};

export default FooterWrap;
