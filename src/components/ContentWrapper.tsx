import { FunctionComponent } from "react";
import Input from "./Input";
import Select1 from "./Select1";
import Toggle from "./Toggle";
import styles from "./ContentWrapper.module.css";

export type ContentWrapperType = {
  className?: string;
};

const ContentWrapper: FunctionComponent<ContentWrapperType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentWrapper, className].join(" ")}>
      <div className={styles.formContainer}>
        <div className={styles.band}>
          <div className={styles.text}>
            We guarantee that these information will stay confidential and
            secured
          </div>
          <a className={styles.learnMore}>Learn more</a>
        </div>
        <h2 className={styles.title}>
          We need to know a little about the person setting up the business
          account.
        </h2>
      </div>
      <div className={styles.userForm}>
        <div className={styles.pleaseEnterYour}>
          Please enter your details below
        </div>
        <div className={styles.cols}>
          <div className={styles.rowone}>
            <Input frame39694Placeholder="First Name" />
            <Input frame39694Placeholder="Last Name" />
          </div>
          <div className={styles.rowone}>
            <Input frame39694Placeholder="Phone Number" />
            <Input frame39694Placeholder="Email Address" />
          </div>
          <div className={styles.rowone}>
            <Select1 text="Nationality" />
            <Input frame39694Placeholder="Social Security Number" />
          </div>
        </div>
        <div className={styles.pleaseEnterYour}>
          Note : You must be at least 18 years old to open your own account.
        </div>
      </div>
      <div className={styles.question}>
        <div className={styles.pleaseEnterYour}>
          Are you an owner of this business?
        </div>
        <Toggle />
      </div>
    </div>
  );
};

export default ContentWrapper;
