import React from 'react';
import { storiesOf } from '@storybook/react';
import Link from './link';

storiesOf('Link', module)
  .add('default', () => <Link item={''} url={''} />)
