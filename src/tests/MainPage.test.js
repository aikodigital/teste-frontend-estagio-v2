import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import MainPage from '../page/MainPage'

describe('full app rendering/navigating', () => {
    it('test if there is a header and the company logo on page', () => {
      const { getByTestId } = renderWithRouter( <MainPage />);
      const header = getByTestId('headerTest');
      const logo = getByTestId('companyLogo');
      expect(header).toBeInTheDocument();
      expect(logo).toBeInTheDocument();
    });

    it('if there is a link to /history page', () => {
      const { getByRole, history } = renderWithRouter( <MainPage />);
      const historyButton = getByRole('link', {
         name: 'Acessar históricos dos equipamentos',
       });
      userEvent.click(historyButton);
      const { pathname } = history.location;
      expect(pathname).toBe('/history');
  });
});