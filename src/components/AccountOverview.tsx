import { FunctionComponent, useCallback } from "react";
import AccountCard from "./AccountCard";
import styles from "./AccountOverview.module.css";

export type AccountOverviewType = {
  className?: string;
};

const AccountOverview: FunctionComponent<AccountOverviewType> = ({
  className = "",
}) => {
  const onAccountActionsContainerClick = useCallback(() => {
    // Please sync "Personal Information" to the project
  }, []);

  return (
    <section className={[styles.accountOverview, className].join(" ")}>
      <div className={styles.heresAnOverview}>
        Here’s an overview of your account
      </div>
      <div className={styles.accountDetails}>
        <AccountCard
          accountType="Checking Account"
          cardNumber="03 25481 9"
          balance="$10,540.00"
        />
        <AccountCard
          accountType="Savings Account"
          cardNumber="02 54210 8"
          balance="$52,105.30"
        />
        <div
          className={styles.accountActions}
          onClick={onAccountActionsContainerClick}
        >
          <div className={styles.actionContainer}>
            <img
              className={styles.actionWrapperIcon}
              loading="lazy"
              alt=""
              src="/frame-1000006963.svg"
            />
          </div>
          <div className={styles.businessActions}>
            <div className={styles.businessSetup}>
              <b className={styles.registerABusiness}>
                Register a Business Account
              </b>
              <div className={styles.haveDedicatedFinancial}>
                Have dedicated financial tools for managing a company's
                finances.
              </div>
            </div>
            <button className={styles.setupAction}>
              <div className={styles.setupYourAccount}>Setup your account</div>
              <img
                className={styles.setupActionChild}
                alt=""
                src="/group-1000001422-1.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountOverview;
