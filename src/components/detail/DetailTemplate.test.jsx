/* eslint-disable max-len */
import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import DetailTemplate from './DetailTemplate';

describe('DetailTemplate component', () => {
  afterEach(() => cleanup());
  it('renders DetailTemplate', () => {
    const { asFragment } = render(<DetailTemplate
      name="Baatar Jr."
      photoUrl="https://vignette.wikia.nocookie.net/avatar/images/4/45/Baatar_Jr..png/revision/latest?cb=20150409193510"
    />);    

    return waitFor(() => {expect(asFragment()).toMatchSnapshot()});
  });
});

// return waitFor(() => {
//   screen.getByText('Baatar Jr.');
// });
