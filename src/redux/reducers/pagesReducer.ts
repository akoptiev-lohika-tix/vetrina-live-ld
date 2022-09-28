import { pagesAction, pagesActionsEnum, pagesState } from '../types/pages-types';

const initialState: pagesState = {
  pages: [],
  loading: false,
  error: null
};

export const pagesReducer = (state = initialState, action: pagesAction): pagesState => {
  switch (action.type) {
    case pagesActionsEnum.FETCH_PAGES:
      return {
        loading: true,
        error: null,
        pages: []
      };

    case pagesActionsEnum.FETCH_PAGES_SUCCESS:
      return {
        loading: false,
        error: null,
        pages: action.payload
      };

    case pagesActionsEnum.FETCH_PAGES_ERROR:
      return {
        loading: false,
        error: action.payload,
        pages: []
      };

    default:
      return state;
  }
};
