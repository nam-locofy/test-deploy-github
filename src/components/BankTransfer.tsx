import { FunctionComponent } from "react";
import styles from "./BankTransfer.module.css";

export type BankTransferType = {
  className?: string;
};

const BankTransfer: FunctionComponent<BankTransferType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bankTransfer, className].join(" ")}>
      <div className={styles.bankTransferOption}>
        <img
          className={styles.image46Icon}
          loading="lazy"
          alt=""
          src="/image-46@2x.png"
        />
        <div className={styles.bniCicilan0}>BNI Cicilan 0%</div>
      </div>
      <div className={styles.mandiri}>
        <div className={styles.mandiriSelection}>
          <div className={styles.mandiriSelector} />
        </div>
        <div className={styles.mandiriLabel}>
          <img
            className={styles.image46Icon}
            loading="lazy"
            alt=""
            src="/image-38@2x.png"
          />
          <a className={styles.mandiriCicilan0}>Mandiri Cicilan 0%</a>
        </div>
      </div>
      <div className={styles.bankTransferSelectionParent}>
        <div className={styles.mandiriSelection}>
          <div className={styles.mandiriSelector} />
        </div>
        <div className={styles.bankTransferDetails}>
          <div className={styles.bankTransferImage}>
            <img
              className={styles.image45Icon}
              loading="lazy"
              alt=""
              src="/image-45@2x.png"
            />
          </div>
          <a className={styles.mandiriCicilan0}>Bank Transfer</a>
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
