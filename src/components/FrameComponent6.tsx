import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent6.module.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.rectangleParent, className].join(" ")}>
      <img className={styles.frameChild} alt="" src="/frame-05@2x.png" />
      <img
        className={styles.frameItem}
        loading="lazy"
        alt=""
        src="/frame-04@2x.png"
      />
      <h1 className={styles.frameInner}>Subscribe Our Newsletter</h1>
      <FrameComponent propTop="331px" propWidth="469px" propLeft="321px" />
      <div className={styles.frameDiv}>
        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
        pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
        consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula
        ante nunc.
      </div>
    </section>
  );
};

export default FrameComponent6;
