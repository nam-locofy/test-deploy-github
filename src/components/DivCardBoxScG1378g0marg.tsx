import { FunctionComponent } from "react";
import DivStackStackContainerSc from "./DivStackStackContainerSc";
import styles from "./DivCardBoxScG1378g0marg.module.css";

export type DivCardBoxScG1378g0margType = {
  className?: string;
};

const DivCardBoxScG1378g0marg: FunctionComponent<
  DivCardBoxScG1378g0margType
> = ({ className = "" }) => {
  return (
    <div className={[styles.divcardBoxScG1378g0marg, className].join(" ")}>
      <section className={styles.divcardBoxScG1378g0}>
        <div className={styles.article}>
          <DivStackStackContainerSc />
          <div className={styles.link}>
            <img
              className={styles.linkChild}
              loading="lazy"
              alt=""
              src="/group-1@2x.png"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DivCardBoxScG1378g0marg;
