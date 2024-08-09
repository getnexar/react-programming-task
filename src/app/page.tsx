'use client';

import {observer} from 'mobx-react-lite';
import Image from 'next/image';
import Link from 'next/link';
import {Button} from '@components/button';
import Page from '@components/page';
import {useAuthStore} from '@store';

import styles from '@app/page.module.scss';

function RootPage() {
  const {user} = useAuthStore();

  return (
    <Page>
      <div className={styles.element1}>
        <Link href="/">
          <Image src="/images/logo.png" height={24} width={24} alt="Nexar logo" />
        </Link>
        {/* TODO: On click logout a User and redirect to the /login page */}
        <Button className={styles.button}>
          <Image src="/icons/logout.svg" height={24} width={24} alt="Logout icon" />
          Logout
        </Button>
      </div>

      <div className={styles.element2}>
        {/* TODO: Create separate component which will receive User as a prop and render what it needs to */}
        <h1>
          Hi {user?.name.title}. {user?.name.first} {user?.name.last}!
        </h1>

        <div className={styles.element3}>
          <div style={{float: 'left'}}>
            <div className={`${styles.widget} ${styles.widgetGradient}`}>
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
          <div style={{float: 'right'}}>
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
      </div>
    </Page>
  );
}

export default observer(RootPage);
