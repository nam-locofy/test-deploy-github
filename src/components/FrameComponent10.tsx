import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.userGreetingParent, className].join(" ")}>
      <div className={styles.userGreeting}>
        <div className={styles.welcomeBack}>Welcome back,</div>
        <b className={styles.chandlerBing}>Chandler Bing</b>
      </div>
      <div className={styles.actions}>
        <button className={styles.paymentRequest}>
          <div className={styles.requestPayment}>Request Payment</div>
        </button>
        <button className={styles.moneyTransfer}>
          <div className={styles.sendMoney}>Send Money</div>
          <img
            className={styles.moneyTransferChild}
            alt=""
            src="/group-1000001422.svg"
          />
        </button>
      </div>
    </div>
  );
};

export default FrameComponent10;
