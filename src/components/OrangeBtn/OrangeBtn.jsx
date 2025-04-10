import stylesOrange from './OrangeBtn.module.scss';
import clsx from 'clsx';
import { forwardRef } from 'react';

const OrangeBtn = forwardRef(
  ({ text, ariaLabel, className, disabled, onClick }, ref) => {
    return (
      <>
        <button
          ref={ref}
          onClick={onClick}
          disabled={disabled}
          aria-label={ariaLabel}
          className={clsx(
            stylesOrange.btnOrange,
            { [stylesOrange.disabled]: disabled },
            className
          )}
        >
          {text}
        </button>
      </>
    );
  }
);

export default OrangeBtn;
