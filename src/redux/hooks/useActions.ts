import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as MainPagesActionCreators from '../action-creators/main-pages';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(MainPagesActionCreators, dispatch);
};
