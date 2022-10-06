import { Page, SubPage } from '../../interfaces';

export interface pagesState {
  pages: Page[];
  loadingPages: boolean;
  error: string | null;
  activePageName: Page['displayName'] | SubPage['displayName'] | null;
}

export enum pagesActionsEnum {
  FETCH_PAGES = 'FETCH_PAGES',
  FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS',
  FETCH_PAGES_ERROR = 'FETCH_PAGES_ERROR',
  SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE '
}

interface FetchPagesActions {
  type: pagesActionsEnum.FETCH_PAGES;
}

interface FetchPagesSuccessActions {
  type: pagesActionsEnum.FETCH_PAGES_SUCCESS;
  payload: Page[];
}

interface FetchPagesErrorActions {
  type: pagesActionsEnum.FETCH_PAGES_ERROR;
  payload: string;
}

interface SetActivePageActions {
  type: pagesActionsEnum.SET_ACTIVE_PAGE;
  payload: Page['displayName'] | SubPage['displayName'];
}

export type pagesAction =
  | FetchPagesActions
  | FetchPagesSuccessActions
  | FetchPagesErrorActions
  | SetActivePageActions;
