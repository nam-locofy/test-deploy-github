import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Link2.module.css";

export type Link2Type = {
  className?: string;
  kotaKinabalu?: string;
  malaysia?: string;
  prop?: string;
  image11?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth3?: CSSProperties["width"];
  propMinWidth1?: CSSProperties["minWidth"];
  propWidth4?: CSSProperties["width"];
  propWidth5?: CSSProperties["width"];
  propMinWidth2?: CSSProperties["minWidth"];
  malaysiaTextDecoration?: CSSProperties["textDecoration"];
};

const Link2: FunctionComponent<Link2Type> = ({
  className = "",
  propLeft,
  propWidth,
  propWidth1,
  kotaKinabalu,
  propWidth2,
  propMinWidth,
  malaysia,
  propWidth3,
  propMinWidth1,
  propWidth4,
  prop,
  propWidth5,
  propMinWidth2,
  image11,
  malaysiaTextDecoration,
}) => {
  const link2Style: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv5Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const kotaKinabaluStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
      minWidth: propMinWidth,
    };
  }, [propWidth2, propMinWidth]);

  const malaysiaStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
      minWidth: propMinWidth1,
      textDecoration: malaysiaTextDecoration,
    };
  }, [propWidth3, propMinWidth1, malaysiaTextDecoration]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth4,
    };
  }, [propWidth4]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth5,
      minWidth: propMinWidth2,
    };
  }, [propWidth5, propMinWidth2]);

  return (
    <div className={[styles.link, className].join(" ")} style={link2Style}>
      <div className={styles.linkInner} style={frameDiv5Style}>
        <div className={styles.frameParent}>
          <div className={styles.kotaKinabaluParent} style={frameDiv6Style}>
            <div className={styles.kotaKinabalu} style={kotaKinabaluStyle}>
              {kotaKinabalu}
            </div>
            <div className={styles.malaysia} style={malaysiaStyle}>
              {malaysia}
            </div>
          </div>
          <div className={styles.roundTripFromParent}>
            <div className={styles.roundTripFrom}>Round-trip from</div>
            <div className={styles.frameGroup} style={frameDiv7Style}>
              <div className={styles.sWrapper}>
                <div className={styles.s}>S$</div>
              </div>
              <div className={styles.div} style={divStyle}>
                {prop}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.image11Icon} loading="lazy" alt="" src={image11} />
    </div>
  );
};

export default Link2;
