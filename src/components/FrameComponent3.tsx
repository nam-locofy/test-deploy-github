import { FunctionComponent } from "react";
import GroupComponent1 from "./GroupComponent1";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.textWrapper}>
              <div className={styles.frameChild}>
                Three steps. Three minutes.
              </div>
            </div>
            <h1 className={styles.frameItem}>
              Everything should be this easy.
            </h1>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <GroupComponent1
            answerQuestions="Answer questions"
            vuesaxlinearmessages="/vuesaxlinearmessages.svg"
            text="cccccHello "
          />
          <GroupComponent1
            propLeft="calc(50% - 164.5px)"
            answerQuestions="Nam Changed this"
            vuesaxlinearmessages="/vuesaxlinearsmstracking.svg"
            text="12345"
          />
          <GroupComponent1
            propLeft="calc(50% + 324.5px)"
            answerQuestions="Get registered"
            vuesaxlinearmessages="/vuesaxlinearedit2.svg"
            text="asdasdasdasdas"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
