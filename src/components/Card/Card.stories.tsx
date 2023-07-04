import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardProps } from './Card';

export default {
  title: 'Card',
  component: Card,
} as Meta;

const Template: Story<CardProps> = args => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  title: 'Card Title',
  description: 'This is a card component',
  imageSrc: 'https://via.placeholder.com/400x200',
};
