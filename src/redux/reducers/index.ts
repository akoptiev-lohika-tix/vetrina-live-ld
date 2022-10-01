import { combineReducers } from 'redux';

import { pagesReducer } from './pagesReducer';
import { storesReducer } from './storesReducer';

export const rootReducer = combineReducers({
  pages: pagesReducer,
  stores: storesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
