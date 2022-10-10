import { News } from '../../interfaces';

export interface newsState {
  news: News[];
  loadingNews: boolean;
  errorNews: string | null;
}

export enum newsActionsEnum {
  FETCH_NEWS = 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR'
}

interface FetchNewsActions {
  type: newsActionsEnum.FETCH_NEWS;
}

interface FetchNewsSuccessActions {
  type: newsActionsEnum.FETCH_NEWS_SUCCESS;
  payload: News[];
}

interface FetchNewsErrorActions {
  type: newsActionsEnum.FETCH_NEWS_ERROR;
  payload: string;
}

export type newsAction = FetchNewsActions | FetchNewsSuccessActions | FetchNewsErrorActions;
