import styles from './StudyCounter.module.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const StudyCounter = (props) => {
  const { know, noKnow, total, onRestart, className, isMyDictionary } = props;
  return (
    <>
      <div className={clsx(styles.studyCounter, className)}>
        <h1 className={styles.studyCounter__title}>Ваши успехи</h1>
        <div className={styles.studyCounter__box}>
          <p className={styles.studyCounter__box_know}>Знаю: {know}</p>
          <p className={styles.studyCounter__box_know}>Не знаю: {noKnow}</p>
          <p className={styles.studyCounter__box_know}>
            Осталось изучить: {Number(total - (know + noKnow))}
          </p>
        </div>

        <div className={styles.studyCounter__footer}>
          <WhiteBtn
            text={'Начать заново'}
            className={styles.studyCounter__footer_btn}
            onClick={onRestart}
          />

          <Link to={isMyDictionary ? '/myDictionary' : '/library'}>
            <OrangeBtn
              text={
                isMyDictionary ? 'Вернуться к словарю' : 'Вернуть к модулям'
              }
              className={styles.studyCounter__footer_btn}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default StudyCounter;
