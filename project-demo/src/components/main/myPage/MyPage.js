import style from "./MyPage.module.css";
import movie from "../../../images/item-movie.svg";
import Slider from "react-slick";
import ReviewCategory from "./ReviewCategory";

const AnalyzeItem = () => {
  return (
    <li className={style.analyze__item}>
      <a className={style.analyze__item__anchor}>
        <span className={style.analyze__item__chart}></span>
        <span>취향분석</span>
      </a>
    </li>
  );
};

const MyPage = (props) => {
  return (
    <div className={style.page__wrap}>
      <section className={style.page__header}>
        <button className={style.page__setting__button}></button>
      </section>
      <section className={style.page__main}>
        <div className={style.page__main__profile}>
          <div className={style.page__main__profile__picture__wrap}>
            <div className={style.page__main__profile__picture}></div>
          </div>
          <div className={style.page__main__profile__name__wrap}>
            <h1 className={style.page__main__profile__name}>{props.name}</h1>
          </div>
          <div className={style.page__main__profile__description__wrap}>
            <div>{props.description}</div>
          </div>
        </div>
        <ul className={style.page__main__analyze}>
          <AnalyzeItem />
        </ul>
        <div className={style.page__main__review__wrap}>
          <ul className={style.page__main__review}>
            <ReviewCategory />
            <ReviewCategory />
            <ReviewCategory />
            <ReviewCategory />
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MyPage;
