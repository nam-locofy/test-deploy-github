import { FunctionComponent } from "react";
import styles from "./MenuIcons.module.css";

export type MenuIconsType = {
  className?: string;
  iconbusiness?: string;
  text?: string;
};

const MenuIcons: FunctionComponent<MenuIconsType> = ({
  className = "",
  iconbusiness,
  text,
}) => {
  return (
    <div className={[styles.menuIcons, className].join(" ")}>
      <div className={styles.iconbusinessParent}>
        <img
          className={styles.iconbusiness}
          loading="lazy"
          alt=""
          src={iconbusiness}
        />
        <div className={styles.text}>{text}</div>
      </div>
      <img
        className={styles.menuIconsChild}
        alt=""
        src="/group-1000001433.svg"
      />
    </div>
  );
};

export default MenuIcons;
