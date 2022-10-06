import { Dispatch } from 'react';
import axios from 'axios';

import { pagesAction, pagesActionsEnum } from '../types';
import { BASE_DATA_URL, LOAD_DATA_ERROR } from '../../constants';
import { serverPagesMapper } from '../../helpers';
import { Page, SubPage } from '../../interfaces';

type Function = (dispatch: Dispatch<pagesAction>) => Promise<void>;

export const fetchPages = (): Function => {
  return async (dispatch: Dispatch<pagesAction>): Promise<void> => {
    try {
      dispatch({ type: pagesActionsEnum.FETCH_PAGES });

      const response = await axios.get(BASE_DATA_URL + '/pages.json');

      const mappedResponse = serverPagesMapper(response.data);

      dispatch({ type: pagesActionsEnum.FETCH_PAGES_SUCCESS, payload: mappedResponse });
    } catch (e) {
      dispatch({ type: pagesActionsEnum.FETCH_PAGES_ERROR, payload: LOAD_DATA_ERROR });
    }
  };
};

export const setActivePage = (
  pageName: Page['displayName'] | SubPage['displayName']
): pagesAction => {
  return { type: pagesActionsEnum.SET_ACTIVE_PAGE, payload: pageName };
};
