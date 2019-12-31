import React from 'react'
import styled from 'styled-components'

const ContactList = (props) => {
  return (
    <List>
      props.contacts.map((item, index) => {
        <Item key={index}><a href={item.url}>{item.name}</a></Item>
      })
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
