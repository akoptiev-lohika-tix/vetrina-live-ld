import React from 'react';

import { screen } from '@testing-library/react';

import renderConnected from '../../../test-utils';

import NavListItem from './nav-list-item';

const page = {
  id: 1,
  name: 'dashboard',
  displayName: 'Dashboard',
  path: '/dashboard',
  iconName: 'Dashboard',
  subPages: null,
  hasBadge: false
};

const pageWithBadge = {
  id: 1,
  name: 'dashboard',
  displayName: 'Dashboard',
  path: '/dashboard',
  iconName: 'Dashboard',
  subPages: null,
  hasBadge: true
};

test('NavListItem should have correct text', () => {
  renderConnected(<NavListItem page={page} open={true} />);

  expect(screen.getByTestId('text')).toHaveTextContent(page.displayName);
});

test('NavListItem should not have text when drawer closed', () => {
  renderConnected(<NavListItem page={page} open={false} />);

  expect(screen.queryByTestId('text')).not.toBeInTheDocument();
});

test('NavListItem should not badge when it is in page', () => {
  renderConnected(<NavListItem page={pageWithBadge} open={true} />);

  expect(screen.getByTestId('badge')).toBeInTheDocument();
});
