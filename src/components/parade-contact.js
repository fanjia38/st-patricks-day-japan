import React from 'react'
import styled from 'styled-components'
import { Home, Twitter, Facebook, Instagram } from './icon'

export const ParadeContact = ({contact}) => {
  console.log(contact)
  return (
    <List>
      {contact.map((item, index) => (
        <Item key={index}>
          <a href={item.url} target="_blank">
            {item.type === 'home' && <Home />}
            {item.type === 'twitter' && <Twitter />}
            {item.type === 'facebook' && <Facebook />}
            {item.type === 'instagram' && <Instagram />}
          </a>
        </Item>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
`
const Item = styled.li`
  padding-left: 15px;
  font-size: 21px;

  a {
    color: #1e8567;

    &:hover {
      color: #ee7732;
    }
  }
`
