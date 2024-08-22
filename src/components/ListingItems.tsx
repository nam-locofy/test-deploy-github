import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ListingItems.module.css";

export type ListingItemsType = {
  className?: string;
  image?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Style props */
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propDisplay1?: CSSProperties["display"];
  propMinWidth1?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propRowGap?: CSSProperties["rowGap"];
};

const ListingItems: FunctionComponent<ListingItemsType> = ({
  className = "",
  image,
  listingTitle,
  propDisplay,
  propMinWidth,
  listingSubtitle,
  propDisplay1,
  propMinWidth1,
  rating,
  propGap,
  propAlignSelf,
  propRowGap,
  price,
}) => {
  const listingTitle1Style: CSSProperties = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle: CSSProperties = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const bottomContainerStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
      rowGap: propRowGap,
    };
  }, [propGap, propAlignSelf, propRowGap]);

  return (
    <div className={[styles.listingItems, className].join(" ")}>
      <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle} style={listingTitle1Style}>
              {listingTitle}
            </div>
            <div
              className={styles.listingSubtitle}
              style={listingSubtitleStyle}
            >
              {listingSubtitle}
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>{rating}</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer} style={bottomContainerStyle}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>{price}</div>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img className={styles.trendIcon} alt="" src="/trend-icon@2x.png" />
            <div className={styles.priceChart}>Price chart</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItems;
