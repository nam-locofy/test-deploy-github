import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Link1.module.css";

export type Link1Type = {
  className?: string;
  bali?: string;
  indonesia?: string;
  placeholder?: string;
  image11?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth2?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth3?: CSSProperties["width"];
  propWidth4?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
};

const Link1: FunctionComponent<Link1Type> = ({
  className = "",
  propLeft,
  propWidth,
  bali,
  propWidth1,
  propMinWidth,
  indonesia,
  propWidth2,
  propMinWidth1,
  propWidth3,
  placeholder,
  propWidth4,
  propMinWidth2,
  image11,
}) => {
  const link1Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const baliStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  const indonesiaStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth1,
    };
  }, [propWidth2, propMinWidth1]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  const placeholderStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
      minWidth: propMinWidth2,
    };
  }, [propWidth4, propMinWidth2]);

  return (
    <div className={[styles.link, className].join(" ")} style={link1Style}>
      <div className={styles.linkInner}>
        <div className={styles.frameParent}>
          <div className={styles.baliParent} style={frameDiv3Style}>
            <div className={styles.bali} style={baliStyle}>
              {bali}
            </div>
            <div className={styles.indonesia} style={indonesiaStyle}>
              {indonesia}
            </div>
          </div>
          <div className={styles.roundTripFromParent}>
            <div className={styles.roundTripFrom}>Round-trip from</div>
            <div className={styles.frameGroup} style={frameDiv4Style}>
              <div className={styles.sWrapper}>
                <div className={styles.s}>S$</div>
              </div>
              <div className={styles.placeholder} style={placeholderStyle}>
                {placeholder}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image11Icon} loading="lazy" alt="" src={image11} />
    </div>
  );
};

export default Link1;
