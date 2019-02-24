import React from 'react'
import styled from 'styled-components'
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
      <Schedule>{this.state.start} 〜 {this.state.end}</Schedule>
    )
  }
}

const Schedule = styled.p`
  font-size: 12px;
  margin: 8px 0;
  text-align: right;
`
