import React from 'react'
import styled from 'styled-components'

const ParadeTitle = (props) => {
  return (
    <Title>{props.title}</Title>
  )
}

const Title = styled.h2`
  color: #1e8567;
  font-size: 18px;
`

export default ParadeTitle
