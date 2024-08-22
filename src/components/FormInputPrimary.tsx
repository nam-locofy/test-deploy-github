import { FunctionComponent } from "react";
import styles from "./FormInputPrimary.module.css";

export type FormInputPrimaryType = {
  className?: string;
};

const FormInputPrimary: FunctionComponent<FormInputPrimaryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.forminputprimary, className].join(" ")}>
      <div className={styles.inputLabels}>Usmani airport, Sylhet</div>
      <b className={styles.input}>Dhaka, Bangladesh</b>
      <div className={styles.optionFields}>
        <div className={styles.form}>FORM</div>
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

export default FormInputPrimary;
