import { FunctionComponent } from "react";
import styles from "./FormInputPrimary1.module.css";

export type FormInputPrimary1Type = {
  className?: string;
};

const FormInputPrimary1: FunctionComponent<FormInputPrimary1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.forminputprimary, className].join(" ")}>
      <div className={styles.textLabel}>Sunday</div>
      <b className={styles.input}>More</b>
      <div className={styles.formParent}>
        <div className={styles.form}>return</div>
        <img
          className={styles.iconcalendarfill}
          alt=""
          src="/iconcalendarfill@2x.png"
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

export default FormInputPrimary1;
