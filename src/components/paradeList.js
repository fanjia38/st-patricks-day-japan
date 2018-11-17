import React from 'react'
import Schedule from '../atoms/schedule'
import Contact from './contact'

const ParadeItem = (items) => {
  return items.map(({id, name, prefecture, start, end, contact}) => {
    return (
      <li key={id}>
        <h3>{name}</h3>
        <Schedule
          start={start}
          end={end}
        />
        <p>{prefecture}</p>
        <Contact
          url={url}
          twitter={twitter}
          facebook={facebook}
          instagram={instagram}
        />
      </li>
    )
  })
}

const ParadeList = (props) => {
  return (
    <ul>
      {ParadeItem(props.items)}
    </ul>
  )
}

export default ParadeList
