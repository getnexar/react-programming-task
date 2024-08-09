import React, {ReactNode} from 'react';
import StoreContext from '@store';
import {RootStore, RootStoreHydration} from '@store/Root';

let store: RootStore;

function initializeStore(initialData?: RootStoreHydration): RootStore {
  const _store = store ?? new RootStore();

  _store.hydrate(initialData);
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export default function StoreProvider({
  children,
  hydrationData,
}: {
  children: ReactNode;
  hydrationData?: RootStoreHydration;
}) {
  const store = initializeStore(hydrationData);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
