import React from 'react'
import Schedule from './schedule'
import Contact from './contact'

const ParadeItem = (items) => {
  return items.map(({id, name, prefecture, start, end, description, contact}) => {
    return (
      <li key={id}>
        <h3>{name}</h3>
        <Schedule
          start={start}
          end={end}
        />
        <p>{prefecture}</p>
        <p>{description}</p>
        <Contact
          url={contact.url}
          twitter={contact.twitter}
          facebook={contact.facebook}
          instagram={contact.instagram}
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
