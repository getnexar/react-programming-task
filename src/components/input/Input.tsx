import React, {useState, useCallback, memo} from 'react';
import clsx from 'clsx';
import {useController} from 'react-hook-form';
import Icon from '@components/icon';

import styles from '@components/input/Input.module.scss';

export interface InputProps {
  label?: string;
  type?: string;
  name: string;
}

function Input({label, type = 'text', name: sourceName}: InputProps) {
  const {
    field: {onChange, onBlur, value, ref, name},
    fieldState: {error},
  } = useController({name: sourceName});

  const [showPassword, setShowPassword] = useState(false);
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(value => !value);
    setIsIconClicked(true);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur();
  };

  return (
    <>
      <div className={clsx(styles.root, isFocused && styles.rootFocused)}>
        {label && <div className={clsx(styles.label, isFocused && styles.focusedLabel)}>{label}</div>}
        <section>
          <input
            className={clsx(styles.root)}
            name={name}
            onBlur={handleBlur}
            onChange={onChange}
            onFocus={handleFocus}
            ref={ref}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
            value={value || ''}
          />
          {type === 'password' && (
            <div className={clsx(styles.passwordToggle, isIconClicked && styles.passwordToggleActive)}>
              <Icon onClick={handleClickShowPassword} name={showPassword ? 'eyeOff' : 'eye'} />
            </div>
          )}
        </section>
      </div>
      {error?.message && <div className={styles.error}>{error?.message}</div>}
    </>
  );
}

export default memo(Input);
