import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light',
    argsTypes: {
        variant: {
            control: { radio: true },
            options: []
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
        variant: 'green',
    }
    
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
                width: 'max-content',
                padding: 10
            }}
        >
            <Light variant="red" />
            <Light variant="yellow" />
            <Light variant="green" />
        </div>
    ),   
};

