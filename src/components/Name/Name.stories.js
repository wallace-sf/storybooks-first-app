import React from 'react';
import { storiesOf } from '@storybook/react';

import Name from '../Name';

storiesOf('Components', module)
  .addDecorator(story => (
    <div>
      <h1>Examples</h1>
      {story()}
    </div>
  ))
  .add('Name', () => (
    <div>
      <h2>Normal</h2>
      <Name name="Louie Anderson"  />
      <h2>Highlighted</h2>
    </div>
  ))

