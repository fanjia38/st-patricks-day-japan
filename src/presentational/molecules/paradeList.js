import React from 'react'
import styled from 'styled-components'

import ParadeTitle from '../atoms/paradeTitle'
import Schedule from './schedule'
import ContactList from './contactList'

const ParadeItem = (items) => {
  return items.map(({id, name, prefecture, start, end, description, contact}) => {
    return (
      <li key={id}>
        <ParadeTitle
          title={name}
        />
        <Schedule
          start={start}
          end={end}
        />
        <p>{prefecture}</p>
        <p>{description}</p>
        <ContactList items={contact} />
      </li>
    )
  })
}

const ParadeList = (props) => {
  return (
    <List>
      {ParadeItem(props.items)}
    </List>
  )
}

const List = styled.ul`
  list-style-type: none;
`

export default ParadeList
