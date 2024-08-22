import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Component1.module.css";

export type Component1Type = {
  className?: string;
  group1000001457?: string;

  /** Style props */
  componentAlignSelf?: CSSProperties["alignSelf"];
  componentPosition?: CSSProperties["position"];
  bTextDecoration?: CSSProperties["textDecoration"];
  bFontWeight?: CSSProperties["fontWeight"];
  bTextDecoration1?: CSSProperties["textDecoration"];
  bFontWeight1?: CSSProperties["fontWeight"];
  test?: CSSProperties["textDecoration"];
};

const Component1: FunctionComponent<Component1Type> = ({
  className = "",
  componentAlignSelf,
  componentPosition,
  group1000001457,
  bTextDecoration,
  bFontWeight,
  bTextDecoration1,
  bFontWeight1,
  test,
}) => {
  const component1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: componentAlignSelf,
      position: componentPosition,
    };
  }, [componentAlignSelf, componentPosition]);

  const bStyle: CSSProperties = useMemo(() => {
    return {
      textDecoration: bTextDecoration,
      fontWeight: bFontWeight,
    };
  }, [bTextDecoration, bFontWeight]);

  const b1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: bTextDecoration1,
      fontWeight: bFontWeight1,
    };
  }, [bTextDecoration1, bFontWeight1]);

  const syncToBuilder1Style: CSSProperties = useMemo(() => {
    return {
      textDecoration: test,
    };
  }, [test]);

  return (
    <div
      className={[styles.component, className].join(" ")}
      style={componentStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src={group1000001457}
            />
          </div>
          <div className={styles.ellipseParent}>
            <div className={styles.frameItem} />
            <b className={styles.empty}>1</b>
          </div>
        </div>
        <div className={styles.builderSyncParent}>
          <div className={styles.builderSync}>
            <div className={styles.getThePlugin}>
              Get the plugin and connect
            </div>
            <div className={styles.getTheFigma}>
              Get the Figma or Adobe XD plugin from the marketplace
            </div>
          </div>
          <div className={styles.syncStudio}>
            <button className={styles.pluginLogos}>
              <img
                className={styles.logosfigmaIcon}
                alt=""
                src="/logosfigma.svg"
              />
              <div className={styles.figmaPlugin}>Figma Plugin</div>
            </button>
            <button className={styles.xDLogo}>
              <img
                className={styles.simpleIconsadobexd}
                alt=""
                src="/simpleiconsadobexd.svg"
              />
              <div className={styles.adobeXdPlugin}>Adobe XD Plugin</div>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameInner}
              loading="lazy"
              alt=""
              src="/group-1000000881.svg"
            />
          </div>
          <div className={styles.ellipseGroup}>
            <div className={styles.frameItem} />
            <a className={styles.a} style={aStyle}>
              2
            </a>
          </div>
        </div>
        <div className={styles.convertingYourDesignToCodeParent}>
          <div className={styles.convertingYourDesignContainer}>
            <b>C</b>
            <span
              className={styles.onvertingYourDesign}
            >{`onverting your design to code `}</span>
          </div>
          <div
            className={styles.getTheFigma}
          >{`Convert your designs to code with 1 click. You can also quickly review tags, actions, responsiveness & more.`}</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group-1000001456.svg"
            />
          </div>
          <div className={styles.ellipseContainer}>
            <div className={styles.frameItem} />
            <a className={styles.a1} style={a1Style}>
              3
            </a>
          </div>
        </div>
        <div className={styles.convertingYourDesignToCodeParent}>
          <a className={styles.syncToBuilder} style={syncToBuilderStyle}>
            Sync to Builder
          </a>
          <div className={styles.getTheFigma}>
            Sync your designs to our studio and get your frontend code with a
            live prototype.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component1;
