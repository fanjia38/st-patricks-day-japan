import React from 'react'
import styled from 'styled-components'

export default class extends React.Component {
  render() {
    return (
      <Prefecture>{this.props.place}</Prefecture>
    )
  }
}

const Prefecture = styled.p`
  margin: 8px 0;
`
