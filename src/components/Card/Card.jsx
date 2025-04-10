import styles from './Card.module.scss';

import WhiteBtn from '../WhiteBtn/WhiteBtn';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useState, useRef, useEffect } from 'react';

const Card = (props) => {
  const { english, transcription, russian, index, total, onKnow, onNoKnow } =
    props;
  const [isTranslated, setIsTranslated] = useState(false);
  const translateBtnRef = useRef(null);

  function handleClick() {
    setIsTranslated((prev) => !prev);
  }

  useEffect(() => {
    if (translateBtnRef.current) {
      translateBtnRef.current.focus();
    }
  }, [index]);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.block}>
          <h2 className={styles.block__word}>{english}</h2>
          <h3 className={styles.block__transcript}>{transcription}</h3>
          <OrangeBtn
            ref={translateBtnRef}
            text={isTranslated ? 'Скрыть перевод' : 'Показать перевод'}
            onClick={handleClick}
            className={styles.block__btn}
            ariaLabel={'Перевод слова'}
          />
        </div>
        <div className={styles.card__footer}>
          {isTranslated && (
            <h3 className={styles.block__translate}>{russian}</h3>
          )}

          <div className={styles.card__footer_know}>
            <WhiteBtn
              text={'Не знаю'}
              className={styles.card__footer_btn}
              onClick={onNoKnow}
            />
            <WhiteBtn
              text={'Знаю'}
              className={styles.card__footer_btn}
              onClick={onKnow}
            />
          </div>
        </div>

        <span>
          {index}/{total}
        </span>
      </div>
    </>
  );
};

export default Card;
