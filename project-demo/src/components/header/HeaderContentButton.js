import style from "./HeaderContentButton.module.css";

function HeaderContentButton(props) {
  const localeClickHandler = () => {
    props.onClick(props.content);
  };
  return (
    <li className={style.header__content__item__wrap}>
      <button className={style.stylessButton} onClick={localeClickHandler}>
        {props.content}
      </button>
    </li>
  );
}

export default HeaderContentButton;
