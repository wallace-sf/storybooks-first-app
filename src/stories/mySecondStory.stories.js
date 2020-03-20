import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from '@storybook/react/demo';

import Welcome from './Welcome';

storiesOf('Welcome', module)
  .add('My Second Story', () => (
    <Welcome />
  ))
  .add('Button', () => (
    <Button onClick={action('clicked', 'test')}>Hello Button</Button>
  ))
  .add('with link', () => (
    <Button onClick={linkTo('Components', 'Name')}>Go to Name</Button>
  ));