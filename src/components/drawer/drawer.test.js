import React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from './drawer';

const page = {
  id: 1,
  name: 'dashboard',
  displayName: 'Dashboard',
  path: '/dashboard',
  iconName: 'Dashboard',
  subPages: null,
  hasBadge: false
};

describe('Drawer', () => {
  it('should have menu icon button', () => {
    render(<Drawer pages={[page]} />);
    screen.debug();
    // expect(screen);
  });
});
