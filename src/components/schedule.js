import React from 'react'
import moment from 'moment'

export default class extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <p>{moment(this.props.start).format('YYYY/MM/DD HH:mm')} 〜 {moment(this.props.end).format('YYYY/MM/DD HH:mm')}</p>
    )
  }
}
