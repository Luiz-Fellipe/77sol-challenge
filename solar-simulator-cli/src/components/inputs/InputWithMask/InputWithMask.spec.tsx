import { render, fireEvent } from '@testing-library/react';
import { InputWithMask } from '../InputWithMask';
import { VALID_CEP_MASK } from '../../../tests/helpers/constants';
import { mockSimulationFormValues } from '../../../tests/helpers/mockData';

describe('InputWithMask', () => {
  it('renders the component with mask and handles value changes', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <InputWithMask
        label="CEP"
        mask={VALID_CEP_MASK}
        onChange={onChangeMock}
      />
    );

    const input = getByLabelText('CEP');

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: VALID_CEP_MASK } });

    expect(input).toHaveAttribute('value', VALID_CEP_MASK);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(VALID_CEP_MASK);
  });

  it('renders the component with default value and handles value changes', () => {
    const defaultValue = mockSimulationFormValues.cep;
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <InputWithMask
        label="CEP"
        mask={VALID_CEP_MASK}
        defaultValue={defaultValue}
        onChange={onChangeMock}
      />
    );

    const input = getByLabelText('CEP');

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('value', defaultValue);

    fireEvent.change(input, { target: { value: '73375-560' } });

    expect(input).toHaveAttribute('value', '73375-560');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith('73375-560');
  });

  it('renders the disabled component', () => {
    const onChangeMock = jest.fn();

    const { getByLabelText } = render(
      <InputWithMask
        label="CEP"
        mask={VALID_CEP_MASK}
        disabled
        onChange={onChangeMock}
      />
    );

    const input = getByLabelText('CEP');

    expect(input).toBeInTheDocument();
    expect(input).toBeDisabled();
  });
});
