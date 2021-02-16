import { Story, Meta } from '@storybook/react';
import Heading, { HeadingProps } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: Story<HeadingProps> = (args) => (
  <Heading {...args}>{args.children}</Heading>
);

Default.args = {
  children: 'Most Popular',
  color: 'black',
};
