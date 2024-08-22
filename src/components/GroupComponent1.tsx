import { FunctionComponent } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.answerQuestionsParent, className].join(" ")}>
      <h2 className={styles.answerQuestions}>Answer questions</h2>
      <img
        className={styles.vuesaxlinearmessagesIcon}
        loading="lazy"
        alt=""
        src="/vuesaxlinearmessages.svg"
      />
      <div
        className={styles.loremIpsumDolor}
      >{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

export default GroupComponent1;
