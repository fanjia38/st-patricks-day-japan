import React from 'react'
import styled from 'styled-components'

export const ParadeContact = ({contact}) => {
  console.log(contact)
  return (
    <List>
      {contact.map((item, index) => (
        <Item key={index}><a href={item.url}>{item.type}</a></Item>
      ))}
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
