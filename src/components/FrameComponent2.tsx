import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/frame-20@2x.png" />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/frame-19@2x.png"
      />
      <FrameComponent />
      <div className={styles.frameInner}>Welcome to Realstate</div>
      <div className={styles.frameDiv}>
        Your will have everything nearby supermarket, buses , station, the
        carmen neighborhood, etc
      </div>
      <h1 className={styles.frameH1}>Manage Your Property</h1>
    </div>
  );
};

export default FrameComponent2;
