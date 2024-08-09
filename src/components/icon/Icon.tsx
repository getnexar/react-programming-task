import React, {memo, CSSProperties} from 'react';
import clsx from 'clsx';

import {icons, IconNamesType} from './iconsList';
import styles from './Icon.module.scss';

export interface IconProps {
  className?: string;
  name: IconNamesType;
  onClick?(): void;
  style?: CSSProperties;
  title?: string;
}

function Icon({name, className, title, style, onClick, ...props}: IconProps) {
  const html = icons[name];

  return (
    <span
      {...props}
      className={clsx(styles.icon, className)}
      dangerouslySetInnerHTML={{__html: html}}
      title={title}
      style={style}
      onClick={onClick}
    />
  );
}

export default memo(Icon);
