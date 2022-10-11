import { Dispatch } from 'react';
import axios from 'axios';

import { storesAction, storesActionsEnum } from '../types';
import { BASE_DATA_URL, LOAD_DATA_ERROR } from '../../constants';
import { serverStoresMapper } from '../../helpers';

type Function = (dispatch: Dispatch<storesAction>) => Promise<void>;

export const fetchStores = (): Function => {
  return async (dispatch: Dispatch<storesAction>) => {
    try {
      dispatch({ type: storesActionsEnum.FETCH_STORES });
      const response = await axios.get(BASE_DATA_URL + '/stores.json');

      const mappedResponse = serverStoresMapper(response.data);

      dispatch({ type: storesActionsEnum.FETCH_STORES_SUCCESS, payload: mappedResponse });
    } catch (e: any) {
      dispatch({ type: storesActionsEnum.FETCH_STORES_ERROR, payload: LOAD_DATA_ERROR });
    }
  };
};

export const fetchActiveStore = (id: number): Function => {
  return async (dispatch: Dispatch<storesAction>) => {
    try {
      dispatch({ type: storesActionsEnum.FETCH_ACTIVE_STORE });

      const response = await axios.get(`${BASE_DATA_URL}/stores/${id}.json`);

      dispatch({ type: storesActionsEnum.FETCH_ACTIVE_STORE_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: storesActionsEnum.FETCH_ACTIVE_STORE_ERROR, payload: LOAD_DATA_ERROR });
    }
  };
};
