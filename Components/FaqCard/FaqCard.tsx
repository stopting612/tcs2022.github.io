import styles from "./FaqCard.module.css";
import FaqQuestion from "./FaqQuestion";

interface FaqCard {
  name: string;
  title: string;
  faq?: [];
}

const FaqCard = ({ item }: { item: FaqCard }) => {
  return (
    <div id={item.name} className={styles.faqContent}>
        <h2 className={styles.faq_subtitle}>{item.title}</h2>
        {item.faq && item.faq.map((item: any, key: any) => (
                <FaqQuestion key={key} item={item}/>
        ))}
    </div>
  );
};

export default FaqCard;
