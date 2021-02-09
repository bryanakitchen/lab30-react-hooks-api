import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import AllCharacters from './AllCharacters';

describe('AllCharacters container', () => {
  it('displays a loading screen then a list of characters', async () => {
    render(<AllCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByTestId('characters');

    return waitFor(() => {
      expect(ul).not.toBeEmptyDOMElement();
    });
  });
});
