import React from 'react';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { VisitorsContentSection } from './visitors-content-section';
import renderConnected from '../../../../test-utils';
import { SupportContentSection } from './support-content-section';
import { SUPPORT_CARD_BUTTON_TEXT } from '../../../constants';

const initialState = {
  stores: {
    activeStore: {
      data: {
        visitors: 2
      }
    }
  }
};

describe('Visitors content with state', () => {
  beforeEach(() => {
    renderConnected(<VisitorsContentSection />, { initialState });
  });

  it('should have correct number of visitors', () => {
    expect(screen.getByTestId('visitors')).toHaveTextContent(
      initialState.stores.activeStore.data.visitors
    );
  });
});

describe('Visitors content without state', () => {
  beforeEach(() => {
    renderConnected(<VisitorsContentSection />);
  });

  it('should not have a visitors section without store', () => {
    expect(screen.getByTestId('visitors')).toHaveTextContent('');
  });
});

describe('Support content without state', () => {
  beforeEach(() => {
    render(<SupportContentSection />, { wrapper: MemoryRouter });
  });

  it('should have button', () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should have correct button text', () => {
    expect(screen.getByRole('button')).toHaveTextContent(SUPPORT_CARD_BUTTON_TEXT);
  });
});
