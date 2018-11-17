import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome as home } from '@fortawesome/free-solid-svg-icons'
import { faTwitter as twitter, faFacebookF as facebook, faInstagram as instagram } from '@fortawesome/free-brands-svg-icons'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <div>
        <a href={contact.url} target="_blank"><FontAwesomeIcon icon={home} /></a>
        <a href={contact.twitter} target="_blank"><FontAwesomeIcon icon={twitter} /></a>
        <a href={contact.facebook} target="_blank"><FontAwesomeIcon icon={facebook} /></a>
        <a href={contact.instagram} target="_blank"><FontAwesomeIcon icon={instagram} /></a>
      </div>
    )
  }
}
