import {createContext, useContext} from 'react';
import {enableStaticRendering} from 'mobx-react-lite';
import {RootStore} from './Root';

enableStaticRendering(typeof window === 'undefined');

const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}

export function useAuthStore() {
  const {authStore} = useRootStore();
  return authStore;
}

export default StoreContext;
