import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent81.module.css";

export type FrameComponent8Type = {
  className?: string;

  /** Style props */
  frameDivBackgroundImage?: CSSProperties["backgroundImage"];
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
  frameDivBackgroundImage,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: frameDivBackgroundImage,
    };
  }, [frameDivBackgroundImage]);

  return (
    <div
      className={[styles.mainContentParent, className].join(" ")}
      style={frameDivStyle}
    >
      <div className={styles.mainContent}>
        <div className={styles.findAHostForEveryJourneyParent}>
          <b className={styles.findAHostContainer}>
            <span>{`Find a `}</span>
            <span className={styles.host}>host</span>
            <span> for every journey</span>
          </b>
          <h3 className={styles.discoverTheBest}>
            Discover the best local rental properties that fits your every
            travel needs
          </h3>
        </div>
        <div className={styles.component1}>
          <div className={styles.searchContainer}>
            <div className={styles.searchInput}>
              <div className={styles.label}>Accommodation</div>
            </div>
            <img className={styles.iconhome} alt="" src="/iconhome.svg" />
          </div>
          <div className={styles.grouped}>
            <div className={styles.dateFilterItem}>
              <div className={styles.searchInput}>
                <div className={styles.label1}>Check-in</div>
              </div>
              <img className={styles.iconhome} alt="" src="/iconcalendar.svg" />
            </div>
            <div className={styles.dateFilterItem1}>
              <div className={styles.searchInput}>
                <div className={styles.label2}>Check-out</div>
              </div>
              <img className={styles.iconhome} alt="" src="/iconcalendar.svg" />
            </div>
            <div className={styles.dateFilterItem2}>
              <div className={styles.searchInput}>
                <div className={styles.label3}>Guest</div>
              </div>
              <img className={styles.iconhome} alt="" src="/iconuser.svg" />
            </div>
          </div>
          <button className={styles.searchFlightsButton}>
            <img className={styles.iconsearch} alt="" src="/iconsearch.svg" />
            <div className={styles.button}>Search</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent8;
