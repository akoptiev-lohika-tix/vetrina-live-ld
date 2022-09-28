import { Store } from '../../interfaces';

export interface storesState {
  stores: Store[];
  loadingStores: boolean;
  errorStores: string | null;
}

export enum storesActionsEnum {
  FETCH_STORES = 'FETCH_STORES',
  FETCH_STORES_SUCCESS = 'FETCH_STORES_SUCCESS',
  FETCH_STORES_ERROR = 'FETCH_STORES_ERROR'
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

export type storesAction = FetchStoresActions | FetchStoresSuccessActions | FetchStoresErrorActions;
