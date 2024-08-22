import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./QuickActionCard.module.css";

export type QuickActionCardType = {
  className?: string;
  icon?: string;
  paySpotify?: string;
  bill?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propFlex?: CSSProperties["flex"];
  propFontFamily?: CSSProperties["fontFamily"];
};

const QuickActionCard: FunctionComponent<QuickActionCardType> = ({
  className = "",
  propAlignSelf,
  icon,
  propFlex,
  propFontFamily,
  paySpotify,
  bill,
}) => {
  const quickActionCardStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      fontFamily: propFontFamily,
    };
  }, [propFlex, propFontFamily]);

  return (
    <div
      className={[styles.quickactioncard, className].join(" ")}
      style={quickActionCardStyle}
    >
      <img className={styles.icon} alt="" src={icon} />
      <div className={styles.text} style={textStyle}>
        <p className={styles.paySpotify}>{paySpotify}</p>
        <p className={styles.paySpotify}>{bill}</p>
      </div>
    </div>
  );
};

export default QuickActionCard;
