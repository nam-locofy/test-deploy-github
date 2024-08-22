import { FunctionComponent } from "react";
import styles from "./ListingsContent.module.css";

export type ListingsContentType = {
  className?: string;
};

const ListingsContent: FunctionComponent<ListingsContentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.listingsContent, className].join(" ")}>
      <div className={styles.locationTitle}>
        <div className={styles.locationName}>
          <h3 className={styles.staysNearby}>Stays nearby:</h3>
          <h3 className={styles.torontoOntario}>Toronto Ontario</h3>
        </div>
      </div>
      <div className={styles.mapContainerParent}>
        <div className={styles.mapContainer}>
          <img
            className={styles.bentoMenu1Icon}
            alt=""
            src="/bento-menu1.svg"
          />
        </div>
        <div className={styles.mapContainer1}>
          <img className={styles.mapIcon} alt="" src="/map.svg" />
        </div>
      </div>
    </div>
  );
};

export default ListingsContent;
