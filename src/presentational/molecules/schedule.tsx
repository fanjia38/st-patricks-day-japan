import React from 'react'
import moment from 'moment'

interface Props {
  start: string
  end: string
}
const Schedule = ({start, end}: Props) => {
  return (
    <p>{moment(start).format('YYYY/MM/DD HH:mm')} 〜 {moment(end).format('YYYY/MM/DD HH:mm')}</p>
  )
}

export default Schedule
