import React from 'react';

import { screen } from '@testing-library/react';

import NavigationSelect from './navigation-select';
import { NAV_SELECT_LABEL } from '../../constants';
import { renderWithRedux } from '../../../test-utils';

describe('Select', () => {
  it('Select label should be inside and has correct text', () => {
    renderWithRedux(<NavigationSelect />);

    expect(screen.getByText(NAV_SELECT_LABEL)).toBeInTheDocument();
  });
});
