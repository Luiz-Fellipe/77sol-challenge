import { StoryObj, Meta } from '@storybook/react';
import { SimulationForm, FormProps } from '@77solchallenge/solar-simulator-cli';

export default {
  title: 'forms/Simulation Form',
  component: SimulationForm,
  tags: ['autodocs'],
  argTypes: {
    isLoading: {
      control: { type: 'boolean' },
      description: 'changes the state of the form to loading',
      defaultValue: false,
    },
    defaultValues: { description: 'default values for the form inputs' },
    onSubmit: {
      action: 'click',
      description:
        'callback fired when the user clicks submit and the data is correct.',
    },
  },
  args: {
    isLoading: false,
    defaultValues: undefined,
  },
} as Meta;

export const simulationForm: StoryObj<FormProps> = {};

export const DefaultValue: StoryObj<FormProps> = {
  args: {
    defaultValues: {
      cep: '74486-470',
      estrutura: {
        label: 'Cerâmico',
        value: 'ceramico',
      },
      valor_conta: '400',
    },
  },
};

export const Loading: StoryObj<FormProps> = {
  args: {
    isLoading: true,
  },
};
