import { render, within } from '@testing-library/react';
import { InstallmentTable } from '.';
import { mockSimulationData } from '../../../tests/helpers/mockData';

import {
  INSTALLMENT_TABLE_CELL_MAX_FEE_TEST_ID,
  INSTALLMENT_TABLE_CELL_MIN_FEE_TEST_ID,
  INSTALLMENT_TABLE_CELL_QTD_INSTALLMENT_TEST_ID,
  INSTALLMENT_TABLE_ROW_TEST_ID,
  INSTALLMENT_TABLE_TEST_ID,
} from '../../../tests/helpers/constants';

describe('InstallmentTable', () => {
  beforeAll(() => {
    process.env = Object.assign(process.env, {
      NODE_ICU_DATA: 'node_modules/full-icu',
    });
  });
  it('renders the component ', () => {
    const installmentData = mockSimulationData.installment;

    const { getByTestId, getAllByTestId } = render(
      <InstallmentTable installment={installmentData} />
    );

    const installmentTable = getByTestId(INSTALLMENT_TABLE_TEST_ID);

    expect(installmentTable).toBeInTheDocument();

    const rows = getAllByTestId(INSTALLMENT_TABLE_ROW_TEST_ID);

    expect(rows.length).toBe(installmentData.length);
  });

  it('renders the component with correct data', () => {
    const installmentData = mockSimulationData.installment;

    const { getByTestId, getAllByTestId } = render(
      <InstallmentTable installment={installmentData} />
    );

    const installmentTable = getByTestId(INSTALLMENT_TABLE_TEST_ID);

    expect(installmentTable).toBeInTheDocument();

    const rows = getAllByTestId(INSTALLMENT_TABLE_ROW_TEST_ID);

    rows.forEach((row, index) => {
      expect(
        within(row).getByTestId(INSTALLMENT_TABLE_CELL_QTD_INSTALLMENT_TEST_ID)
      ).toHaveTextContent(`${installmentData[index].parcelas}`);

      expect(
        within(row).getByTestId(INSTALLMENT_TABLE_CELL_MIN_FEE_TEST_ID)
      ).toHaveTextContent(`${installmentData[index].taxa_minina} %`);

      expect(
        within(row).getByTestId(INSTALLMENT_TABLE_CELL_MAX_FEE_TEST_ID)
      ).toHaveTextContent(`${installmentData[index].taxa_maxima} %`);
    });
  });
});
