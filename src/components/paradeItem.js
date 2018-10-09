import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const ParadeItem = (items) => {
  return items.map(({id, name, prefecture, start, end, contact}) => {
    return (
      <li key={id}>
        <h3>{name}({prefecture})</h3>
        <p>開催日: {start} ~ {end}</p>
        <a href={contact.url} target="_blank"><FontAwesomeIcon icon={faHome} /></a>
        <a href={contact.twitter} target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href={contact.facebook} target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
      </li>
    )
  })
}

export default ParadeItem
