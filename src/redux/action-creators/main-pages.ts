import { Dispatch } from 'react';
import axios from 'axios';

import { MainPagesAction, MainPagesActionsEnum } from '../types';
import { BASE_DATA_URL, LOAD_DATA_ERROR } from '../../constants';
import { serverDataMapper } from '../../helpers';

export const fetchMainPages = () => {
  return async (dispatch: Dispatch<MainPagesAction>) => {
    try {
      dispatch({ type: MainPagesActionsEnum.FETCH_MAIN_PAGES });

      const response = await axios.get(BASE_DATA_URL + '/mainPages.json');

      const mappedResponse = serverDataMapper(response.data);

      dispatch({ type: MainPagesActionsEnum.FETCH_MAIN_PAGES_SUCCESS, payload: mappedResponse });
    } catch (e) {
      dispatch({ type: MainPagesActionsEnum.FETCH_MAIN_PAGES_ERROR, payload: LOAD_DATA_ERROR });
    }
  };
};
