import { StoryObj, Meta } from '@storybook/react';
import {
  OutlinedCard,
  OutlinedCardProps,
} from '@77solchallenge/solar-simulator-cli';

export default {
  title: 'cards/Outlined Card',
  component: OutlinedCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: { type: 'text' }, description: 'Card title' },
    value: { control: { type: 'text' }, description: 'Card value' },
  },
  args: {
    title: 'Card Title',
    value: 'Card description',
  },
} as Meta;

export const outlinedCard: StoryObj<OutlinedCardProps> = {};
