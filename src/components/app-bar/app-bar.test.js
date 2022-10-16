import React from 'react';

import { screen } from '@testing-library/react';

import renderConnected from '../../../test-utils';
import AppBar from './app-bar';
import { NOTIFICATION_TITLE } from '../../constants';

const initialState = {
  pages: {
    activePageName: 'Dashboard'
  }
};

describe('AppBar testing', () => {
  beforeEach(() => {
    renderConnected(<AppBar />, { initialState });
  });

  it('should have correct active page name', () => {
    expect(screen.getByTestId('active-page')).toHaveTextContent(initialState.pages.activePageName);
  });

  it('should have notification section with correct name', () => {
    expect(screen.getByTestId('notification')).toHaveTextContent(NOTIFICATION_TITLE);
  });
});
