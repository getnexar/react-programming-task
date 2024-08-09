'use client';

import Image from 'next/image';
import {observer} from 'mobx-react-lite';
import {useRouter} from 'next/navigation';
import clsx from 'clsx';
import * as Yup from 'yup';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import Page from '@components/page';
import Input from '@components/input';
import {useAuthStore} from '@store';
import {isEmail} from '@utils';

import styles from '@app/login/page.module.scss';

type FormValues = {
  email: string;
  password: string;
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required('required field').test('', 'wrong email format', isEmail),
  password: Yup.string().required('required field'),
});

function LoginPage() {
  const router = useRouter();
  const authStore = useAuthStore();

  const methods = useForm<FormValues>({
    resolver: yupResolver(validationSchema),
  });

  const handleLoginClick = async () => {
    await methods.handleSubmit(async data => {
      const result = await authStore.login(data.email, data.password);
      if (result) {
        router.replace('/');
      } else {
        methods.setError('password', {type: 'custom', message: 'wrong credentials'});
      }
    })();
  };

  const email = methods.watch('email');
  const password = methods.watch('password');

  return (
    <Page className={styles.root}>
      <Image src="/images/logo_full.png" height={40} width={144} alt="Nexar logo" />

      <FormProvider {...methods}>
        <div className={styles.form}>
          <div className={styles.formTitle}>Sign in to your account</div>

          <Input name="email" label="Email" type="email" />
          <Input name="password" label="Password" type="password" />

          <div
            className={clsx(styles.formButton, (!email || !password) && styles.formButtonDisabled)}
            onClick={handleLoginClick}
          >
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
      </FormProvider>
    </Page>
  );
}

export default observer(LoginPage);
