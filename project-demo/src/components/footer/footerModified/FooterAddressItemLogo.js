import FooterLogo from "./FooterLogo";
import style from "./FooterAddressItem.module.css";
/**
 *
 * @param {*} list items
 * @returns ul
 */
const FooterAddressItemLogo = (props) => {
  return (
    <li>
      <ul className={style.list__item}>
        <FooterLogo style={{ marginRight: "8px" }} />
        {props.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </li>
  );
};

export default FooterAddressItemLogo;
