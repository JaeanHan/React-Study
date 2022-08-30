import style from "./HeaderWrap.module.css";

function HeaderWrap(props) {
  return <div className={style.header__wrap}>{props.children}</div>;
}

export default HeaderWrap;
