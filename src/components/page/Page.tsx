import React, {ReactNode} from 'react';
import clsx from 'clsx';
import {usePage} from '@hooks';

import styles from '@components/page/Page.module.scss';

export interface PageProps {
  children?: ReactNode;
  className?: string;
}

function Page({children, className}: PageProps) {
  const isReady = usePage();

  if (isReady) {
    return <main className={clsx(styles.root, className)}>{children}</main>;
  }

  return null;
}

export default Page;
