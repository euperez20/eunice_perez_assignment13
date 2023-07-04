import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Label from './Label';

storiesOf('Label', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <Label disabled={boolean('Disabled', false)}>
      {text('Text', 'First Name:')}
    </Label>
  ));
