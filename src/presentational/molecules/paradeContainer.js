import React, { Component } from 'react'
import ParadeList from './paradeList'

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
      <ParadeList items={this.state.items} />
    )
  }
}

export default ParadeContainer
