import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Detail from './Detail';

describe('Detail container', () => {
  it('displays a loading screen then a character', async () => {
    render(<Detail />);

    screen.getByText('Loading...');

    const figCaption = await screen.findByTestId('name');

    return waitFor(() => {
      expect(figCaption).not.toBeEmptyDOMElement();
    });
  });
});
