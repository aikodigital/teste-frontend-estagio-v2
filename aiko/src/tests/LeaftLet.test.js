import React from 'react';
import renderWithRouter from './renderWithRouter';
import MainPage from '../page/MainPage';

describe('full app rendering/navigating', () => {
    it('test if there is a leafLet Map', () => {
      const { getByTestId } = renderWithRouter( <MainPage />);
      const Leaf = getByTestId('LeafMap');
      expect(Leaf).toBeInTheDocument();
    });
});