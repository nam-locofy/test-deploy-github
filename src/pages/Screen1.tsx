import { FunctionComponent } from "react";
import Component from "../components/Component";
import styles from "./Screen1.module.css";

const Screen1: FunctionComponent = () => {
  return (
    <div className={styles.screen1}>
      <Component
        componentWidth="141px"
        componentHeight="129px"
        componentAlignSelf="unset"
        header="hello"
        syncToBuilderAlignSelf="unset"
        syncToBuilderWidth="274px"
        syncToBuilderDisplay="inline-block"
      />
      <div className={styles.newContentThereContainer}>
        <p className={styles.newContent}>{`New content `}</p>
        <p className={styles.newContent}>There are 2 lines</p>
      </div>
      <Component
        componentWidth="unset"
        componentHeight="unset"
        componentAlignSelf="stretch"
        header="Sync to Builder"
        syncToBuilderAlignSelf="stretch"
        syncToBuilderWidth="unset"
        syncToBuilderDisplay="unset"
      />
    </div>
  );
};

export default Screen1;
