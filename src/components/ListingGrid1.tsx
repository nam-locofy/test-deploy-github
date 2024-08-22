import { FunctionComponent, useMemo, type CSSProperties } from "react";
import ListingGridItem from "./ListingGridItem";
import styles from "./ListingGrid1.module.css";

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
      <div className={styles.listingGridItem}>
        <img className={styles.imageIcon} loading="lazy" alt="" src={image} />
        <div className={styles.listingRating}>
          <div className={styles.listingInfo}>
            <div className={styles.listingContent}>
              <div className={styles.listingTitle}>Brightwoods Cabin</div>
              <div className={styles.listingSubtitle}>
                Bridlepath, Ontario, Canada
              </div>
            </div>
            <div className={styles.listingRating1}>
              <div className={styles.listingStars}>
                <div className={styles.starContainer}>
                  <div className={styles.rating}>4.9</div>
                </div>
                <img className={styles.starIcon} alt="" src="/star-icon.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heartPriceUnit}>
          <div className={styles.listingHeartContainer}>
            <div className={styles.starWrapper}>
              <div className={styles.listingHeartFooter}>
                <div className={styles.price}>$658</div>
                <div className={styles.listingHeartPriceNight}>
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
              <div className={styles.listingHeartTrendChart}>
                <a className={styles.priceChart} style={priceChartStyle}>
                  Price chart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ListingGridItem
        image={image1}
        listingTitle={listingTitle}
        listingSubtitle={listingSubtitle}
        rating={rating}
        price={price}
        trendIcon="/trend-icon2.svg"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon2.svg"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon2.svg"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon2.svg"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon2.svg"
      />
      <div className={styles.listingGridItem1}>
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
              <div className={styles.listingTitle1}>Lawrence Hills</div>
              <div className={styles.listingSubtitle1}>
                Lawrence, Ontario Canada
              </div>
            </div>
            <div className={styles.ratingCont}>
              <div className={styles.rating1}>5.0</div>
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
                src="/trend-icon2.svg"
              />
              <a className={styles.priceChart}>Price chart</a>
            </div>
          </div>
        </div>
      </div>
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
      <ListingGridItem
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
        trendIcon="/trend-icon1@2x.png"
      />
    </div>
  );
};

export default ListingGrid;
