import React from 'react';
import { Meta, Story } from '@storybook/react';
import Label, { LabelProps } from './Label';

export default {
  title: 'Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = args => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  labelText: 'First Name:',
  disabled: false,
};
