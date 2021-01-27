import Main from './index';
import { Meta, Story } from '@storybook/react';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Basic title',
    description: 'Basic description',
  },
} as Meta;

export const Basic: Story = (args) => <Main {...args} />;
