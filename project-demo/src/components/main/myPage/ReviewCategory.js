import style from "./MyPage.module.css";

const ReviewCategory = (props) => {
  return (
    <li className={style.review__item}>
      <a className={style.review__item__detail__wrap}>
        <ul className={style.review__item__detail}>
          <li className={style.review__item__detail__section}>영화</li>
          <li
            className={`${style.review__item__detail__section} ${style.rate}`}
          >
            ★0
          </li>
          <li
            className={`${style.review__item__detail__section} ${style.bucket}`}
          >
            보고싶어요<strong>0</strong>
          </li>
        </ul>
      </a>
    </li>
  );
};

export default ReviewCategory;
