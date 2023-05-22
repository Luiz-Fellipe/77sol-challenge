import { render, within } from '@testing-library/react';
import { SimulationResult } from '.';
import { mockSimulationData } from '../../../tests/helpers/mockData';

import {
  INSTALLMENT_TABLE_TEST_ID,
  OUTLINE_CARD_TEST_ID,
  OUTLINE_CARD_TITLE_TEST_ID,
  OUTLINE_CARD_VALUE_TEST_ID,
} from '../../../tests/helpers/constants';

describe('SimulationResult', () => {
  it('renders the economy, potential, installation price, and installment', () => {
    const { getAllByTestId, getByTestId } = render(
      <SimulationResult
        economy={mockSimulationData.economy}
        potential={mockSimulationData.potential}
        installationPrice={mockSimulationData.installationPrice}
        installment={mockSimulationData.installment}
      />
    );

    const cards = getAllByTestId(OUTLINE_CARD_TEST_ID);

    expect(
      within(cards[0]).getByTestId(OUTLINE_CARD_TITLE_TEST_ID)
    ).toHaveTextContent('Economia');

    expect(
      within(cards[0]).getByTestId(OUTLINE_CARD_VALUE_TEST_ID)
    ).toHaveTextContent('R$ 96.000,00');

    expect(
      within(cards[1]).getByTestId(OUTLINE_CARD_TITLE_TEST_ID)
    ).toHaveTextContent('Potencial');

    expect(
      within(cards[1]).getByTestId(OUTLINE_CARD_VALUE_TEST_ID)
    ).toHaveTextContent(mockSimulationData.potential);

    expect(
      within(cards[2]).getByTestId(OUTLINE_CARD_TITLE_TEST_ID)
    ).toHaveTextContent('Valor Instalação');

    expect(
      within(cards[2]).getByTestId(OUTLINE_CARD_VALUE_TEST_ID)
    ).toHaveTextContent('R$ 18.935,02');

    expect(getByTestId(INSTALLMENT_TABLE_TEST_ID)).toBeInTheDocument();
  });
});
