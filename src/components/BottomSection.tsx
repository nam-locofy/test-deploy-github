import { FunctionComponent } from "react";
import Avatar from "./Avatar";
import TableCard from "./TableCard";
import BankingCard from "./BankingCard";
import styles from "./BottomSection.module.css";

export type BottomSectionType = {
  className?: string;
};

const BottomSection: FunctionComponent<BottomSectionType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.bottomSection, className].join(" ")}>
      <div className={styles.leftColumn}>
        <div className={styles.quickSendSection}>
          <div className={styles.title}>Quick Send</div>
          <div className={styles.avatarList}>
            <Avatar
              avatarImage="/avatar-image@2x.png"
              propWidth="unset"
              businessBadge
              showLetterBadge={false}
              propHeight="19px"
              propAlignSelf="stretch"
              d="D"
              propWidth1="unset"
              propMinWidth="unset"
              propAlignSelf1="unset"
              samuelYip="Joseph"
              khan="Yoh"
            />
            <Avatar
              avatarImage="/avatar-image-1@2x.png"
              propWidth="19px"
              businessBadge={false}
              showLetterBadge
              propHeight="unset"
              propAlignSelf="stretch"
              d="M"
              propWidth1="unset"
              propMinWidth="12px"
              propAlignSelf1="unset"
              samuelYip="Martha"
              khan="Stewart Johnson"
            />
            <Avatar
              avatarImage="/avatar-image-2@2x.png"
              propWidth="unset"
              businessBadge
              showLetterBadge={false}
              propHeight="19px"
              propAlignSelf="stretch"
              d="D"
              propWidth1="unset"
              propMinWidth="unset"
              propAlignSelf1="unset"
              samuelYip="Andrew"
              khan="Johnson"
            />
            <Avatar
              avatarImage="/avatar-image-3@2x.png"
              propWidth="unset"
              businessBadge
              showLetterBadge={false}
              propHeight="19px"
              propAlignSelf="stretch"
              d="D"
              propWidth1="unset"
              propMinWidth="unset"
              propAlignSelf1="unset"
              samuelYip="Wilson"
              khan="Tucker"
            />
            <Avatar
              avatarImage="/avatar-image-4@2x.png"
              propWidth="19px"
              businessBadge={false}
              showLetterBadge
              propHeight="unset"
              propAlignSelf="stretch"
              d="K"
              propWidth1="unset"
              propMinWidth="10px"
              propAlignSelf1="unset"
              samuelYip="Kevon"
              khan="Richardson"
            />
            <Avatar
              avatarImage="/avatar-image-5@2x.png"
              propWidth="unset"
              businessBadge={false}
              showLetterBadge
              propHeight="unset"
              propAlignSelf="unset"
              d="D"
              propWidth1="unset"
              propMinWidth="9px"
              propAlignSelf1="unset"
              samuelYip="Donald"
              khan="Radhowsky"
            />
            <Avatar
              avatarImage="/avatar-image-6@2x.png"
              propWidth="19px"
              businessBadge={false}
              showLetterBadge
              propHeight="unset"
              propAlignSelf="stretch"
              d="D"
              propWidth1="unset"
              propMinWidth="unset"
              propAlignSelf1="stretch"
              samuelYip="Michelle"
              khan="Hartley"
            />
            <Avatar
              avatarImage="/avatar-image-7@2x.png"
              businessBadge={false}
              showLetterBadge
              d="S"
              samuelYip="Samuel Yip"
              khan="Khan"
            />
          </div>
        </div>
        <div className={styles.quickSendSection}>
          <div className={styles.heading}>
            <div className={styles.activityTitle}>Recent Activity</div>
            <div className={styles.tableCta}>View all transactions</div>
          </div>
          <div className={styles.table}>
            <TableCard
              amount="- $1000.00"
              subtitle="Transfer from Savings to Karla"
              date="Aug 16, 2023, 4:30 PM"
              title="Fund Transfer"
              propMinWidth="290px"
              iconprime="/icontransfer.svg"
              propMinWidth1="257px"
              propWidth="137px"
              propDisplay="unset"
              propMinWidth2="unset"
            />
            <TableCard
              amount="- $36.00"
              subtitle="Monthly bill payment"
              date="Jul 29, 2023, 12:00 AM"
              title="Netflix"
              propMinWidth="289px"
              iconprime="/iconnetflix.svg"
              propMinWidth1="256px"
              propWidth="138px"
              propDisplay="unset"
              propMinWidth2="unset"
            />
            <TableCard
              amount="- $6.99"
              subtitle="Monthly bill payment"
              date="Jul 15, 2023, 12:00 AM"
              title="Spotify"
              propMinWidth="290px"
              iconprime="/iconspotify.svg"
              propMinWidth1="257px"
              propWidth="137px"
              propDisplay="unset"
              propMinWidth2="unset"
            />
            <TableCard
              amount="+ $500.00"
              subtitle="Cash Deposit"
              date="Jul 12, 2023, 12:00 AM"
              title="Deposit"
              propMinWidth="291px"
              iconprime="/iconaddmoney.svg"
              propMinWidth1="257px"
              propWidth="136px"
              propDisplay="unset"
              propMinWidth2="unset"
            />
          </div>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.quickSendSection}>
          <div className={styles.title}>Cards</div>
          <div className={styles.container}>
            <BankingCard
              cardType="Credit card"
              cardNumber="02 54210 8"
              balance="$52,105.30"
            />
            <div className={styles.linkContainer}>
              <div className={styles.linkitem}>Quick Links</div>
              <div className={styles.links}>
                <div className={styles.linkitem}>Credit Card Statement</div>
                <div className={styles.linkitem}>Outstanding Bill</div>
                <div className={styles.linkitem}>Transaction History</div>
                <div className={styles.linkitem}>Daily Limit</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.quickSendSection}>
          <div className={styles.title3}>Upcoming Payments for this card</div>
          <div className={styles.table}>
            <TableCard
              amount="$24.99"
              subtitle="Monthly bill payment"
              date="Jul 31, 2024"
              title="Chat GPT Subscription"
              propMinWidth="331px"
              iconprime="/iconchatgpt.svg"
              propMinWidth1="298px"
              propWidth="73px"
              propDisplay="inline-block"
              propMinWidth2="73px"
            />
            <TableCard
              amount="$70.00"
              subtitle="Yearly bill payment"
              date="Aug 09, 2024"
              title="Adobe Creative Cloud"
              propMinWidth="326px"
              iconprime="/iconadobe.svg"
              propMinWidth1="292px"
              propWidth="82px"
              propDisplay="inline-block"
              propMinWidth2="82px"
            />
            <TableCard
              amount="$24.99"
              subtitle="Yearly bill payment"
              date="Aug 15, 2024"
              title="Amazon Prime"
              iconprime="/iconprime.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomSection;
