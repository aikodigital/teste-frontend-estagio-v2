import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import History from '../page/History'

describe('full app rendering/navigating', () => {
    it('test if there are options inside select', () => {
      const { getByLabelText, getByText } = renderWithRouter( <History />);
      const select = getByLabelText('Escolha o filtro desejado');
      expect(select).toBeInTheDocument();
      userEvent.selectOptions(getByLabelText('Escolha o filtro desejado'), '<value>');
      expect((getByText('Equipamentos')).selected).toBeTruthy();
      expect((getByText('Possíveis status do equipamento')).selected).toBeFalsy();
    });
});