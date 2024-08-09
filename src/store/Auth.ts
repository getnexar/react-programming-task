import {makeAutoObservable} from 'mobx';
import {AuthUser} from '@types';
import {api, fetchUser} from '@services';

export type AuthHydration = {
  user: AuthUser;
};

export class AuthStore {
  user?: AuthUser;
  timer?: number;

  constructor() {
    makeAutoObservable(this);
  }

  login = async (email: string, password: string): Promise<boolean> => {
    const responce = await api<AuthUser>({
      url: '/api/login',
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    if (responce.status === 200) {
      this.user = responce.data;
      localStorage.setItem('user', JSON.stringify(responce.data));
      return true;
    }

    return false;
  };

  logout = () => {
    localStorage.removeItem('user');
    this.user = undefined;
  };

  startUserRefetch = () => {
    this.timer = window.setInterval(async () => {
      const user = await fetchUser();
      if (user && this.user) {
        this.user = {
          ...this.user,
          ...user,
        };
      }
    }, 10 * 1000);
  };

  stopUserRefetch = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
  };

  hydrate(data?: AuthHydration) {
    if (data) {
      this.user = data.user;
    }

    try {
      const storedUser = JSON.parse(localStorage.getItem('user') || '');
      if (!this.user && storedUser) {
        this.user = storedUser;
      }
    } catch (_e) {}
  }
}
