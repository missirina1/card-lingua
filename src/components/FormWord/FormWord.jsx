import WhiteBtn from '../WhiteBtn/WhiteBtn';
import OrangeBtn from '../OrangeBtn/OrangeBtn';
import { useState } from 'react';
import styles from './FormWord.module.scss';
import { wordsStore } from '../../stores/WordsStore';

const FormWord = (props) => {
  const { id, english, translate, onSave, onCancel } = props;
  const [newWord, setNewWord] = useState(english);
  const [newTranslate, setNewTranslate] = useState(translate);

  function handleSave(e) {
    e.preventDefault();
    const updateWord = {
      id: id,
      english: newWord.trim(),
      russian: newTranslate.trim(),
      transcription: props.transcription || '',
      tags: '',
      tags_json: '',
    };
    wordsStore.updateWordOnServer(id, updateWord);
    onSave();
  }

  function handleCancel(e) {
    e.preventDefault();
    onCancel();
  }

  return (
    <form className={styles.form}>
      <h1 className={styles.form__title}>Изменение слова</h1>
      <input
        type="text"
        className={styles.form__word}
        placeholder={newWord}
        onChange={(e) => {
          setNewWord(e.target.value);
        }}
      />
      <input
        type="text"
        className={styles.form__translate}
        placeholder={newTranslate}
        onChange={(e) => {
          setNewTranslate(e.target.value);
        }}
      />
      <div className={styles.form__btn}>
        <WhiteBtn text={'Внести изменения'} onClick={handleSave} />
        <OrangeBtn text={'Отменить изменения'} onClick={handleCancel} />
      </div>
    </form>
  );
};

export default FormWord;
