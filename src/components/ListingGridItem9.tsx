import { FunctionComponent } from "react";
import styles from "./ListingGridItem9.module.css";

const ListingGridItem: FunctionComponent = ({ className = "" }) => {
  return (
    <div className={[styles.listingGridItem, className].join(" ")}>
      <img
        className={styles.imageIcon}
        loading="lazy"
        alt=""
        src="/image-41@2x.png"
      />
      <div className={styles.itemDetails}>
        <div className={styles.listingInfo}>
          <div className={styles.listingCont}>
            <div className={styles.listingTitle}>Missisuaga Aistream</div>
            <div className={styles.listingSubtitle}>
              Missisauga, Ontario, Canada
            </div>
          </div>
          <div className={styles.ratingCont}>
            <div className={styles.rating}>4.8</div>
            <img className={styles.starIcon} alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.pricePerNight}>
            <div className={styles.price}>$502</div>
            <div className={styles.night}>/night</div>
          </div>
          <div className={styles.bestTime}>
            <img
              className={styles.trendIcon}
              loading="lazy"
              alt=""
              src="/trend-icon1@2x.png"
            />
            <a className={styles.priceChart}>Price chart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingGridItem;
