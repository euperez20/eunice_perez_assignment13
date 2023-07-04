import React from 'react';
import { Meta, Story } from '@storybook/react';
import Text, { TextProps } from './Text';

export default {
  title: 'Text',
  component: Text,
} as Meta;

const Template: Story<TextProps> = args => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: 'Hello, World!',
  color: '#333',
  fontSize: '16px',
  fontWeight: 'normal',
};
