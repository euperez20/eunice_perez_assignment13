import React from 'react';
import { Meta, Story } from '@storybook/react';
import RadioButton, { RadioButtonProps } from './Radio_button';

export default {
  title: 'Radio Button',
  component: RadioButton,
} as Meta;

const Template: Story<RadioButtonProps> = args => <RadioButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ],
  selectedValue: 'option1',
  disabled: false,
};
