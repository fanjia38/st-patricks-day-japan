import React from 'react'
import styled from 'styled-components'

const Link = (items) => {
  return (
    <LinkText href={items.url} target="_blank">{items.text}</LinkText>
  )
}

const LinkText = styled.a`
  color: #1e8567;

  &:hover {
    color: #ee7732;
  }
`

export default Link
