import { FunctionComponent } from "react";
import styles from "./Toggle.module.css";

export type ToggleType = {
  className?: string;
};

const Toggle: FunctionComponent<ToggleType> = ({ className = "" }) => {
  return (
    <div className={[styles.toggle, className].join(" ")}>
      <button className={styles.left}>
        <div className={styles.yes}>Yes</div>
      </button>
      <button className={styles.right}>
        <div className={styles.no}>No</div>
      </button>
    </div>
  );
};

export default Toggle;
