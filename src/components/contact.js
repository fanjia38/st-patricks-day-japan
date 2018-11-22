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
        <a href={this.props.url} target="_blank"><FontAwesomeIcon icon={home} /></a>
        <a href={this.props.twitter} target="_blank"><FontAwesomeIcon icon={twitter} /></a>
        <a href={this.props.facebook} target="_blank"><FontAwesomeIcon icon={facebook} /></a>
        <a href={this.props.instagram} target="_blank"><FontAwesomeIcon icon={instagram} /></a>
      </div>
    )
  }
}
