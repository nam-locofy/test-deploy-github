import { FunctionComponent } from "react";
import FrameComponent7 from "./FrameComponent7";
import styles from "./Test2222.module.css";

export type Test2222Type = {
  className?: string;
};

const Test2222: FunctionComponent<Test2222Type> = ({ className = "" }) => {
  return (
    <header className={[styles.rectangleParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.instanceWrapper}>
        <FrameComponent7 />
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <img
            className={styles.frameInner}
            loading="lazy"
            alt=""
            src="/frame-23.svg"
          />
        </div>
      </div>
      <button className={styles.contactItem}>
        <div className={styles.contactUs}>Contact us</div>
      </button>
    </header>
  );
};

export default Test2222;
