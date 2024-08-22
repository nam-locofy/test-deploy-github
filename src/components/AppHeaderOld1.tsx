import { FunctionComponent } from "react";
import styles from "./AppHeaderOld1.module.css";

export type AppHeaderOldType = {
  className?: string;
  logo?: string;
};

const AppHeaderOld: FunctionComponent<AppHeaderOldType> = ({
  className = "",
  logo,
}) => {
  return (
    <header className={[styles.appHeaderOld, className].join(" ")}>
      <div className={styles.headerContent}>
        <img className={styles.logoIcon} loading="lazy" alt="" src={logo} />
        <div className={styles.navLinks}>
          <a className={styles.stays}>Stays</a>
          <a className={styles.becomeAHost}>Become a host</a>
        </div>
        <div className={styles.loginSection}>
          <img
            className={styles.alertsIcon}
            loading="lazy"
            alt=""
            src="/alerts.svg"
          />
          <img
            className={styles.avatarIcon}
            loading="lazy"
            alt=""
            src="/avatar@2x.png"
          />
        </div>
      </div>
    </header>
  );
};

export default AppHeaderOld;
