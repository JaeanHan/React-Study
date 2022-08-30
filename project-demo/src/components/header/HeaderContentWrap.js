import style from "./HeaderContentWrap.module.css";

function HeaderContentWrap(props) {
  return <ul className={style.header__content}>{props.children}</ul>;
}

export default HeaderContentWrap;
