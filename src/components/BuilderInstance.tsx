import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BuilderInstance.module.css";

export type BuilderInstanceType = {
  className?: string;
  showIcon?: boolean;
  description?: string;
  title?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const BuilderInstance: FunctionComponent<BuilderInstanceType> = ({
  className = "",
  showIcon = false,
  description = "description2",
  title = "Sync to Builder",
  propWidth,
  propHeight,
  propAlignSelf,
}) => {
  const builderInstanceStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propHeight, propAlignSelf]);

  return (
    <section
      className={[styles.builderInstance, className].join(" ")}
      style={builderInstanceStyle}
    >
      {showIcon && <img className={styles.icon} alt="" src="/icon2.svg" />}
      <div className={styles.syncToBuilder}>{title}</div>
      <div className={styles.syncYourDesigns}>{description}</div>
    </section>
  );
};

export default BuilderInstance;
