import styles from './NotFoundPage.module.scss';

const NotFoundPage = () => {
  return (
    <>
      <div className={styles.page}>
        <h1 className={styles.page__title}>Ошибка 404</h1>
      </div>
    </>
  );
};

export default NotFoundPage;
