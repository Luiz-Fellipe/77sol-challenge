import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { Simulator } from '.';
import {
  mockUseGetSimulationResult,
  mockResponseData,
} from '../../tests/mocks/useGetSimulationResult';
import {
  LOADING_SKELETON_TEST_ID,
  SIMULATION_CONTAINER_TEST_ID,
  SIMULATION_RESULT_CONTAINER_TEST_ID,
} from '../../tests/helpers/constants';

describe('Simulator', () => {
  it('renders the page correctly', () => {
    mockUseGetSimulationResult.mockReturnValueOnce({
      data: null,
      isError: false,
      isLoading: false,
      handleGetSimulationResult: jest.fn(),
    });

    const { getByText, getByTestId } = render(<Simulator />);

    // Assert that the simulation result is rendered
    expect(getByText('Simulador Solar')).toBeInTheDocument();
    expect(getByText('Faça a sua simulação solar')).toBeInTheDocument();
    expect(getByTestId(SIMULATION_CONTAINER_TEST_ID)).toBeInTheDocument();
  });

  it('displays a correct data', () => {
    // Mock the useGetSimulationResult hook to indicate loading
    mockUseGetSimulationResult.mockReturnValueOnce({
      data: mockResponseData,
      isError: false,
      isLoading: false,
      handleGetSimulationResult: jest.fn(),
    });

    const { getByTestId } = render(<Simulator />);

    // Assert that the loading skeleton is displayed
    expect(
      getByTestId(SIMULATION_RESULT_CONTAINER_TEST_ID)
    ).toBeInTheDocument();
  });

  it('displays a loading skeleton when isLoading is true', () => {
    // Mock the useGetSimulationResult hook to indicate loading
    mockUseGetSimulationResult.mockReturnValueOnce({
      data: null,
      isError: false,
      isLoading: true,
      handleGetSimulationResult: jest.fn(),
    });

    const { getAllByTestId } = render(<Simulator />);

    // Assert that the loading skeleton is displayed
    expect(getAllByTestId(LOADING_SKELETON_TEST_ID)).toHaveLength(4);
  });

  it('displays an error message when isError is true', () => {
    mockUseGetSimulationResult.mockReturnValueOnce({
      data: null,
      isError: true,
      isLoading: false,
      handleGetSimulationResult: jest.fn(),
    });

    const { getByText } = render(<Simulator />);

    // Assert that the error message is displayed
    expect(
      getByText('Erro ao realizar simulação, por favor tente novamente.')
    ).toBeInTheDocument();
  });
});
