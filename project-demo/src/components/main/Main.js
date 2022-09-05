import style from "./Main.module.css";
import MyPage from "./myPage/MyPage";

const Main = () => {
  return (
    <div className={style.main__wrap}>
      <div className={style.main__content__wrap}>
        <MyPage name="안재한" description="프로필이 없습니다." />
      </div>
    </div>
  );
};

export default Main;
