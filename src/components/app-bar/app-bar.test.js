import React from 'react';

import { screen } from '@testing-library/react';

import { renderWithRedux } from '../../../test-utils';
import AppBar from './app-bar';
import { NOTIFICATION_TITLE } from '../../constants';

describe('AppBar', () => {
  it('should have notification section with correct name', () => {
    renderWithRedux(<AppBar />);

    expect(screen.getByRole('notification')).toBeInTheDocument();
    expect(screen.getByRole('notification')).toHaveTextContent(NOTIFICATION_TITLE);
  });
});
