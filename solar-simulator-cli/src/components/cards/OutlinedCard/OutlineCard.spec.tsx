import { render } from '@testing-library/react';
import { OutlinedCard } from '.';
import { OUTLINE_CARD_TEST_ID } from '../../../tests/helpers/constants';
import { mockSimulationData } from '../../../tests/helpers/mockData';

describe('OutlinedCard', () => {
  test('Outline Card is rendered correctly', () => {
    const title = 'Economia';
    const value = mockSimulationData.economy;

    const { getByTestId } = render(
      <OutlinedCard title={title} value={value} />
    );

    expect(getByTestId(OUTLINE_CARD_TEST_ID)).toBeInTheDocument();
  });

  test('renders the title and value correctly', () => {
    const title = 'Economia';
    const value = mockSimulationData.economy;

    const { getByText } = render(<OutlinedCard title={title} value={value} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(value)).toBeInTheDocument();
  });
});
