import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent91.module.css";

export type FrameComponent9Type = {
  className?: string;
  support?: string;

  /** Style props */
  airCoverTextDecoration?: CSSProperties["textDecoration"];
  careersTextDecoration?: CSSProperties["textDecoration"];
  investresTextDecoration?: CSSProperties["textDecoration"];
  giftCardsTextDecoration?: CSSProperties["textDecoration"];
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
  airCoverTextDecoration,
  careersTextDecoration,
  investresTextDecoration,
  giftCardsTextDecoration,
  support,
}) => {
  const airCoverStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: airCoverTextDecoration,
    };
  }, [airCoverTextDecoration]);

  const careersStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: careersTextDecoration,
    };
  }, [careersTextDecoration]);

  const investresStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: investresTextDecoration,
    };
  }, [investresTextDecoration]);

  const giftCardsStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: giftCardsTextDecoration,
    };
  }, [giftCardsTextDecoration]);

  return (
    <div className={[styles.footerContentParent, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksContainer}>
            <div className={styles.supportLinks}>
              <h3 className={styles.support}>{support}</h3>
              <div className={styles.helpCentre}>Help Centre</div>
              <a className={styles.aircover} style={airCoverStyle}>
                AirCover
              </a>
              <div className={styles.combatingDiscrimination}>
                Combating discrimination
              </div>
              <div className={styles.combatingDiscrimination}>
                Supporting people with disabilities
              </div>
              <div className={styles.combatingDiscrimination}>
                Cencellation options
              </div>
              <div className={styles.combatingDiscrimination}>
                Report neighbourhood concern
              </div>
            </div>
            <div className={styles.supportLinks}>
              <h3 className={styles.hosting}>Hosting</h3>
              <div className={styles.localHome}>Local home</div>
              <div className={styles.coverForHosts}>Cover for hosts</div>
              <div className={styles.combatingDiscrimination}>
                Hosting resources
              </div>
              <div className={styles.communityForum}>Community forum</div>
              <div className={styles.combatingDiscrimination}>
                Hosting responsibly
              </div>
            </div>
            <div className={styles.supportLinks}>
              <h3 className={styles.localhost}>Localhost</h3>
              <div className={styles.newsroom}>Newsroom</div>
              <div className={styles.newFeatures}>New Features</div>
              <a className={styles.careers} style={careersStyle}>
                Careers
              </a>
              <a className={styles.investres} style={investresStyle}>
                Investres
              </a>
              <a className={styles.giftCards} style={giftCardsStyle}>
                Gift cards
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.copyrightContentWrapper}>
        <div className={styles.copyrightContent}>
          <div className={styles.localhostIncAllRightsResParent}>
            <div className={styles.localhostIncAll}>
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className={styles.legalLinks}>
              <div className={styles.privacyPolicy}>Privacy Policy</div>
              <div
                className={styles.termsConditions}
              >{`Terms & Conditions`}</div>
              <div className={styles.contactUs}>Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrameComponent9;
