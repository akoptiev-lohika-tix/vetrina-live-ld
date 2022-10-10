import { newsAction, newsActionsEnum, newsState } from '../types';

const initialState: newsState = {
  news: [],
  loadingNews: false,
  errorNews: null
};

export const newsReducer = (state = initialState, action: newsAction): newsState => {
  switch (action.type) {
    case newsActionsEnum.FETCH_NEWS:
      return {
        ...state,
        loadingNews: true
      };

    case newsActionsEnum.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        news: action.payload,
        loadingNews: false
      };

    case newsActionsEnum.FETCH_NEWS_ERROR:
      return {
        ...state,
        loadingNews: false,
        errorNews: action.payload
      };

    default:
      return state;
  }
};
