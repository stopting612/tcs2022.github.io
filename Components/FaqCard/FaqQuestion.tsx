import styles from "./FaqQuestion.module.css";
import { useState, useEffect } from "react";
import parse from 'html-react-parser'

interface FaqQuestion {
  id: number;
  question: string;
  answer: string;
}

const FaqQuestion = ({ item }: { item: FaqQuestion }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);

  function showQuestion(){
        setShowAnswer(!showAnswer);
  }

  return (
    <div className={showAnswer ? `${styles.faq_open} ${styles.faq_question}` : styles.faq_question} onClick={showQuestion}>
      <span className={showAnswer ? `${styles.faq_close} ${styles.faq_trigger}`: styles.faq_trigger}>{item.question}</span>
      {showAnswer ? <div className={styles.faq_answer}>
        <div className={styles.faq_inner_answer_container}>
        <p>{parse(item.answer)}</p>
        </div>
        </div> : ''}
    </div>
  );
};

export default FaqQuestion;
