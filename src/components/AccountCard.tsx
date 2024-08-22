import { FunctionComponent } from "react";
import styles from "./AccountCard.module.css";

const AccountCard: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.accountcard, className].join(" ")}>
      <div className={styles.topSection}>
        <div className={styles.content}>
          <div className={styles.accountType}>Savings Account</div>
          <div className={styles.cardNumberContainer}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.cardNumber}>02 54210 8</div>
          </div>
        </div>
        <img
          className={styles.iconbars}
          loading="lazy"
          alt=""
          src="/iconbars.svg"
        />
      </div>
      <b className={styles.balance}>$52,105.30</b>
    </div>
  );
};

export default AccountCard;
