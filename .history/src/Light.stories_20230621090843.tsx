import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light'
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    
};

export const Yellow: Story = {
    args:{
        variant: 'yellow'
        
    },
};

export const Red: Story = {
    args:{
        variant: 'red'
        
    },
};

export const Another: Story = {
    args: {
        variant: 'red'
    },
    render: (args) => <Light {...args} />,
};

export const Grouped: Story = {
    render: (args) => (
    <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            border: '1px solid black',
            width
        }}
    >
        <Light variant="red" />
        <Light variant="yellow" />
        <Light variant="green" />
    </div>),   
};
