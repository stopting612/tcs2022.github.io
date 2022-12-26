import styles from "./AboutTcsCard.module.css";

interface AboutTcsCard {
  content: string;
  title: string;
  logo: string;
}

const AboutTcsCard = ({ item }: { item: AboutTcsCard }) => {
        
  return (
    <div className={`${styles.aboutTcsContent} ${styles[item.logo]}`}>
        <h2 className={styles.aboutTcsSubtitle}>{item.title}</h2>
        <p>{item.content}</p>
        
    </div>
  );
};

export default AboutTcsCard;
