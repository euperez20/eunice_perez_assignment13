import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Light> = {
    component: Light,
    title: 'Light'
}

export default meta;

type Story = StoryObj<typeof meta>;

const Base: Story = {
    args:{
        
    }
}

