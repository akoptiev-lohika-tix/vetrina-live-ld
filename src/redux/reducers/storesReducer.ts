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
        ...state,
        loadingStores: true
      };

    case storesActionsEnum.FETCH_STORES_SUCCESS:
      return {
        ...state,
        stores: action.payload,
        loadingStores: false
      };

    case storesActionsEnum.FETCH_STORES_ERROR:
      return {
        ...state,
        loadingStores: false,
        errorStores: action.payload
      };

    default:
      return state;
  }
};
