import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent2.module.css";

export type GroupComponentType = {
  className?: string;
  imageShape?: string;
  showImageShapeIcon?: boolean;

  /** Style props */
  emptyLeft?: CSSProperties["left"];
  propBorderRadius?: CSSProperties["borderRadius"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propBackgroundSize?: CSSProperties["backgroundSize"];
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
  emptyLeft,
  propBorderRadius,
  propBackgroundImage,
  propBackgroundSize,
  imageShape,
  showImageShapeIcon,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      left: emptyLeft,
    };
  }, [emptyLeft]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      backgroundImage: propBackgroundImage,
      backgroundSize: propBackgroundSize,
    };
  }, [propBorderRadius, propBackgroundImage, propBackgroundSize]);

  return (
    <div
      className={[styles.rectangleParent, className].join(" ")}
      style={groupDivStyle}
    >
      <div className={styles.frameChild} />
      <div className={styles.rectangleGroup} style={frameDivStyle}>
        {showImageShapeIcon && (
          <img className={styles.frameItem} alt="" src={imageShape} />
        )}
        <div className={styles.frameInner} />
      </div>
      <div className={styles.sobhaHearlandIi}>Sobha Hearland II Villas</div>
      <div className={styles.loremIpsumDolor}>
        Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.
      </div>
      <div className={styles.stars}>
        <img
          className={styles.starinactivebigIcon}
          loading="lazy"
          alt=""
          src="/starinactivebig.svg"
        />
        <img
          className={styles.starinactivebigIcon1}
          loading="lazy"
          alt=""
          src="/starinactivebig-1.svg"
        />
        <img
          className={styles.starinactivebigIcon2}
          loading="lazy"
          alt=""
          src="/starinactivebig-2.svg"
        />
        <img
          className={styles.starinactivebigIcon3}
          loading="lazy"
          alt=""
          src="/starinactivebig-3.svg"
        />
        <img
          className={styles.starinactivebigIcon4}
          alt=""
          src="/starinactivebig-4.svg"
        />
      </div>
      <div className={styles.div}>4.83</div>
    </div>
  );
};

export default GroupComponent;
