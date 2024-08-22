import { FunctionComponent } from "react";
import styles from "./FrameComponent7.module.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.infoImageParent}>
        <div className={styles.infoImage} />
        <div className={styles.formShape} />
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/rectangle-12.svg"
        />
      </div>
      <img
        className={styles.buildIcon}
        loading="lazy"
        alt=""
        src="/build.svg"
      />
    </div>
  );
};

export default FrameComponent7;
