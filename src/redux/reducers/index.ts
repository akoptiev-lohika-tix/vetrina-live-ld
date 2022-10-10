import { combineReducers } from 'redux';

import { pagesReducer } from './pagesReducer';
import { storesReducer } from './storesReducer';
import { newsReducer } from './newsReducer';

export const rootReducer = combineReducers({
  pages: pagesReducer,
  stores: storesReducer,
  news: newsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
