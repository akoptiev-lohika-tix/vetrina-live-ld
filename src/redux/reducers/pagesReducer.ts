import { pagesAction, pagesActionsEnum, pagesState } from '../types';

const initialState: pagesState = {
  pages: [],
  loadingPages: false,
  error: null,
  activePageName: null
};

export const pagesReducer = (state = initialState, action: pagesAction): pagesState => {
  switch (action.type) {
    case pagesActionsEnum.FETCH_PAGES:
      return {
        ...state,
        loadingPages: true
      };

    case pagesActionsEnum.FETCH_PAGES_SUCCESS:
      return {
        ...state,
        loadingPages: false,
        pages: action.payload,
        activePageName: action.payload[0].displayName
      };

    case pagesActionsEnum.FETCH_PAGES_ERROR:
      return {
        ...state,
        loadingPages: false,
        error: action.payload
      };

    case pagesActionsEnum.SET_ACTIVE_PAGE:
      return {
        ...state,
        activePageName: action.payload
      };

    default:
      return state;
  }
};
