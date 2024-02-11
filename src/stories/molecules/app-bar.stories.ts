import type {Meta, StoryObj} from '@storybook/react';

import {AppBarComponent} from '../../molecules';

export default {
  title: 'molecules/AppBarComponent',
  component: AppBarComponent,
  argTypes: {
    bgColor: {control: 'text'},
    badgeColor: {control: 'text'}
  }
} satisfies Meta<typeof AppBarComponent>;

type Story = StoryObj<typeof AppBarComponent>;

export const Primary: Story = {
  args: {
    title: 'AppBar',
    bgColor: 'primary',
    newEmails: 3,
    notifications: 3,
    badgeColor: 'error',
  },
}
