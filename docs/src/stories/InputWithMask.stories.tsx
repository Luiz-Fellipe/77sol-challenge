import { StoryObj, Meta } from '@storybook/react';
import {
  InputWithMask,
  InputWithMaskProps,
} from '@77solchallenge/solar-simulator-cli';

export default {
  title: 'Inputs/Input With Mask',
  component: InputWithMask,
  tags: ['autodocs'],
  argTypes: {
    label: { control: { type: 'text' }, description: 'Input label' },
    mask: {
      control: { type: 'text' },
      description:
        'Defines the mask that will be used in the input. You can see more details here : <a target="_blank" href="https://github.com/sanniassin/react-input-mask">React Input Mask</a>',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Input placeholder',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'define if input is disabled',
    },
    error: {
      control: { type: 'boolean' },
      description: 'define if input has error',
    },
    helperText: {
      control: { type: 'text' },
      description: 'defines a message below the input ',
    },
  },
  args: {
    placeholder: 'Placeholder',
    mask: '99999-999',
    error: false,
    disabled: false,
    label: '',
    helperText: '',
  },
  parameters: {
    docs: {
      source: {
        state: 'open',
      },
    },
  },
} as Meta;

export const Enabled: StoryObj<InputWithMaskProps> = {};

export const Disabled: StoryObj<InputWithMaskProps> = {
  args: {
    disabled: true,
  },
};

export const WithError: StoryObj<InputWithMaskProps> = {
  args: {
    error: true,
    helperText: 'O campo é obrigatório.',
  },
};

export const WithLabel: StoryObj<InputWithMaskProps> = {
  args: {
    label: 'Label',
  },
};
