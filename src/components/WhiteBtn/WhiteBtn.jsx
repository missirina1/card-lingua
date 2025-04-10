import stylesWhite from './WhiteBtn.module.scss';
import clsx from 'clsx';

const WhiteBtn = (props) => {
  const { text, ariaLabel, className, onClick } = props;
  return (
    <>
      <button
        onClick={onClick}
        className={clsx(stylesWhite.btnWhite, className)}
        aria-label={ariaLabel}
      >
        {text}
      </button>
    </>
  );
};

export default WhiteBtn;
