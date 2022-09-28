import { storesAction, storesActionsEnum, storesState } from '../types';

const initialState: storesState = {
  stores: [],
  loadingStores: false,
  errorStores: null
};

export const storesReducer = (state = initialState, action: storesAction): storesState => {
  switch (action.type) {
    case storesActionsEnum.FETCH_STORES:
      return {
        stores: [],
        loadingStores: true,
        errorStores: null
      };

    case storesActionsEnum.FETCH_STORES_SUCCESS:
      return {
        stores: action.payload,
        loadingStores: false,
        errorStores: null
      };

    case storesActionsEnum.FETCH_STORES_ERROR:
      return {
        stores: [],
        loadingStores: false,
        errorStores: action.payload
      };

    default:
      return state;
  }
};
