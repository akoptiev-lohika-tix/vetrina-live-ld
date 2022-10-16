import React from 'react';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';

import { render } from '@testing-library/react';

import { rootReducer } from './src/redux/reducers';

const renderConnected = (
  ui,
  { initialState = {}, store = createStore(rootReducer, initialState), ...renderOptions } = {}
) => {
  // eslint-disable-next-line react/prop-types
  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
