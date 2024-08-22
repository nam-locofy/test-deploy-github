import { FunctionComponent } from "react";
import styles from "./ListingGridItem12.module.css";

const ListingGridItem: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.listingGridItem, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-31@2x.png"
      />
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>Unionville Lodge</div>
            <div className={styles.listingSubtitle}>
              Markham, Ontario Canada
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>4.6</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>$485</div>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img className={styles.trendIcon} alt="" src="/trend-icon2.svg" />
            <a className={styles.priceChart}>Price chart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingGridItem;
