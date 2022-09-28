import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as pagesActionCreators from '../action-creators/pages';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(pagesActionCreators, dispatch);
};
