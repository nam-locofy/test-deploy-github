import { FunctionComponent } from "react";
import styles from "./FormInputPrimary4.module.css";

export type FormInputPrimary4Type = {
  className?: string;
};

const FormInputPrimary4: FunctionComponent<FormInputPrimary4Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.forminputprimary, className].join(" ")}>
      <a className={styles.input}>3 Persons</a>
      <div className={styles.seatForm}>
        <div className={styles.form}>class</div>
        <img
          className={styles.iconclassseat}
          loading="lazy"
          alt=""
          src="/iconclassseat@2x.png"
        />
      </div>
      <div className={styles.textLabelParent}>
        <a className={styles.textLabel}>Business</a>
        <div className={styles.iconarrowdownWrapper}>
          <img
            className={styles.iconarrowdown}
            alt=""
            src="/iconarrowdown.svg"
          />
        </div>
      </div>
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

export default FormInputPrimary4;
