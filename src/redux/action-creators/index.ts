import * as pagesActionCreators from './pages';
import * as storesActionCreators from './stores';

export const ActionCreators = {
  ...pagesActionCreators,
  ...storesActionCreators
};
