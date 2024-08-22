import { FunctionComponent } from "react";
import styles from "./ListingGridItem111.module.css";

const ListingGridItem: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.listingGridItem, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-2@2x.png"
      />
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>Forestville Cottages</div>
            <div className={styles.listingSubtitle}>Simcoe, Ontario Canada</div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>5.0</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>$325</div>
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
