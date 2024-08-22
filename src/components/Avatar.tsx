import { FunctionComponent } from "react";
import styles from "./Avatar.module.css";

const Avatar: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.avatar, className].join(" ")}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatarImageIcon}
          loading="lazy"
          alt=""
          src="/avatar-image-7@2x.png"
        />
        <div className={styles.badge}>
          <div className={styles.businessbadge}>
            <img
              className={styles.businessicon}
              alt=""
              src="/businessicon.svg"
            />
          </div>
          <div className={styles.letterbadge}>
            <div className={styles.d}>S</div>
          </div>
        </div>
      </div>
      <div className={styles.userName}>
        <p className={styles.samuelYip}>Samuel Yip</p>
        <p className={styles.samuelYip}>Khan</p>
      </div>
    </div>
  );
};

export default Avatar;
