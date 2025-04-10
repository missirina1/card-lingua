import styles from './Carousel.module.scss';
import Card from '../Card/Card';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
import StudyCounter from '../StydyCounter/StudyCounter';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

const Carousel = (props) => {
  const { className, wordsModule: propsWordsModule } = props;
  const location = useLocation();

  const isMyDictionary = location.state?.from?.trim() === 'myDictionary';

  const stateWordsModule = location.state?.wordsModule || [];

  const wordsModule = propsWordsModule?.length
    ? propsWordsModule
    : stateWordsModule;

  console.log('wordsModule:', wordsModule);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [know, setKnow] = useState(0);
  const [noKnow, setNoKnow] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setIndex(0);
    setKnow(0);
    setNoKnow(0);
    setIsFinished(false);
  }, [wordsModule]);

  if (!wordsModule.length) {
    return <p>Нет слов для тренировки</p>;
  }

  const handleClickBack = () => {
    if (index > 0) {
      setDirection(-1);
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const handleClickForward = () => {
    if (index < wordsModule.length - 1) {
      setDirection(1);
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  function handleKnow() {
    setKnow((prev) => prev + 1);
    handleClickForward();
  }
  function handleNoKnow() {
    setNoKnow((prev) => prev + 1);
    handleClickForward();
  }

  function restartModule() {
    setIndex(0);
    setKnow(0);
    setNoKnow(0);
    setIsFinished(false);
  }

  if (isFinished) {
    return (
      <StudyCounter
        know={know}
        noKnow={noKnow}
        total={wordsModule.length}
        onRestart={restartModule}
        className={isMyDictionary ? styles.ident : null}
        isMyDictionary={isMyDictionary}
      />
    );
  }

  return (
    <>
      <div className={clsx(styles.slide, className)}>
        <WhiteBtn text={'Назад'} onClick={handleClickBack} />

        <div className={styles.cardWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 50 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
            >
              <Card
                key={wordsModule[index].id}
                id={wordsModule[index].id}
                english={wordsModule[index].english}
                transcription={
                  wordsModule[index].transcription || '[нет транскрипции]'
                }
                russian={wordsModule[index].russian}
                index={index + 1}
                total={wordsModule.length}
                onKnow={handleKnow}
                onNoKnow={handleNoKnow}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <WhiteBtn text={'Вперед'} onClick={handleClickForward} />
      </div>
    </>
  );
};

export default Carousel;
