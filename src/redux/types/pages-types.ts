import { Page } from '../../interfaces';

export interface pagesState {
  pages: Page[];
  loading: boolean;
  error: string | null;
}

export enum pagesActionsEnum {
  FETCH_PAGES = 'FETCH_PAGES',
  FETCH_PAGES_SUCCESS = 'FETCH_PAGES_SUCCESS',
  FETCH_PAGES_ERROR = 'FETCH_PAGES_ERROR'
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

export type pagesAction = FetchPagesActions | FetchPagesSuccessActions | FetchPagesErrorActions;
