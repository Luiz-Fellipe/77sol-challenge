import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import { SimulationForm } from '.';
import {
  mockSimulationFormValues,
  mockstructureOptions,
} from '../../../tests/helpers/mockData';
import { FIELD_STRUCTURE_AUTOCOMPLETE_TEST_ID } from '../../../tests/helpers/constants';

describe('SimulationForm', () => {
  it('renders the form fields', () => {
    const onSubmit = jest.fn();
    const isLoading = false;

    const { getByLabelText, getByRole } = render(
      <SimulationForm onSubmit={onSubmit} isLoading={isLoading} />
    );

    expect(getByLabelText('CEP')).toBeInTheDocument();
    expect(getByLabelText('Valor da conta de luz')).toBeInTheDocument();
    expect(getByLabelText('Estrutura do Telhado')).toBeInTheDocument();
    expect(getByRole('button', { name: 'Enviar' }));
  });

  it('renders the form fields with defaultValue', () => {
    const onSubmit = jest.fn();
    const isLoading = false;

    const { getByLabelText } = render(
      <SimulationForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        defaultValues={mockSimulationFormValues}
      />
    );

    expect(getByLabelText('CEP')).toHaveAttribute(
      'value',
      mockSimulationFormValues.cep
    );
    expect(getByLabelText('Valor da conta de luz')).toHaveAttribute(
      'value',
      mockSimulationFormValues.valor_conta
    );

    expect(getByLabelText('Estrutura do Telhado')).toHaveAttribute(
      'value',
      mockSimulationFormValues.estrutura.label
    );
  });

  it('change the form fields and submits the form', async () => {
    const onSubmit = jest.fn();
    const isLoading = false;

    const { getByLabelText, getByRole, getByTestId, getAllByRole } = render(
      <SimulationForm onSubmit={onSubmit} isLoading={isLoading} />
    );

    const cepInput = getByLabelText('CEP');
    const valueInput = getByLabelText('Valor da conta de luz');

    fireEvent.change(cepInput, {
      target: { value: mockSimulationFormValues.cep },
    });
    fireEvent.change(valueInput, {
      target: { value: mockSimulationFormValues.valor_conta },
    });

    await waitFor(() => {
      // select element
      const autocomplete = getByTestId(FIELD_STRUCTURE_AUTOCOMPLETE_TEST_ID);

      const input = within(autocomplete).getByLabelText('Estrutura do Telhado');

      autocomplete.click();
      autocomplete.focus();

      fireEvent.change(input, {
        target: { value: mockstructureOptions[0].label },
      });
      fireEvent.click(getAllByRole('option')[0]);
    });

    fireEvent.click(getByRole('button', { name: 'Enviar' }));
    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith({
        cep: mockSimulationFormValues.cep,
        valor_conta: mockSimulationFormValues.valor_conta,
        estrutura: mockstructureOptions[0],
      });
    });
  });

  it('displays error messages for invalid form fields', async () => {
    const onSubmit = jest.fn();
    const isLoading = false;
    const defaultValues = {
      cep: '',
      valor_conta: 'abc',
      estrutura: {
        label: 'Laje',
        value: 'laje',
      },
    };

    const { getByRole } = render(
      <SimulationForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        defaultValues={defaultValues}
      />
    );

    fireEvent.click(getByRole('button', { name: 'Enviar' }));

    await waitFor(() => {
      expect(screen.getByText('Insira um CEP válido.')).toBeInTheDocument();
      expect(screen.getByText('Insira um valor válido.')).toBeInTheDocument();
    });
  });

  it('renders the form with loading ', async () => {
    const onSubmit = jest.fn();
    const isLoading = true;

    const { getByRole } = render(
      <SimulationForm
        onSubmit={onSubmit}
        isLoading={isLoading}
        defaultValues={mockSimulationFormValues}
      />
    );

    expect(getByRole('button', { name: 'Loading...' })).toBeInTheDocument();
  });
});
