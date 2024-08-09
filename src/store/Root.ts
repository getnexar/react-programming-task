import {AuthHydration, AuthStore} from './Auth';

export type RootStoreHydration = {
  authStore?: AuthHydration;
};

export class RootStore {
  authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }

  hydrate(data?: RootStoreHydration) {
    this.authStore.hydrate(data?.authStore);
  }
}
