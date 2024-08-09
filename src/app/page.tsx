'use client';

import {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import Button from '@components/button';
import Page from '@components/page';
import Icon from '@components/icon';
import NavBar from '@components/navBar';
import {useAuthStore} from '@store';

import styles from '@app/page.module.scss';

function RootPage() {
  const router = useRouter();
  const {user, logout, startUserRefetch, stopUserRefetch} = useAuthStore();

  // useEffect(() => {
  //   startUserRefetch();
  //   return () => {
  //     stopUserRefetch();
  //   };
  // }, [startUserRefetch, stopUserRefetch]);

  const handleLogout = useCallback(() => {
    logout();
    router.replace('/login');
  }, [logout, router]);

  return (
    <Page className={styles.root}>
      <div className={styles.sidebar}>
        <Link href="/">
          <Image src="/images/logo.png" height={24} width={24} alt="Nexar logo" />
        </Link>
        <Button className={styles.button} onClick={handleLogout}>
          <Icon name="logout" />
          Logout
        </Button>
      </div>

      <NavBar user={user} />

      <div className={styles.content}>
        <div className={styles.contentLeft}>
          <div className={clsx(styles.widget, styles.widgetGradient)}>
            <div className={styles.preventableCosts}>
              <h3>Preventable costs</h3>
              <p>Preventable costs are calculated based on the driver behavior on the road.</p>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.accidentRiskReduction}>
              <h3>Accident risk reduction</h3>
              <p>Accident risk reduction is calculated based on the driver behavior on the road.</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.widget}>
              <div className={styles.speedCosts}>
                <h3>Preventable fuel costs.</h3>
                <p>Preventable fuel costs are calculated based on the speed of the vehicle.</p>
              </div>
            </div>
            <div className={styles.widget}>
              <div className={styles.idleCosts}>
                <h3>Idle costs</h3>
                <p>Idle costs are calculated based on the time the vehicle is idle.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.contentRight}>
          <div className={styles.widget}>
            <div className={styles.highlights}>
              <h3>Highlights</h3>
              <p>Highlights are calculated based on the driver behavior on the road.</p>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.drivingHours}>
              <h3>Driving hours</h3>
              <p>Driving hours are calculated based on the the time the vehicle is moving.</p>
            </div>
          </div>
          <div className={styles.widget}>
            <div className={styles.drivingDistance}>
              <h3>Driving distance</h3>
              <p>Driving distance is calculated based on the distance the vehicle has traveled.</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default observer(RootPage);
