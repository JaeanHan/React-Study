import style from "./FooterAddressItem.module.css";

/**
 *
 * @param {Array} list__item map 돌려야하니 Array 객체를 받아야함
 */
const FooterAddressItem = (props) => {
  return (
    <li>
      <ul className={style.list__item}>
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default FooterAddressItem;
