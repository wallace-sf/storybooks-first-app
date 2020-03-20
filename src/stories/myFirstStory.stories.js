import React from 'react';
import { Button } from '@storybook/react/demo';

export default { title: 'MyFirstStory' };

export const withText = () => <Button>Hello Button</Button>;

export const WithEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
    😀 😎 👍 💯
    </span>
  </Button>
);

