import React from 'react'
import styled from 'styled-components'

import Link from '../atoms/Link'

const ContactItem = (items) => {
  return items.map(({type, url}, index) => {
    return (
      <Item key={index}>
        <Link
          text={type}
          url={url}
        />
      </Item>
    )
  })
}

const ContactList = (props) => {
  return (
    <List>
      {ContactItem(props.items)}
    </List>
  )
}

const List = styled.ul`
  list-style-type: none;
  display: flex;
`
const Item = styled.li`
  padding-left: 15px;
`

export default ContactList
