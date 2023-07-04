import React from 'react';
import { Meta, Story } from '@storybook/react';
import HeroImage, { HeroImageProps } from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
} as Meta;

const Template: Story<HeroImageProps> = args => <HeroImage {...args} />;

export const Default = Template.bind({});

Default.args = {
  imageUrl: 'https://via.placeholder.com/1200x400',
  title: 'Welcome to the Website',
  subtitle: 'Discover the latest trends',
};
