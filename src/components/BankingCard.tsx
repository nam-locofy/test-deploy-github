import { FunctionComponent } from "react";
import styles from "./BankingCard.module.css";

const BankingCard: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.bankingcard, className].join(" ")}>
      <div className={styles.topSection}>
        <div className={styles.content}>
          <div className={styles.cardType}>Credit card</div>
          <div className={styles.cardNumberContainer}>
            <img className={styles.icon} alt="" src="/icon.svg" />
            <div className={styles.cardNumber}>02 54210 8</div>
          </div>
        </div>
        <img
          className={styles.chipIcon}
          loading="lazy"
          alt=""
          src="/chip@2x.png"
        />
      </div>
      <b className={styles.balance}>$52,105.30</b>
    </div>
  );
};

export default BankingCard;
