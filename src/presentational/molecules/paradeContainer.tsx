import React, { Component } from 'react'
import ParadeList from './paradeList'

import { paradeData } from '../../data/paradeData'

const ParadeContainer = () => {
  const items = paradeData

  return (
    <ParadeList items={items} />
  )
}

export default ParadeContainer
