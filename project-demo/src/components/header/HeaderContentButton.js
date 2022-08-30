import style from "./HeaderContentButton.module.css";

function HeaderContentButton(props) {
  return (
    <li className={style.header__content__item__wrap}>
      <button className={style.stylessButton}>{props.content}</button>
    </li>
  );
}

export default HeaderContentButton;
