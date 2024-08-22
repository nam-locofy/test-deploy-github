import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItem.module.css";

export type ListingItemType = {
  className?: string;
  image?: string;
  listingTitle?: string;

  /** Style props */
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const ListingItem: FunctionComponent<ListingItemType> = ({
  className = "",
  propPosition,
  propTop,
  propLeft,
  propWidth,
  propAlignSelf,
  image,
  propWidth1,
  propWidth2,
  listingTitle,
  propDisplay,
  propMinWidth,
}) => {
  const listingItemStyle: CSSProperties = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propPosition, propTop, propLeft, propWidth, propAlignSelf]);

  const frameDiv8Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const frameDiv9Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const listingTitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.listingItem, className].join(" ")}
      style={listingItemStyle}
    >
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.superhostTag}>
        <img
          className={styles.superhostIcon}
          alt=""
          src="/superhost-icon.svg"
        />
        <div className={styles.superhost}>Superhost</div>
      </div>
      <img className={styles.heartIcon} alt="" src="/heart-icon1@2x.png" />
      <div className={styles.secondListingInfo}>
        <div className={styles.secondContent}>
          <div className={styles.secondDetails}>
            <div className={styles.frameParent}>
              <div className={styles.ratingWrapper}>
                <div className={styles.rating}>5.0</div>
              </div>
              <img
                className={styles.starIcon}
                loading="lazy"
                alt=""
                src="/star-icon1.svg"
              />
            </div>
          </div>
          <div className={styles.frameGroup} style={frameDiv8Style}>
            <div className={styles.listingTitleParent} style={frameDiv9Style}>
              <div className={styles.listingTitle} style={listingTitleStyle}>
                {listingTitle}
              </div>
              <div className={styles.listingSubtitle}>Brightwoods Estate</div>
            </div>
            <div className={styles.priceParent}>
              <div className={styles.price}>$385</div>
              <div className={styles.nightWrapper}>
                <div className={styles.night}>/night</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bestTime}>
        <img className={styles.trendIcon} alt="" src="/trend-icon3@2x.png" />
        <div className={styles.priceChart}>Price chart</div>
      </div>
    </div>
  );
};

export default ListingItem;
