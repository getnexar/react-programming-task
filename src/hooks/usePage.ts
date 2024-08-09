import {useEffect, useState} from 'react';
import {useRouter, usePathname} from 'next/navigation';
import {useAuthStore} from '@store';

export function usePage() {
  const store = useAuthStore();
  const router = useRouter();
  const pathname = usePathname();

  const [isReady, setReady] = useState(false);
  const isAuthenticated = !!store.user;

  useEffect(() => {
    const resolvedUrl = pathname.replace(/\?.+/, '');

    const load = async () => {
      if (!isAuthenticated && resolvedUrl !== '/login') {
        router.replace('/login');
      }
      if (isAuthenticated && resolvedUrl === '/login') {
        router.replace('/');
      }
      setReady(true);
    };

    load();
  }, [isAuthenticated, router, pathname]);

  return isReady;
}
