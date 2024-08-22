import { FunctionComponent } from "react";
import styles from "./Input.module.css";

export type InputType = {
  className?: string;
  frame39694Placeholder?: string;
};

const Input: FunctionComponent<InputType> = ({
  className = "",
  frame39694Placeholder,
}) => {
  return (
    <div className={[styles.input, className].join(" ")}>
      <input
        className={styles.inputChild}
        placeholder={frame39694Placeholder}
        type="text"
      />
    </div>
  );
};

export default Input;
