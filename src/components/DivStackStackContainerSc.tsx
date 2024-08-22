import { FunctionComponent } from "react";
import styles from "./DivStackStackContainerSc.module.css";

export type DivStackStackContainerScType = {
  className?: string;
};

const DivStackStackContainerSc: FunctionComponent<
  DivStackStackContainerScType
> = ({ className = "" }) => {
  return (
    <div className={[styles.divstackStackcontainerSc1, className].join(" ")}>
      <div className={styles.heading3margin}>
        <div className={styles.heading3}>
          <div className={styles.getEstimatedPropertyContainer}>
            <p className={styles.getEstimatedProperty}>
              Get estimated property prices with a
            </p>
            <p className={styles.getEstimatedProperty}>realEstimate™</p>
          </div>
        </div>
      </div>
      <div className={styles.ptextTypographyScVzn7fr0}>
        <div className={styles.ptextTypographyScVzn7fr01}>
          <div className={styles.seeHowMuchContainer}>
            <span>
              <p className={styles.getEstimatedProperty}>
                See how much your property's worth
              </p>
              <p className={styles.getEstimatedProperty}>
                whether you own it or want to buy it.
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.link}>
        <div className={styles.checkPropertyValues}>Check property values</div>
      </div>
    </div>
  );
};

export default DivStackStackContainerSc;
