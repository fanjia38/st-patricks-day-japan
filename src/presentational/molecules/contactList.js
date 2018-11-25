import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome as home } from '@fortawesome/free-solid-svg-icons'
import { faTwitter as twitter, faFacebookF as facebook, faInstagram as instagram } from '@fortawesome/free-brands-svg-icons'

// 各リンクの表示方法は変更したい
export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <ul>
        <li><a href={this.props.items.url} target="_blank"><FontAwesomeIcon icon={home} /></a></li>
        <li><a href={this.props.items.twitter} target="_blank"><FontAwesomeIcon icon={twitter} /></a></li>
        <li><a href={this.props.items.facebook} target="_blank"><FontAwesomeIcon icon={facebook} /></a></li>
        <li><a href={this.props.items.instagram} target="_blank"><FontAwesomeIcon icon={instagram} /></a></li>
      </ul>
    )
  }
}
