import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.enterYourEmailWrapper}>
        <div className={styles.enterYourEmail}>Enter your email</div>
      </div>
      <button className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.getAQuote}>Get a Quote</div>
      </button>
    </div>
  );
};

export default FrameComponent;
