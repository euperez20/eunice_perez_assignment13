import React from 'react';
import { Meta, Story } from '@storybook/react';
import Table, { TableProps } from './Table';

export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<TableProps> = args => <Table {...args} />;

export const Default = Template.bind({});

Default.args = {
  headers: ['Name', 'Age', 'City'],
  data: [
    ['John Doe', 25, 'New York'],
    ['Jane Smith', 30, 'London'],
    ['Michael Johnson', 40, 'Los Angeles'],
  ],
};

export const WithFooter = Template.bind({});

WithFooter.args = {
  headers: ['Name', 'Age', 'City'],
  data: [
    ['John Doe', 25, 'New York'],
    ['Jane Smith', 30, 'London'],
    ['Michael Johnson', 40, 'Los Angeles'],
  ],
  footer: <strong>Total: 3 users</strong>,
};
