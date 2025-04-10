import styles from './Preview.module.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
import { Link } from 'react-router-dom';

const Preview = () => {
  return (
    <>
      <section className={styles.preview}>
        <div className={styles.preview__content}>
          <h1 className={styles.preview__content_title}>
            Изучай английский по карточкам
          </h1>
          <p className={styles.preview__content_text}>
            Освойте любой изучаемый материал с помощью интерактивных карточек
          </p>
          <div className={styles.preview__groupBtn}>
            <Link to="/library">
              <OrangeBtn
                className={styles.preview__groupBtn_btn}
                text={'Перейти к библиотеке'}
                ariaLabel={'Перейти к библиотеке'}
              />
            </Link>
            <Link to="/myDictionary">
              <WhiteBtn
                className={styles.preview__groupBtn_btn}
                text={'Открыть мой словарь'}
                ariaLabel={'Открыть мой словарь'}
              />
            </Link>
          </div>
        </div>
        <div className={styles.preview__picture}>
          <img
            src="/assets/images/main-content.png"
            alt="Изображение ученика"
          ></img>
        </div>
      </section>
    </>
  );
};

export default Preview;
