import { Dispatch } from 'react';
import axios from 'axios';

import { pagesAction, pagesActionsEnum } from '../types';
import { BASE_DATA_URL, LOAD_DATA_ERROR } from '../../constants';
import { serverPagesMapper } from '../../helpers';

export const fetchMainPages = () => {
  return async (dispatch: Dispatch<pagesAction>) => {
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
