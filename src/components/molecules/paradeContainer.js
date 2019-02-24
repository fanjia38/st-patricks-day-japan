import React, { Component } from 'react'
import styled from 'styled-components'

import ParadeItem from './paradeItem';
import { paradeData } from '../../data/paradeData'

class ParadeContainer extends Component {
  constructor() {
    super()

    // パレード情報の取得(後々 API 経由でデータ取得するようにしたい)
    this.state = {
      items: paradeData
    }
  }

  render() {
    return (
      <List>
        {ParadeItem(this.state.items)}
      </List>
    )
  }
}

const List = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
`

export default ParadeContainer
