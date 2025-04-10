import styles from './NewWordFromTopic.module.scss';
import WhiteBtn from '../WhiteBtn/WhiteBtn';

const NewWordFromTopic = (props) => {
  const { id, index, english, russian, onChange, onDelete } = props;

  return (
    <>
      <div className={styles.newWord}>
        <div className={styles.newWord__header}>
          <span className={styles.newWord__header_index}>{index}</span>
          <div className={styles.newWord__header_boxBtn}>
            <WhiteBtn
              text={
                <span role="img" aria-label="Удалить слово">
                  ❌
                </span>
              }
              className={styles.newWord__header_btn}
              onClick={(e) => {
                e.preventDefault();
                onDelete(id);
              }}
            />
          </div>
        </div>

        <input
          className={styles.newWord__word}
          type="text"
          placeholder="Слово"
          value={english}
          onChange={(e) => onChange('english', e.target.value)}
        ></input>
        <input
          className={styles.newWord__translate}
          type="text"
          placeholder="Перевод"
          value={russian}
          onChange={(e) => onChange('russian', e.target.value)}
        />
      </div>
    </>
  );
};
export default NewWordFromTopic;
