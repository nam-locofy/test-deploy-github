import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component.module.css";

export type ComponentType = {
  className?: string;
  header?: string;

  /** Style props */
  componentWidth?: CSSProperties["width"];
  componentHeight?: CSSProperties["height"];
  componentAlignSelf?: CSSProperties["alignSelf"];
  syncToBuilderAlignSelf?: CSSProperties["alignSelf"];
  syncToBuilderWidth?: CSSProperties["width"];
  syncToBuilderDisplay?: CSSProperties["display"];
};

const Component: FunctionComponent<ComponentType> = ({
  className = "",
  componentWidth,
  componentHeight,
  componentAlignSelf,
  header,
  syncToBuilderAlignSelf,
  syncToBuilderWidth,
  syncToBuilderDisplay,
}) => {
  const componentStyle: CSSProperties = useMemo(() => {
    return {
      width: componentWidth,
      height: componentHeight,
      alignSelf: componentAlignSelf,
    };
  }, [componentWidth, componentHeight, componentAlignSelf]);

  const syncToBuilderStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: syncToBuilderAlignSelf,
      width: syncToBuilderWidth,
      display: syncToBuilderDisplay,
    };
  }, [syncToBuilderAlignSelf, syncToBuilderWidth, syncToBuilderDisplay]);

  return (
    <div
      className={[styles.component, className].join(" ")}
      style={componentStyle}
    >
      <img
        className={styles.componentChild}
        loading="lazy"
        alt=""
        src="/frame-1000007374.svg"
      />
      <div className={styles.syncToBuilder} style={syncToBuilderStyle}>
        {header}
      </div>
      <div className={styles.syncYourDesigns}>
        Sync your designs to our studio and get your frontend code with a live
        prototype.
      </div>
    </div>
  );
};

export default Component;
