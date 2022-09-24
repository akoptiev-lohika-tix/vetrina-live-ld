import { MainPagesAction, MainPagesActionsEnum, mainPagesState } from '../types/main-pages-types';

const initialState: mainPagesState = {
  mainPages: [],
  loading: false,
  error: null
};

export const mainPagesReducer = (state = initialState, action: MainPagesAction): mainPagesState => {
  switch (action.type) {
    case MainPagesActionsEnum.FETCH_MAIN_PAGES:
      return {
        loading: true,
        error: null,
        mainPages: []
      };

    case MainPagesActionsEnum.FETCH_MAIN_PAGES_SUCCESS:
      return {
        loading: false,
        error: null,
        mainPages: action.payload
      };

    case MainPagesActionsEnum.FETCH_MAIN_PAGES_ERROR:
      return {
        loading: false,
        error: action.payload,
        mainPages: []
      };

    default:
      return state;
  }
};
