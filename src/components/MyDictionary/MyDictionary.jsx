import Word from '../Word/Word';
import styles from './MyDictionary.module.scss';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { wordsStore } from '../../stores/WordsStore.js';
import { useEffect } from 'react';

const MyDictionary = observer(() => {
  const navigate = useNavigate();

  useEffect(() => {
    wordsStore.fetchWords();
  }, []);

  if (wordsStore.loading)
    return <div className={styles.loader}>⏳ Загрузка...</div>;
  if (wordsStore.error)
    return <p className={styles.error}>❌ Ошибка: {wordsStore.error}</p>;

  function handleFormSubmit(e) {
    e.preventDefault();
    wordsStore.addWord();
  }

  function handleTrainAll() {
    const wordsModule = wordsStore.words.map((word) => ({
      id: word.id,
      english: word.english,
      russian: word.russian,
      transcription: word.transcription || '',
    }));

    navigate('/carousel', {
      state: { wordsModule, from: 'myDictionary' },
    });
  }

  return (
    <>
      <div className={styles.dictionary}>
        <div className={styles.dictionary__header}>
          <div className={styles.dictionary__training}>
            <h1 className={styles.dictionary__title}>Мой словарь</h1>

            <OrangeBtn
              text={'Тренировать все слова ►'}
              ariaLabel={'Тренировать все слова'}
              className={styles.dictionary__training_btn}
              onClick={handleTrainAll}
            />
          </div>
          <form className={styles.dictionary__form} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Введите слово"
              className={styles.dictionary__form_input}
              value={wordsStore.newWord}
              onChange={(e) => wordsStore.setNewWord(e.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Перевод"
              className={styles.dictionary__form_input}
              value={wordsStore.wordTranslate}
              onChange={(e) => wordsStore.setWordTranslate(e.target.value)}
            ></input>
            <OrangeBtn
              type="submit"
              ariaLabel={'Добавить новое слово'}
              className={styles.dictionary__form_btn}
              text={'+ Новое слово'}
              disabled={!wordsStore.newWord || !wordsStore.wordTranslate}
            />
          </form>
        </div>
        <div className={styles.dictionary__list}>
          <ul className={styles.dictionary__ul}>
            {wordsStore.words.map((word) => {
              const { id, english, transcription, russian } = word;
              return (
                <Word
                  key={id}
                  id={id}
                  english={english}
                  transcription={transcription}
                  russian={russian}
                  onDelete={() => wordsStore.deleteWord(id)}
                  onUpdate={wordsStore.updateWord}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
});

export default MyDictionary;
