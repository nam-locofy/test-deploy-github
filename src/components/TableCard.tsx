import { FunctionComponent } from "react";
import styles from "./TableCard.module.css";

const TableCard: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.tablecard, className].join(" ")}>
      <div className={styles.leftSide}>
        <img className={styles.iconprime} alt="" src="/iconprime.svg" />
        <div className={styles.content}>
          <div className={styles.title}>Amazon Prime</div>
          <div className={styles.subTitle}>Yearly bill payment</div>
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.amount}>$24.99</div>
        <div className={styles.date}>Aug 15, 2024</div>
      </div>
    </div>
  );
};

export default TableCard;
