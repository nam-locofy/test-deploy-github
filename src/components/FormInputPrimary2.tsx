import { FunctionComponent } from "react";
import styles from "./FormInputPrimary2.module.css";

export type FormInputPrimary2Type = {
  className?: string;
};

const FormInputPrimary2: FunctionComponent<FormInputPrimary2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.forminputprimary, className].join(" ")}>
      <div className={styles.textLabel}>Shuvas chandra bosu airport</div>
      <a className={styles.input}>Dilhi, India</a>
      <div className={styles.formParent}>
        <div className={styles.form}>T0</div>
        <img
          className={styles.iconlocationplaceholder}
          loading="lazy"
          alt=""
          src="/iconlocationplaceholder@2x.png"
        />
      </div>
      <img className={styles.iconarrowdown} alt="" src="/iconarrowdown.svg" />
      <img className={styles.iconarrowup} alt="" src="/iconarrowdown.svg" />
      <div className={styles.iconoptions3dots}>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangle} />
          <div className={styles.rectangleCopy6} />
          <div className={styles.rectangleCopy7} />
        </div>
      </div>
    </div>
  );
};

export default FormInputPrimary2;
