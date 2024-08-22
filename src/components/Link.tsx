import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Link.module.css";

export type LinkType = {
  className?: string;
  discoverTheOtherworldlyMa?: string;
  dolphinsAtAtlantisDubai?: string;
  image1?: string;

  /** Style props */
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const Link: FunctionComponent<LinkType> = ({
  className = "",
  propLeft,
  propWidth,
  propWidth1,
  discoverTheOtherworldlyMa,
  dolphinsAtAtlantisDubai,
  image1,
}) => {
  const linkStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const chainImageFiveStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const discoverTheOtherworldlyContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className={[styles.link, className].join(" ")} style={linkStyle}>
      <div className={styles.chainImageFive} style={chainImageFiveStyle}>
        <div
          className={styles.discoverTheOtherworldlyContainer}
          style={discoverTheOtherworldlyContainerStyle}
        >
          <span className={styles.discoverTheOtherworldlyContainer1}>
            <p className={styles.discoverTheOtherworldly}>
              {discoverTheOtherworldlyMa}
            </p>
            <p className={styles.discoverTheOtherworldly}>
              {dolphinsAtAtlantisDubai}
            </p>
          </span>
        </div>
        <div className={styles.chainImageSeven}>
          <img
            className={styles.wegoIconpng}
            alt=""
            src="/wegoiconpng@2x.png"
          />
          <div className={styles.wegoTravelBlog}>Wego Travel Blog</div>
        </div>
      </div>
      <img className={styles.image1Icon} loading="lazy" alt="" src={image1} />
    </div>
  );
};

export default Link;
