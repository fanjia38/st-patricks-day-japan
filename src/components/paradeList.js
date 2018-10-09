import React from 'react'
import ParadeItem from './paradeItem'

const ParadeList = (props) => {
  return (
    <ul>
      {ParadeItem(props.items)}
    </ul>
  )
}

export default ParadeList
