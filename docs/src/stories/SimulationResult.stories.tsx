import { StoryObj, Meta } from '@storybook/react';
import {
  SimulationResult,
  ResultProps,
} from '@77solchallenge/solar-simulator-cli';

export default {
  title: 'templates/Simulation Result',
  component: SimulationResult,
  tags: ['autodocs'],
  argTypes: {
    economy: {
      control: { type: 'number' },
      description: 'the value of the economy',
    },
    potential: {
      control: { type: 'text' },
      description: 'the value of the power',
    },
    installationPrice: {
      control: { type: 'number' },
      description: 'the installation fee',
    },
    installment: { description: 'array of installment to be rendered.' },
  },
  args: {
    economy: 96000,
    potential: 'MARAVILHOSO',
    installationPrice: 18935.02034,
    installment: [
      {
        parcelas: 1,
        taxa_minina: 0,
        taxa_maxima: 3.5,
        valor_minimo: 18935.020340866715,
        valor_maximo: 20828.522374953387,
      },
      {
        parcelas: 24,
        taxa_minina: 0.79,
        taxa_maxima: 3.5,
        valor_minimo: 869.2175970507947,
        valor_maximo: 1179.137307661981,
      },
      {
        parcelas: 36,
        taxa_minina: 0.99,
        taxa_maxima: 3.5,
        valor_minimo: 627.8289353992144,
        valor_maximo: 933.1966247964241,
      },
      {
        parcelas: 48,
        taxa_minina: 0.99,
        taxa_maxima: 3.5,
        valor_minimo: 497.51680759681216,
        valor_maximo: 820.0086635882584,
      },
      {
        parcelas: 60,
        taxa_minina: 1.08,
        taxa_maxima: 3.5,
        valor_minimo: 430.4422792340925,
        valor_maximo: 759.0788601356417,
      },
    ],
  },
} as Meta;

export const simulationResult: StoryObj<ResultProps> = {};
