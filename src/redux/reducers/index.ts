import { combineReducers } from 'redux';

import { mainPagesReducer } from './mainPagesReducer';

export const rootReducer = combineReducers({
  mainPages: mainPagesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
