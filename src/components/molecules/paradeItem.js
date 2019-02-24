import React from 'react'
import styled from 'styled-components'

import ParadeTitle from '../atoms/paradeTitle'
import Schedule from '../atoms/schedule'
import Prefecture from '../atoms/prefecture'
import ContactList from './contactItem'

const ParadeItem = (items) => {
  return items.map(({id, name, prefecture, start, end, description, contact}) => {
    return (
      <Item key={id}>
        <ParadeTitle title={name} />
        <Schedule start={start} end={end} />
        <Prefecture place={prefecture}></Prefecture>
        <p>{description}</p>
        <ContactList items={contact} />
      </Item>
    )
  })
}

const Item = styled.div`
  padding: 24px 8px;
  flex-basis: 50%;

  &:nth-child(odd) {
    padding-right: 60px;
  }
  &:nth-child(even) {
    padding-left: 60px;
  }
`

export default ParadeItem
