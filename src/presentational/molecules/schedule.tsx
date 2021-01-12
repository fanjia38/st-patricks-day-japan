import React from 'react'
import dayjs from 'dayjs'

interface Props {
  start: string
  end: string
}
const Schedule = ({start, end}: Props) => {
  return (
    <p>{dayjs(start).format('YYYY/MM/DD HH:mm')} 〜 {dayjs(end).format('YYYY/MM/DD HH:mm')}</p>
  )
}

export default Schedule
