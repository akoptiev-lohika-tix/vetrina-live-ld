import { Store, StoreFromServer } from '../../interfaces';

export interface storesState {
  stores: Store[];
  loadingStores: boolean;
  errorStores: string | null;
  activeStore: Store | StoreFromServer | null;
  loadingActiveStore: boolean;
  errorActiveStore: string | null;
}

export enum storesActionsEnum {
  FETCH_STORES = 'FETCH_STORES',
  FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS',
  FETCH_STORES_ERROR = 'FETCH_STORES_ERROR',
  FETCH_ACTIVE_STORE = 'FETCH_ACTIVE_STORE',
  FETCH_ACTIVE_STORE_SUCCESS = 'FETCH_ACTIVE_STORE_SUCCESS',
  FETCH_ACTIVE_STORE_ERROR = 'FETCH_ACTIVE_STORE_ERROR'
}

interface FetchStoresActions {
  type: storesActionsEnum.FETCH_STORES;
}

interface FetchStoresSuccessActions {
  type: storesActionsEnum.FETCH_STORES_SUCCESS;
  payload: Store[];
}

interface FetchStoresErrorActions {
  type: storesActionsEnum.FETCH_STORES_ERROR;
  payload: string;
}

interface FetchActiveStoreActions {
  type: storesActionsEnum.FETCH_ACTIVE_STORE;
}

interface FetchActiveStoreSuccessActions {
  type: storesActionsEnum.FETCH_ACTIVE_STORE_SUCCESS;
  payload: Store | StoreFromServer;
}

interface FetchActiveStoreErrorActions {
  type: storesActionsEnum.FETCH_ACTIVE_STORE_ERROR;
  payload: string;
}

export type storesAction =
  | FetchStoresActions
  | FetchStoresSuccessActions
  | FetchStoresErrorActions
  | FetchActiveStoreActions
  | FetchActiveStoreSuccessActions
  | FetchActiveStoreErrorActions;
