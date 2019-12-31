import React from 'react';
import { storiesOf } from '@storybook/react';
import ContactList from './contactList';

storiesOf('ContactList', module)
  .add('default', () => <ContactList contacts={[{url: 'a', name:'a'}]} />)
