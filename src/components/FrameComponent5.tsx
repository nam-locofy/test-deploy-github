import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.textWrapper}>
          <h1 className={styles.frameChild}>
            We are a global, boutique real estate brokerage
          </h1>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <div className={styles.theTransferOfRealEstateParent}>
                  <h1 className={styles.theTransferOf}>
                    The transfer of real estate
                  </h1>
                  <div className={styles.loremIpsumDolorSitAmetConWrapper}>
                    <div className={styles.loremIpsumDolor}>
                      Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                      sit pellentesque sollicitudin. Egestas faucibus lacus diam
                      in senectus consectetur. Mattis elit adipiscing quisque
                      tellus scelerisque vehicula ante nunc. Tellus consequat
                      nisl quis nisl justo.
                    </div>
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.bookNowButtonParent}>
                    <button className={styles.bookNowButton}>
                      <div className={styles.readMore}>Read More</div>
                    </button>
                    <button className={styles.bookNowButton1}>
                      <div className={styles.bookNow}>Book Now!</div>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.frameParent2}>
                  <div className={styles.customersParent}>
                    <div className={styles.customers}>Customers</div>
                    <div className={styles.officesWrapper}>
                      <div className={styles.offices}>Offices</div>
                    </div>
                    <div className={styles.students}>Students</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.officeCategoryLabelWrapper}>
                      <div className={styles.officeCategoryLabel}>12+</div>
                    </div>
                    <div className={styles.div}>14+</div>
                    <div className={styles.div1}>10+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerShapeLeftParent}>
            <img
              className={styles.footerShapeLeft}
              loading="lazy"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <div className={styles.footerShapeRight} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
