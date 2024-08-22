import { FunctionComponent } from "react";
import ListingItem from "./ListingItem";
import styles from "./Root.module.css";

export type RootType = {
  className?: string;
};

const Root: FunctionComponent<RootType> = ({ className = "" }) => {
  return (
    <div className={[styles.root, className].join(" ")}>
      <div className={styles.listingItemWrapper}>
        <div className={styles.listingItem}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <div className={styles.superhostTag}>
            <img
              className={styles.superhostIcon}
              alt=""
              src="/superhost-icon.svg"
            />
            <div className={styles.superhost}>Superhost</div>
          </div>
          <img className={styles.heartIcon} alt="" src="/heart-icon1@2x.png" />
          <div className={styles.firstListingInfo}>
            <div className={styles.itemTitleInfo}>
              <div className={styles.itemTitleDetails}>
                <div className={styles.listingTitleParent}>
                  <div className={styles.listingTitle}>
                    Brightwoods Estate 111111
                  </div>
                  <div className={styles.listingSubtitle}>
                    Brightwoods Estate
                  </div>
                </div>
                <div className={styles.firstRating}>
                  <div className={styles.rating}>5.0</div>
                </div>
                <div className={styles.firstStarIcon}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star-icon1.svg"
                  />
                </div>
              </div>
              <div className={styles.itemPriceBlock}>
                <div className={styles.price}>$385</div>
                <div className={styles.nightWrapper}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bestTime}>
            <img
              className={styles.trendIcon}
              alt=""
              src="/trend-icon3@2x.png"
            />
            <div className={styles.priceChart}>Price chart</div>
          </div>
        </div>
      </div>
      <div className={styles.listingContainer}>
        <div className={styles.listingItem}>
          <img
            className={styles.imageIcon}
            loading="lazy"
            alt=""
            src="/image1@2x.png"
          />
          <div className={styles.superhostTag}>
            <img
              className={styles.superhostIcon}
              alt=""
              src="/superhost-icon.svg"
            />
            <div className={styles.superhost}>Superhost</div>
          </div>
          <img className={styles.heartIcon} alt="" src="/heart-icon1@2x.png" />
          <div className={styles.firstListingInfo}>
            <div className={styles.itemTitleInfo}>
              <div className={styles.itemTitleDetails}>
                <div className={styles.listingTitleGroup}>
                  <div className={styles.listingTitle}>Brightwoods Estate</div>
                  <div className={styles.listingSubtitle1}>
                    Brightwoods EstateBrightwoods
                  </div>
                </div>
                <div className={styles.itemPriceRow}>
                  <div className={styles.frameGroup}>
                    <div className={styles.ratingWrapper}>
                      <div className={styles.rating}>5.0</div>
                    </div>
                    <img
                      className={styles.starIcon1}
                      loading="lazy"
                      alt=""
                      src="/star-icon1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.itemPriceBlock}>
                <div className={styles.price}>$385</div>
                <div className={styles.nightWrapper}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bestTime}>
            <img
              className={styles.trendIcon}
              alt=""
              src="/trend-icon3@2x.png"
            />
            <div className={styles.priceChart}>Price chart</div>
          </div>
        </div>
      </div>
      <div className={styles.listingContainer1}>
        <ListingItem
          propPosition="relative"
          propTop="unset"
          propLeft="unset"
          propWidth="unset"
          propAlignSelf="stretch"
          image="/image1@2x.png"
          propWidth1="151px"
          propWidth2="151px"
          listingTitle="Brightwoods Estate"
          propDisplay="unset"
          propMinWidth="unset"
        />
      </div>
      <ListingItem image="/image1@2x.png" listingTitle="ABC" />
    </div>
  );
};

export default Root;
