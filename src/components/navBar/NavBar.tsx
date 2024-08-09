import React, {ReactNode, memo} from 'react';
import {AuthUser} from '@types';

import styles from '@components/navBar/NavBar.module.scss';

export interface NavBarProps {
  user?: AuthUser;
}

function NavBar({user}: NavBarProps) {
  return (
    <div className={styles.root}>
      {user && (
        <h1>
          Hi {user?.name.title}. {user?.name.first} {user?.name.last}!
        </h1>
      )}
    </div>
  );
}

export default memo(NavBar);
