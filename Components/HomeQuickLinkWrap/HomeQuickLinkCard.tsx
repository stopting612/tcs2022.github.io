import Link from "next/link";
import styles from "./HomeQuickLinkCard.module.css";

interface HomeQuickLinkCardProps {
  id: number;
  title: string;
  path: string;
  iconLogo: string;
  bgColor: string;
  textBgColor: string;
}

const HomeQuickLinkCard = ({ item }: { item: HomeQuickLinkCardProps }) => {
  return (
    <div
      className={`${styles.home_surveyLink}`}
      style={{
        backgroundColor: `${item.bgColor}`,
      }}
    >
      <Link href={item.path}>
        <a>
          <div
            className={styles.home_icon_img}
            style={{ backgroundImage: `url(${item.iconLogo})` }}
          ></div>
          <span
            style={{
              backgroundColor: `${item.textBgColor}`,
            }}
          >
            {item.title}
          </span>
        </a>
      </Link>
    </div>
  );
};

export default HomeQuickLinkCard;
