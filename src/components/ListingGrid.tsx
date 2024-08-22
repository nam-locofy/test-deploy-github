import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ListingItems from "./ListingItems";
import styles from "./ListingGrid.module.css";

export type ListingGridType = {
  className?: string;
  image?: string;
  trendIcon?: string;
  image1?: string;
  listingTitle?: string;
  listingSubtitle?: string;
  rating?: string;
  price?: string;

  /** Style props */
  priceChartTextDecoration?: CSSProperties["textDecoration"];
};

const ListingGrid: FunctionComponent<ListingGridType> = ({
  className = "",
  image,
  trendIcon,
  priceChartTextDecoration,
  image1,
  listingTitle,
  listingSubtitle,
  rating,
  price,
}) => {
  const priceChartStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: priceChartTextDecoration,
    };
  }, [priceChartTextDecoration]);

  return (
    <div className={[styles.listingGrid, className].join(" ")}>
      <div className={styles.listingItems}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.listingInfo}>
          <div className={styles.hostInfo}>
            <div className={styles.listingTitle}>
              <div className={styles.listingTitle1}>Brightwoods Cabin</div>
              <div className={styles.listingSubtitle}>
                Bridlepath, Ontario, Canada
              </div>
            </div>
            <div className={styles.ratingWrapper}>
              <div className={styles.rating}>
                <div className={styles.ratingValue}>
                  <div className={styles.rating1}>4.9</div>
                </div>
                <img className={styles.starIcon} alt="" src="/star-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bookmark}>
          <div className={styles.bookmarkIcon}>
            <div className={styles.priceInfoWrapper}>
              <div className={styles.priceInfo}>
                <div className={styles.price}>$658</div>
                <div className={styles.nightLabel}>
                  <div className={styles.night}>/night</div>
                </div>
              </div>
            </div>
            <div className={styles.bestTime}>
              <img
                className={styles.trendIcon}
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className={styles.chart}>
                <div className={styles.priceChart} style={priceChartStyle}>
                  Price chart
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        listingSubtitle={listingSubtitle}
        rating={rating}
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="inline-block"
        propMinWidth="129px"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="0px"
        propAlignSelf="stretch"
        propRowGap="20px"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="inline-block"
        propMinWidth="118px"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="inline-block"
        propMinWidth="102px"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="0px"
        propAlignSelf="stretch"
        propRowGap="20px"
        price={price}
      />
      <div className={styles.listingItems1}>
        <img className={styles.imageIcon1} alt="" src="/image-71@2x.png" />
        <div className={styles.superhostTag}>
          <img
            className={styles.superhostIcon}
            alt=""
            src="/superhost-icon.svg"
          />
          <div className={styles.superhost}>Superhost</div>
        </div>
        <img
          className={styles.heartIcon}
          loading="lazy"
          alt=""
          src="/heart-icon@2x.png"
        />
        <div className={styles.itemDetails}>
          <div className={styles.listingInfo1}>
            <div className={styles.listingCont}>
              <div className={styles.listingTitle2}>Lawrence Hills</div>
              <div className={styles.listingSubtitle1}>
                Lawrence, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating2}>5.0</div>
              <img className={styles.starIcon1} alt="" src="/star-icon.svg" />
            </div>
          </div>
          <div className={styles.bottomContainer}>
            <div className={styles.pricePerNight}>
              <div className={styles.price1}>$350</div>
              <div className={styles.night1}>/night</div>
            </div>
            <div className={styles.bestTime1}>
              <img
                className={styles.trendIcon1}
                alt=""
                src="/trend-icon@2x.png"
              />
              <div className={styles.priceChart}>Price chart</div>
            </div>
          </div>
        </div>
      </div>
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="0px"
        propAlignSelf="stretch"
        propRowGap="20px"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="inline-block"
        propMinWidth="79px"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="inline-block"
        propMinWidth="121px"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="unset"
        propMinWidth1="unset"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="inline-block"
        propMinWidth1="127px"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
      <ListingItems
        image={image1}
        listingTitle={listingTitle}
        propDisplay="unset"
        propMinWidth="unset"
        listingSubtitle={listingSubtitle}
        propDisplay1="inline-block"
        propMinWidth1="127px"
        rating={rating}
        propGap="20px"
        propAlignSelf="unset"
        propRowGap="unset"
        price={price}
      />
    </div>
  );
};

export default ListingGrid;
