import * as pagesActionCreators from './pages';
import * as storesActionCreators from './stores';
import * as newsActionCreators from './news';

export const ActionCreators = {
  ...pagesActionCreators,
  ...storesActionCreators,
  ...newsActionCreators
};
