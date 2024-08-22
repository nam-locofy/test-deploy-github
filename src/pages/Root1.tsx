import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Root1.module.css";

export type Root1Type = {
  /** Style props */
  rootPosition?: CSSProperties["position"];
};

const Root1: FunctionComponent<Root1Type> = ({ rootPosition }) => {
  const rootStyle: CSSProperties = useMemo(() => {
    return {
      position: rootPosition,
    };
  }, [rootPosition]);

  return (
    <div className={styles.root} style={rootStyle}>
      <div className={styles.avatar}>
        <div className={styles.avatarContainer}>
          <img
            className={styles.avatarImageIcon}
            alt=""
            src="/avatar-image@2x.png"
          />
          <div className={styles.badge}>
            <div className={styles.businessbadge}>
              <img
                className={styles.businessicon}
                loading="lazy"
                alt=""
                src="/businessicon.svg"
              />
            </div>
            <div className={styles.letterbadge}>
              <div className={styles.d}>D</div>
            </div>
          </div>
        </div>
        <div className={styles.userName}>
          <p className={styles.joseph}>Joseph</p>
          <p className={styles.joseph}>Yoh</p>
        </div>
      </div>
    </div>
  );
};

export default Root1;
