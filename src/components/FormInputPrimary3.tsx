import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormInputPrimary3.module.css";

export type FormInputPrimary3Type = {
  className?: string;
  input?: string;
  form?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
};

const FormInputPrimary3: FunctionComponent<FormInputPrimary3Type> = ({
  className = "",
  propRight,
  propLeft,
  propWidth,
  input,
  propWidth1,
  form,
  propMinWidth,
}) => {
  const formInputPrimaryStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const datePickersStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const formStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={[styles.forminputprimary, className].join(" ")}
      style={formInputPrimaryStyle}
    >
      <div className={styles.forminputprimaryInner} style={frameDiv2Style}>
        <div className={styles.placeholdersParent}>
          <div className={styles.placeholders}>Sunday</div>
          <b className={styles.input}>{input}</b>
          <div className={styles.datePickers} style={datePickersStyle}>
            <div className={styles.form} style={formStyle}>
              {form}
            </div>
            <img
              className={styles.iconcalendarfill}
              alt=""
              src="/iconcalendarfill@2x.png"
            />
          </div>
        </div>
      </div>
      <img className={styles.iconarrowdown} alt="" src="/iconarrowdown.svg" />
      <img className={styles.iconarrowtop} alt="" src="/iconarrowdown.svg" />
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

export default FormInputPrimary3;
