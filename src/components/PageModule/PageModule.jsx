import styles from './PageModule.module.scss';
import Carousel from '../Carousel/Carousel';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import WhiteBtn from '../WhiteBtn/WhiteBtn';

const PageModule = () => {
  const { moduleId } = useParams();
  const [moduleData, setModuleData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];

    const module = storedModules.find(
      (mod) => String(mod.id) === String(moduleId)
    );

    if (module) {
      setModuleData(module);
    } else {
      console.log('Модуль не найден!');
    }
  }, [moduleId]);

  if (!moduleData) {
    return <p>Модуль не найден</p>;
  }
  function deleteModule() {
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
    const updatedModules = storedModules.filter(
      (mod) => String(mod.id) !== String(moduleId)
    );

    localStorage.setItem('modules', JSON.stringify(updatedModules));

    console.log(`Модуль ID ${moduleId} удален`);

    navigate('/');
  }
  return (
    <>
      <div className={styles.pageModule}>
        <div className={styles.pageModule__header}>
          <h1 className={styles.pageModule__header_title}>{moduleData.name}</h1>
          <div className={styles.pageModule__header_groupBtn}>
            <Link to={`/formCreateTopic/${moduleId}`}>
              <OrangeBtn
                text={'Редактировать'}
                className={styles.pageModule__header_btn}
              />
            </Link>
            <WhiteBtn
              text={
                <span role="img" aria-label="Закрыть">
                  Удалить модуль ❌
                </span>
              }
              className={styles.pageModule__header_btn}
              onClick={deleteModule}
            />
          </div>
        </div>
        <Carousel
          className={styles.pageModule__cards}
          wordsModule={moduleData?.words || []}
        />
        <p className={styles.pageModule__description}>
          Описание: {moduleData.description}
        </p>
      </div>
    </>
  );
};

export default PageModule;
