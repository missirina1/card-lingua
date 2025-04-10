import styles from './Word.module.scss';
import FormWord from '../FormWord/FormWord';
import { useState } from 'react';

const Word = (props) => {
  const { english, russian, id, onDelete, onUpdate } = props;
  const [isChangeWord, setIsChangeWord] = useState(false);

  function handleClick() {
    setIsChangeWord(true);
  }
  function deleteWord() {
    onDelete(id);
  }

  function closeModal() {
    setIsChangeWord(false);
  }

  return (
    <>
      <li className={styles.item}>
        <div className={styles.item__box}>
          <p className={styles.item__box_word}>{english}</p>
          <p className={styles.item__box_translate}>{russian}</p>
        </div>
        <div className={styles.item__change}>
          <button className={styles.item__change_edit} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g
                fill="#ffffff"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M43.125,2c-1.24609,0 -2.48828,0.48828 -3.4375,1.4375l-0.8125,0.8125l6.875,6.875c-0.00391,0.00391 0.8125,-0.8125 0.8125,-0.8125c1.90234,-1.90234 1.89844,-4.97656 0,-6.875c-0.95312,-0.94922 -2.19141,-1.4375 -3.4375,-1.4375zM37.34375,6.03125c-0.22656,0.03125 -0.4375,0.14453 -0.59375,0.3125l-32.4375,32.46875c-0.12891,0.11719 -0.22656,0.26953 -0.28125,0.4375l-2,7.5c-0.08984,0.34375 0.01172,0.70703 0.26172,0.95703c0.25,0.25 0.61328,0.35156 0.95703,0.26172l7.5,-2c0.16797,-0.05469 0.32031,-0.15234 0.4375,-0.28125l32.46875,-32.4375c0.39844,-0.38672 0.40234,-1.02344 0.01563,-1.42187c-0.38672,-0.39844 -1.02344,-0.40234 -1.42187,-0.01562l-32.28125,32.28125l-4.0625,-4.0625l32.28125,-32.28125c0.30078,-0.28906 0.39063,-0.73828 0.22266,-1.12109c-0.16797,-0.38281 -0.55469,-0.62109 -0.97266,-0.59766c-0.03125,0 -0.0625,0 -0.09375,0z"></path>
                </g>
              </g>
            </svg>
          </button>
          <button className={styles.item__change_delete} onClick={deleteWord}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0,0,256,256"
            >
              <g
                fill="#000000"
                fillRule="nonzero"
                stroke="none"
                strokeWidth="1"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeMiterlimit="10"
                strokeDasharray=""
                strokeDashoffset="0"
                fontFamily="none"
                fontWeight="none"
                fontSize="none"
                textAnchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M21,2c-1.64545,0 -3,1.35455 -3,3v2h-7.8457c-0.05615,-0.00939 -0.113,-0.01396 -0.16992,-0.01367c-0.04844,0.00105 -0.09675,0.00562 -0.14453,0.01367h-1.83984c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h1v36c0,1.64545 1.35455,3 3,3h26c1.64545,0 3,-1.35455 3,-3v-36h1c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587h-1.83203c-0.10799,-0.01785 -0.21818,-0.01785 -0.32617,0h-7.8418v-2c0,-1.64545 -1.35455,-3 -3,-3zM21,4h8c0.55455,0 1,0.44545 1,1v2h-10v-2c0,-0.55455 0.44545,-1 1,-1zM11,9h7.83203c0.10799,0.01785 0.21818,0.01785 0.32617,0h11.67383c0.10799,0.01785 0.21818,0.01785 0.32617,0h7.8418v36c0,0.55454 -0.44546,1 -1,1h-26c-0.55454,0 -1,-0.44546 -1,-1zM18.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM24.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM30.98438,13.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v25c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-25c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </li>
      {isChangeWord && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <FormWord
              id={id}
              english={english}
              translate={russian}
              onSave={(newEnglish, newRussian) => {
                onUpdate(id, newEnglish, newRussian);
                closeModal();
              }}
              onCancel={closeModal}
            />
            <button className={styles.modalClose} onClick={closeModal}>
              <span role="img" aria-label="Закрыть">
                ❌
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Word;
