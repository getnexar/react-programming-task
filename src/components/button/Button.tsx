import React, {ButtonHTMLAttributes, memo} from 'react';
import clsx from 'clsx';
import styles from '@components/button/Button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({children, ...props}: ButtonProps) {
  return (
    <button {...props} className={clsx(styles.button, props.className)}>
      {children}
    </button>
  );
}

export default memo(Button);
