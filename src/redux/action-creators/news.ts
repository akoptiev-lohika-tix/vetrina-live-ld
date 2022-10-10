import { Dispatch } from 'react';
import axios from 'axios';

import { newsAction, newsActionsEnum } from '../types';
import { BASE_NEWS_URL } from '../../constants';

type Function = (dispatch: Dispatch<newsAction>) => Promise<void>;

export const fetchNews = (): Function => {
  return async (dispatch: Dispatch<newsAction>): Promise<void> => {
    try {
      dispatch({ type: newsActionsEnum.FETCH_NEWS });

      const response = await axios.get(BASE_NEWS_URL);

      dispatch({ type: newsActionsEnum.FETCH_NEWS_SUCCESS, payload: response.data.results });
    } catch (e: any) {
      dispatch({ type: newsActionsEnum.FETCH_NEWS_ERROR, payload: e.message });
    }
  };
};
