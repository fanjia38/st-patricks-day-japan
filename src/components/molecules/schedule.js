import React from 'react'
import format from 'date-fns/format'

export default class extends React.Component {
  constructor(props) {
    super(props)

    const isSameDay = format(props.start, 'YYYY/MM/DD') === format(props.end, 'YYYY/MM/DD')
    this.state = {
      start: format(props.start, 'YYYY/MM/DD HH:mm'),
      end: isSameDay ? format(props.end, 'HH:mm') : format(props.end, 'YYYY/MM/DD HH:mm')
    }
  }
  render() {
    return (
      <p>{this.state.start} 〜 {this.state.end}</p>
    )
  }
}
