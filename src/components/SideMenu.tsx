import { FunctionComponent } from "react";
import MenuIcons from "./MenuIcons";
import styles from "./SideMenu.module.css";

export type SideMenuType = {
  className?: string;
  activeTab?: string;
};

const SideMenu: FunctionComponent<SideMenuType> = ({
  className = "",
  activeTab = "0",
}) => {
  return (
    <div className={[styles.sidemenu, className].join(" ")}>
      <button className={styles.menuIcons}>
        <div className={styles.menuItems}>
          <img className={styles.iconpersonal} alt="" src="/iconpersonal.svg" />
          <div className={styles.menuItemNames}>Personal Information</div>
        </div>
        <img
          className={styles.menuIconsChild}
          alt=""
          src="/group-1000001433.svg"
        />
      </button>
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <div className={styles.menuIcons2}>
        <div className={styles.iconverifiedParent}>
          <img className={styles.iconpersonal} alt="" src="/iconverified.svg" />
          <input
            className={styles.text}
            placeholder="Personal Verification"
            type="text"
          />
        </div>
        <img
          className={styles.menuIconsChild}
          alt=""
          src="/group-1000001433.svg"
        />
      </div>
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <MenuIcons
        iconbusiness="/iconbusiness.svg"
        text="Business  Information"
      />
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <div className={styles.menuIcons2}>
        <div className={styles.iconbusinessOwnersParent}>
          <img
            className={styles.iconpersonal}
            alt=""
            src="/iconbusinessowners.svg"
          />
          <input
            className={styles.text1}
            placeholder="Business Owners"
            type="text"
          />
        </div>
        <img
          className={styles.menuIconsChild}
          alt=""
          src="/group-1000001433.svg"
        />
      </div>
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <div className={styles.menuIcons2}>
        <div className={styles.iconnamesParent}>
          <img className={styles.iconpersonal} alt="" src="/iconnames.svg" />
          <input
            className={styles.text2}
            placeholder="Business Names"
            type="text"
          />
        </div>
        <img
          className={styles.menuIconsChild}
          alt=""
          src="/group-1000001433.svg"
        />
      </div>
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <MenuIcons
        iconbusiness="/icontansaction.svg"
        text="Formation Documents"
      />
      <img
        className={styles.menuIcons1}
        loading="lazy"
        alt=""
        src="/vector-1379.svg"
      />
      <div className={styles.menuIcons2}>
        <div className={styles.iconeinParent}>
          <img className={styles.iconpersonal} alt="" src="/iconein.svg" />
          <input
            className={styles.text3}
            placeholder="EIN Verification"
            type="text"
          />
        </div>
        <img
          className={styles.menuIconsChild}
          alt=""
          src="/group-1000001433.svg"
        />
      </div>
      <div className={styles.div}>{activeTab}</div>
    </div>
  );
};

export default SideMenu;
