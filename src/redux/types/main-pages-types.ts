import { Page } from '../../interfaces';

export interface mainPagesState {
  mainPages: Page[];
  loading: boolean;
  error: string | null;
}

export enum MainPagesActionsEnum {
  FETCH_MAIN_PAGES = 'FETCH_MAIN_PAGES',
  FETCH_MAIN_PAGES_SUCCESS = 'FETCH_MAIN_PAGES_SUCCESS',
  FETCH_MAIN_PAGES_ERROR = 'FETCH_MAIN_PAGES_ERROR'
}

interface FetchMainPagesActions {
  type: MainPagesActionsEnum.FETCH_MAIN_PAGES;
}

interface FetchMainPagesSuccessActions {
  type: MainPagesActionsEnum.FETCH_MAIN_PAGES_SUCCESS;
  payload: Page[];
}

interface FetchMainPagesErrorActions {
  type: MainPagesActionsEnum.FETCH_MAIN_PAGES_ERROR;
  payload: string;
}

export type MainPagesAction =
  | FetchMainPagesActions
  | FetchMainPagesSuccessActions
  | FetchMainPagesErrorActions;
