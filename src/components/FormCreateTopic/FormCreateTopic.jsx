import OrangeBtn from '../OrangeBtn/OrangeBtn';
import WhiteBtn from '../WhiteBtn/WhiteBtn';
import styles from './FormCreateTopic.module.scss';
import NewWordFromTopic from '../NewWordFormTopic/NewWordFromTopic';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FormCreateTopic = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();

  const [nameModule, setNameModule] = useState('');
  const [description, setDescriprion] = useState('');
  const [words, setWords] = useState([{ id: 0 }]);

  useEffect(() => {
    if (moduleId) {
      const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
      const moduleToEdit = storedModules.find(
        (module) => module.id === Number(moduleId)
      );
      if (moduleToEdit) {
        setNameModule(moduleToEdit.name);
        setDescriprion(moduleToEdit.description);
        setWords(Array.isArray(moduleToEdit.words) ? moduleToEdit.words : []);
      }
    }
  }, [moduleId]);

  function addWords() {
    setWords((prevWords) => [
      ...prevWords,
      { id: Date.now(), word: '', translaton: '' },
    ]);
  }

  function updateWord(index, key, value) {
    setWords((prevWords) =>
      prevWords.map((word, i) =>
        i === index ? { ...word, [key]: value } : word
      )
    );
  }

  function deleteWord(id) {
    setWords((prevWords) => prevWords.filter((word) => word.id !== id));
  }

  function handleClick(e) {
    const newModule = {
      id: moduleId ? Number(moduleId) : Date.now(),
      name: nameModule,
      description: description,
      words: words,
    };
    const storedModules = JSON.parse(localStorage.getItem('modules')) || [];
    if (moduleId) {
      const updatedModules = storedModules.map((mod) =>
        mod.id === Number(moduleId) ? newModule : mod
      );
      localStorage.setItem('modules', JSON.stringify(updatedModules));
    } else {
      localStorage.setItem(
        'modules',
        JSON.stringify([...storedModules, newModule])
      );
    }

    navigate('/');
  }
  const isDisabled =
    words.length === 0 ||
    words.every((word) => !word.english?.trim() || !word.russian?.trim());

  return (
    <>
      <div className={styles.topicForm}>
        <h1 className={styles.topicForm__title}>
          {moduleId ? 'Редактировать модуль' : ' Создать новый модуль'}
        </h1>
        <form className={styles.topicForm__form}>
          <input
            className={styles.topicForm__form_theme}
            type="text"
            placeholder={
              moduleId ? { nameModule } : 'Введите название, например: Животные'
            }
            value={nameModule}
            onChange={(e) => {
              setNameModule(e.target.value);
            }}
          ></input>
          <input
            className={styles.topicForm__form_description}
            type="text"
            placeholder={moduleId ? { description } : 'Введите описанание'}
            value={description}
            onChange={(e) => {
              setDescriprion(e.target.value);
            }}
          />
          <div className={styles.topicForm__form_newWord}>
            {words.map((word, index) => (
              <NewWordFromTopic
                key={word.id}
                id={word.id}
                index={index + 1}
                english={word.english}
                russian={word.russian}
                onChange={(key, value) => updateWord(index, key, value)}
                onDelete={deleteWord}
              />
            ))}
          </div>

          <WhiteBtn
            text={' + Добавить карточку'}
            className={styles.topicForm__addNewWord}
            onClick={(e) => {
              e.preventDefault();
              addWords();
            }}
          />

          <OrangeBtn
            text={moduleId ? 'Сохранить изменения' : ' + Создать новый модуль'}
            className={styles.topicForm__btn}
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            disabled={isDisabled}
          />
        </form>
      </div>
    </>
  );
};

export default FormCreateTopic;
