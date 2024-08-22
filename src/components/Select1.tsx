import { FunctionComponent } from "react";
import styles from "./Select1.module.css";

export type Select1Type = {
  className?: string;
  text?: string;
};

const Select1: FunctionComponent<Select1Type> = ({
  className = "",
  text = "Nationality",
}) => {
  return (
    <div className={[styles.select, className].join(" ")}>
      <div className={styles.placeholderParent}>
        <div className={styles.placeholder}>{text}</div>
        <img className={styles.icon} alt="" src="/icon1.svg" />
      </div>
    </div>
  );
};

export default Select1;
