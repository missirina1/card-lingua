import styles from './ItemTopics.module.scss';

const ItemTopics = (props) => {
  const { name, words = [] } = props;
  return (
    <>
      <div className={styles.topics}>
        <p className={styles.topics__quentity}>{`Карточек: ${words.length}`}</p>
        <h1 className={styles.topics__title}>{name}</h1>
      </div>
    </>
  );
};

export default ItemTopics;
