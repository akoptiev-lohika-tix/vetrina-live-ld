import { combineReducers } from 'redux';

import { pagesReducer } from './pagesReducer';

export const rootReducer = combineReducers({
  pages: pagesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
