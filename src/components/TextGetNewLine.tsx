import { FunctionComponent } from "react";
import BankTransfer from "./BankTransfer";
import styles from "./TextGetNewLine.module.css";

export type TextGetNewLineType = {
  className?: string;
};

const TextGetNewLine: FunctionComponent<TextGetNewLineType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.textGetNewLine, className].join(" ")}>
      <div className={styles.textGetNewLineChild} />
      <a className={styles.paymentMethod}>Payment Method</a>
      <section className={styles.paymentMethods}>
        <div className={styles.installmentMethods}>
          <div className={styles.bNIMandiri}>
            <div className={styles.bNIMandiriLogos} />
            <div className={styles.bNIMandiriLogos1} />
          </div>
        </div>
        <div className={styles.bankTransferMethod}>
          <BankTransfer />
          <div className={styles.creditCardMethods}>
            <div className={styles.danamonUOBStandard}>
              <div className={styles.danamonUOBStandardLogos}>
                <img
                  className={styles.image40Icon}
                  loading="lazy"
                  alt=""
                  src="/image-40@2x.png"
                />
                <img
                  className={styles.image42Icon}
                  loading="lazy"
                  alt=""
                  src="/image-42@2x.png"
                />
                <img
                  className={styles.image43Icon}
                  loading="lazy"
                  alt=""
                  src="/image-43@2x.png"
                />
              </div>
              <div
                className={styles.creditCardCicilan}
              >{`Credit Card Cicilan 0% (Danamon, UOB & Standard Chartered)`}</div>
            </div>
            <div className={styles.danamonUOBStandardSelecto}>
              <div className={styles.danamonUOBStandardCircle} />
            </div>
          </div>
        </div>
        <div className={styles.creditCardGOPAY}>
          <div className={styles.creditCard}>
            <div className={styles.creditCardSelection}>
              <div className={styles.danamonUOBStandardCircle} />
            </div>
            <div className={styles.creditCardDetails}>
              <img
                className={styles.image44Icon}
                loading="lazy"
                alt=""
                src="/image-44@2x.png"
              />
              <a className={styles.creditCard1}>Credit Card</a>
            </div>
          </div>
          <div className={styles.gOPAYMethodWrapper}>
            <div className={styles.gOPAYMethod}>
              <div className={styles.gOPAYOption}>
                <img
                  className={styles.image44Icon}
                  loading="lazy"
                  alt=""
                  src="/image-411@2x.png"
                />
                <div className={styles.gOPAYDetails}>
                  <div className={styles.goPay}>GO-PAY</div>
                </div>
              </div>
              <div className={styles.gOPAYSelector}>
                <div className={styles.danamonUOBStandardCircle} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.image37Parent}>
          <img
            className={styles.image37Icon}
            loading="lazy"
            alt=""
            src="/image-37@2x.png"
          />
          <div className={styles.krdivoMethod}>
            <img
              className={styles.image44Icon}
              loading="lazy"
              alt=""
              src="/image-39@2x.png"
            />
            <div className={styles.krdivoDetails}>
              <div className={styles.krdivo}>Krdivo</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextGetNewLine;
