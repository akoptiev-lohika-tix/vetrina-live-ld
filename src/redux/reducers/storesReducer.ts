import { storesAction, storesActionsEnum, storesState } from '../types';

const initialState: storesState = {
  stores: [],
  loadingStores: false,
  errorStores: null,
  activeStore: null,
  loadingActiveStore: false,
  errorActiveStore: null
};

export const storesReducer = (state = initialState, action: storesAction): storesState => {
  switch (action.type) {
    case storesActionsEnum.FETCH_STORES:
      return {
        ...state,
        loadingStores: true
      };

    case storesActionsEnum.FETCH_STORES_SUCCESS:
      return {
        ...state,
        stores: action.payload,
        loadingStores: false,
        activeStore: action.payload[0]
      };

    case storesActionsEnum.FETCH_STORES_ERROR:
      return {
        ...state,
        loadingStores: false,
        errorStores: action.payload
      };

    case storesActionsEnum.FETCH_ACTIVE_STORE:
      return {
        ...state,
        loadingActiveStore: true
      };

    case storesActionsEnum.FETCH_ACTIVE_STORE_SUCCESS:
      return {
        ...state,
        activeStore: action.payload,
        loadingActiveStore: false
      };

    case storesActionsEnum.FETCH_ACTIVE_STORE_ERROR:
      return {
        ...state,
        loadingActiveStore: false,
        errorActiveStore: action.payload
      };

    default:
      return state;
  }
};
