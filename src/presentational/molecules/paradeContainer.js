import React, { Component } from 'react'
import ParadeList from './paradeList'

import { paradeData } from '../../data/paradeData'

class ParadeContainer extends Component {
  constructor() {
    super()

    // 自身が状態を保持する
    this.state = {
      items: paradeData
    }
  }

  render() {
    return (
      <ParadeList items={this.state.items} />
    )
  }
}

export default ParadeContainer
