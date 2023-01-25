import React from 'react';
import testData from '../../cypress/mocks/testData';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testes do App', () => {
  beforeEach(() => global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData)
  }))

  it('Testando inputs', () => {
    render(<App />);

    const nameFilter = screen.getByTestId('name-filter');
    const columnSelects = screen.getByTestId('column-filter');
    const comparisonSelects = screen.getByTestId('comparison-filter');
    const valueSelects = screen.getByTestId('value-filter');

    expect(nameFilter).toBeInTheDocument();
    expect(columnSelects).toBeInTheDocument();
    expect(columnSelects.length).toBe(5);
    expect(comparisonSelects).toBeInTheDocument();
    expect(comparisonSelects.length).toBe(3);
    expect(valueSelects).toBeInTheDocument();
  });

  it('testando filtro de busca por nome', () => {
    render(<App />);

    const nameFilter = screen.getByTestId('name-filter');
    userEvent.type(nameFilter, 'tato');
  });

  it('testando filtro de colunas', () => {
    render(<App />);

    const columnSelects = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects, 'diameter');
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);
  });

  it('testando filtro de valores e retirando filtro', () => {
    render(<App />);

    const columnSelects = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects, 'diameter');
    const comparisonSelects = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects, 'maior que');
    const valueSelects = screen.getByTestId('value-filter');
    userEvent.type(valueSelects, '10000');
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);

    const columnSelects2 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects2, 'population');
    const comparisonSelects2 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects2, 'menor que');
    const valueSelects2 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects2, '2000000');
    const button2 = screen.getByTestId('button-filter');
    userEvent.click(button2);
    
    const removeButton = screen.getAllByTestId('filter');
    userEvent.click(removeButton[1]);
    expect(removeButton.length).toBe(2)

    const removeAllButton = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAllButton);
  });

  it('testando filtros e botoes (maior que)', () => {
    render(<App />);

    const columnSelects = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects, 'diameter');
    const comparisonSelects = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects, 'maior que');
    const valueSelects = screen.getByTestId('value-filter');
    userEvent.type(valueSelects, '10000');
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);

    const columnSelects2 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects2, 'population');
    const comparisonSelects2 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects2, 'menor que');
    const valueSelects2 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects2, '2000000');
    const button2 = screen.getByTestId('button-filter');
    userEvent.click(button2);

    const columnSelects3 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects3, 'orbital_period');
    const comparisonSelects3 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects3, 'maior que');
    const valueSelects3 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects3, '549');
    const button3 = screen.getByTestId('button-filter');
    userEvent.click(button3);

    const columnSelects4 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects4, 'surface_water');
    const comparisonSelects4 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects4, 'menor que');
    const valueSelects4 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects4, '10');
    const button4 = screen.getByTestId('button-filter');
    userEvent.click(button4);

    const columnSelects5 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects5, 'rotation_period');
    const comparisonSelects5 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects5, 'maior que');
    const valueSelects5 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects5, '23');
    const button5 = screen.getByTestId('button-filter');
    userEvent.click(button5);
    
    const removeButton = screen.getAllByTestId('filter');
    userEvent.click(removeButton[1]);
    expect(removeButton.length).toBe(5)

    const removeAllButton = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAllButton);
  });

  it('testando filtros e botoes (menor que)', () => {
    render(<App />);

    const columnSelects = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects, 'diameter');
    const comparisonSelects = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects, 'menor que');
    const valueSelects = screen.getByTestId('value-filter');
    userEvent.type(valueSelects, '10000');
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);

    const columnSelects2 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects2, 'population');
    const comparisonSelects2 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects2, 'maior que');
    const valueSelects2 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects2, '2000000');
    const button2 = screen.getByTestId('button-filter');
    userEvent.click(button2);

    const columnSelects3 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects3, 'orbital_period');
    const comparisonSelects3 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects3, 'menor que');
    const valueSelects3 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects3, '549');
    const button3 = screen.getByTestId('button-filter');
    userEvent.click(button3);

    const columnSelects4 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects4, 'surface_water');
    const comparisonSelects4 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects4, 'maior que');
    const valueSelects4 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects4, '10');
    const button4 = screen.getByTestId('button-filter');
    userEvent.click(button4);

    const columnSelects5 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects5, 'rotation_period');
    const comparisonSelects5 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects5, 'menor que');
    const valueSelects5 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects5, '23');
    const button5 = screen.getByTestId('button-filter');
    userEvent.click(button5);
    
    const removeButton = screen.getAllByText(/x/i);
    expect(removeButton.length).toBe(5)
    userEvent.click(removeButton[1]);

    const removeAllButton = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAllButton);
  });

  it('testando filtros e botoes (igual a)', () => {
    render(<App />);

    const columnSelects = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects, 'diameter');
    const comparisonSelects = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects, 'igual a');
    const valueSelects = screen.getByTestId('value-filter');
    userEvent.type(valueSelects, '10000');
    const button = screen.getByTestId('button-filter');
    userEvent.click(button);

    const columnSelects2 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects2, 'population');
    const comparisonSelects2 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects2, 'igual a');
    const valueSelects2 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects2, '2000000');
    const button2 = screen.getByTestId('button-filter');
    userEvent.click(button2);

    const columnSelects3 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects3, 'orbital_period');
    const comparisonSelects3 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects3, 'igual a');
    const valueSelects3 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects3, '549');
    const button3 = screen.getByTestId('button-filter');
    userEvent.click(button3);

    const columnSelects4 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects4, 'surface_water');
    const comparisonSelects4 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects4, 'igual a');
    const valueSelects4 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects4, '10');
    const button4 = screen.getByTestId('button-filter');
    userEvent.click(button4);

    const columnSelects5 = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnSelects5, 'rotation_period');
    const comparisonSelects5 = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonSelects5, 'igual a');
    const valueSelects5 = screen.getByTestId('value-filter');
    userEvent.type(valueSelects5, '23');
    const button5 = screen.getByTestId('button-filter');
    userEvent.click(button5);
    
    const removeButton = screen.getAllByTestId('filter');
    expect(removeButton.length).toBe(5)
    userEvent.click(removeButton[4]);

    const removeAllButton = screen.getByTestId('button-remove-filters');
    userEvent.click(removeAllButton);
  });
});
