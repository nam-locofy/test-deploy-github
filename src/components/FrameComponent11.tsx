import { FunctionComponent } from "react";
import QuickActionCard from "./QuickActionCard";
import styles from "./FrameComponent11.module.css";

export type FrameComponent11Type = {
  className?: string;
};

const FrameComponent11: FunctionComponent<FrameComponent11Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.actionContentParent, className].join(" ")}>
      <div className={styles.actionContent}>
        <div className={styles.title}>Quick Actions</div>
        <button className={styles.button}>
          <div className={styles.text}>Customise</div>
        </button>
      </div>
      <div className={styles.quickActions}>
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-2.svg"
          propFlex="unset"
          propFontFamily="Inter"
          paySpotify="Add"
          bill="Money"
        />
        <div className={styles.quickactioncard}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-3.svg"
          />
          <div className={styles.text1}>Fund Transfer</div>
        </div>
        <div className={styles.quickactioncard}>
          <img
            className={styles.icon}
            loading="lazy"
            alt=""
            src="/icon-4.svg"
          />
          <div className={styles.text1}>View Transactions</div>
        </div>
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-5.svg"
          propFlex="unset"
          propFontFamily="Inter"
          paySpotify="Pay Credit"
          bill="Cards"
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-6.svg"
          propFlex="unset"
          propFontFamily="Inter"
          paySpotify="Activate"
          bill="Cards"
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-7.svg"
          propFlex="unset"
          propFontFamily="'SF Pro Display'"
          paySpotify="Pay Monthly"
          bill="Bills "
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-8.svg"
          propFlex="unset"
          propFontFamily="'SF Pro Display'"
          paySpotify="Send Money"
          bill="Overseas"
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-9.svg"
          propFlex="unset"
          propFontFamily="'SF Pro Display'"
          paySpotify="Mobile"
          bill="Top Up"
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-10.svg"
          propFlex="unset"
          propFontFamily="'SF Pro Display'"
          paySpotify="Pay Netflix"
          bill=" Bill"
        />
        <QuickActionCard
          propAlignSelf="unset"
          icon="/icon-11.svg"
          propFlex="unset"
          propFontFamily="'SF Pro Display'"
          paySpotify="Pay Prime"
          bill=" Bill"
        />
        <QuickActionCard
          icon="/icon-12.svg"
          paySpotify="Pay Spotify"
          bill=" Bill"
        />
      </div>
    </section>
  );
};

export default FrameComponent11;
