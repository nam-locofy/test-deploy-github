import { FunctionComponent } from "react";
import styles from "./ListingsContent1.module.css";

export type ListingsContentType = {
  className?: string;
};

const ListingsContent: FunctionComponent<ListingsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.listingContent, className].join(" ")}>
      <div className={styles.nearbyTitle}>
        <div className={styles.nearbyLocation}>
          <h3 className={styles.staysNearby}>Stays nearby:</h3>
          <h3 className={styles.torontoOntario}>Toronto Ontario</h3>
        </div>
      </div>
      <div className={styles.listingMap}>
        <div className={styles.listingMapContent}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.mapContainer}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
