/* eslint-disable max-len */
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Detail from './Detail';
import oneCharacter from '../fixtures/oneCharacter.json';

const server = setupServer(
  rest.get('https://last-airbender-api.herokuapp.com/api/v1/characters/', (req, res, ctx) => {
    return res(ctx.json(oneCharacter));
  })
);

describe('Detail container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a loading screen then a character', async() => {
    render(<MemoryRouter>
      <Detail 
        match={{ params: { id: '5cf5679a915ecad153ab68d1' } }}  />
    </MemoryRouter>);

    screen.getByText('Loading...');

    const figCaption = await screen.findByTestId('name');

    return waitFor(() => {
      expect(figCaption).not.toBeEmptyDOMElement();
    });
  });
});
