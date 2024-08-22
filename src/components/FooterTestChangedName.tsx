import { FunctionComponent } from "react";
import styles from "./FooterTestChangedName.module.css";

export type FooterTestChangedNameType = {
  className?: string;
};

const FooterTestChangedName: FunctionComponent<FooterTestChangedNameType> = ({
  className = "",
}) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.frameParent}>
          <div className={styles.companyWrapper}>
            <div className={styles.company}>Company</div>
          </div>
          <a className={styles.learnMore}>Learn More</a>
          <div className={styles.exploreWrapper}>
            <div className={styles.explore}>Explore</div>
          </div>
          <div className={styles.download}>Download</div>
        </div>
        <div className={styles.footerLinksFifthColumn}>
          <div className={styles.footerLinkCareers}>
            <div className={styles.navLink}>Careers</div>
          </div>
          <div className={styles.navLink1}>Advertise</div>
          <div className={styles.navLink2}>Flight Schedules</div>
        </div>
        <div className={styles.footerLinkContact}>
          <div className={styles.navLinkContactUsWrapper}>
            <div className={styles.navLink3}>Contact Us</div>
          </div>
          <div className={styles.footerLinksSixthColumn}>
            <div className={styles.navLink4}>Hoteliers</div>
            <div className={styles.navLink5}>Data Privacy Policy</div>
            <div className={styles.navLink6}>Terms</div>
          </div>
          <div className={styles.navLink7}>Hotel Chains</div>
        </div>
        <div className={styles.footerLinks}>
          <div className={styles.footerLinksFirstColumn}>
            <div className={styles.navLink8}>About Wego</div>
          </div>
          <div className={styles.footerLinksSecondColumn}>
            <div className={styles.navLink9}>Book on Wego</div>
          </div>
          <div className={styles.navLink10}>Airport Directory</div>
          <div className={styles.navLink11}>Wego App (iOS)</div>
        </div>
        <div className={styles.footerLinks1}>
          <div className={styles.navLinkPressWrapper}>
            <div className={styles.navLink12}>Press</div>
          </div>
          <div className={styles.navLinkAffiliatesWrapper}>
            <div className={styles.navLink13}>Affiliates</div>
          </div>
          <div className={styles.navLink14}>Airlines Directory</div>
          <div className={styles.navLink15}>Wego App (Android)</div>
        </div>
      </div>
      <div className={styles.divo9137gsupslb4o6bt8fq}>
        <div className={styles.wegoPteLtdWrapper}>
          <div className={styles.wegoPteLtd}>© 2024 Wego Pte Ltd</div>
        </div>
        <div className={styles.divt9ng2a7v1qmtuym1twp8}>
          <img
            className={styles.linkWegoFacebook}
            loading="lazy"
            alt=""
            src="/link--wego-facebook@2x.png"
          />
          <img
            className={styles.linkWegoTwitter}
            loading="lazy"
            alt=""
            src="/link--wego-twitter@2x.png"
          />
          <img
            className={styles.linkWegoInstagram}
            loading="lazy"
            alt=""
            src="/link--wego-instagram@2x.png"
          />
          <img
            className={styles.linkWegoLinkedin}
            loading="lazy"
            alt=""
            src="/link--wego-linkedin@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default FooterTestChangedName;
