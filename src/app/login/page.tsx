import styles from '@app/login/page.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className={styles.root}>
      <Image src="/images/logo_full.png" height={40} width={144} alt="Nexar logo" />

      <div className={styles.form}>
        <div className={styles.formTitle}>Sign in to your account</div>
        {/* TODO: use clsx or classnames when working with multiple classes */}
        {/* TODO: When focused border color and input label should be purple */}
        {/* Note: page.module.scss has all the relevant styles for the focused state */}
        <div className={styles.formInput}>
          <div className={styles.formInputLabel}>Email</div>
          <section>
            <input name="email" type="email" />
          </section>
        </div>

        <div className={styles.formInput}>
          <div className={styles.formInputLabel}>Password</div>
          <section>
            <input name="password" type="password" />
            {/* TODO: On click should show or hide entered password */}
            {/* TODO: Until clicked icon should be light gray and once clicked color should change to dark gray */}
            {/* TODO: Make it possible to change svg icon color using css 'color' property */}
            {/* Note: page.module.scss has all the relevant styles for the active state */}
            <div className={styles.formInputPasswordToggle}>
              <Image src="/icons/eye.svg" height={24} width={24} alt="Eye icon" />
            </div>
          </section>
        </div>

        {/* TODO: When user enters email and password unblock the button */}
        <div className={`${styles.formButton} ${styles.formButtonDisabled}`}>
          <div>Sign in</div>
        </div>

        <section className={styles.formTos}>
          I acknowledge that my data will be processed in accordance with{' '}
          <a href="https://getnexar.com/privacy/" target="_blank" rel="noopener noreferrer">
            Nexar's Privacy Policy
          </a>{' '}
          and <a href="https://www.getnexar.com/cookie">Cookie Policy</a>. I agree to use the services according to{' '}
          <a href="https://getnexar.com/terms/" target="_blank" rel="noopener noreferrer">
            Nexar’s Terms of Service
          </a>
        </section>
      </div>
    </main>
  );
}
