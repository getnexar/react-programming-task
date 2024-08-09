import {makeAutoObservable} from 'mobx';
import {AuthUser} from '@types';
import {api} from '@services';

export type AuthHydration = {
  user: AuthUser;
};

export class AuthStore {
  user?: AuthUser;

  constructor() {
    makeAutoObservable(this);
  }

  async login(email: string, password: string): Promise<boolean> {
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
  }

  logout() {
    localStorage.removeItem('user');
    this.user = undefined;
  }

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
