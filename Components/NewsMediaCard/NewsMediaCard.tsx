import styles from "./NewsMediaCard.module.css";

interface NewsMediaCard {
  content: string;
  title: string;
  date: string;
  link_title?: string;
  link: string;
}

const NewsMediaCard = ({ item }: { item: NewsMediaCard }) => {
        
  return (
    <div >
       <h2 className={styles.sub_title}>{item.title}</h2>
       <div className={styles.content_box}>
        <i className={styles.contentbox}>
                {item.content}
        </i>
        <span className={styles.date}>{item.date}</span>

       </div>
      

        
    </div>
  );
};

export default NewsMediaCard;