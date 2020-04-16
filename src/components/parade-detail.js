import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {format, parse, isSameDay} from 'date-fns'
import {ParadeContact} from './parade-contact'
import { Calendar, Maker } from './icon'

export const ParadeDetail = (props) => {
  const {name, start, end, prefecture, contact} = props.paradeInfo
  const [schedule, setSchedule] = useState('')

  useEffect(() => {
    const parsedStart = parse(start, 'yyyy-MM-dd HH:mm' , new Date())
    const parsedEnd = parse(end, 'yyyy-MM-dd HH:mm' , new Date())
    const isSame = isSameDay(parsedStart, parsedEnd)

    const from = format(parsedStart, 'yyyy/MM/dd HH:mm')
    const to = format(parsedEnd, isSame ? 'HH:mm' : 'yyyy/MM/dd HH:mm')

    setSchedule(`${from}〜${to}`)
  }, [start, end])

  return (
    <Detail>
      <Title>{name}</Title>
      <Schedule><StyledCalendar />{schedule}</Schedule>
      <Prefecture><StyledMarker />{prefecture}</Prefecture>
      <ParadeContact contact={contact} />
    </Detail>
  )
}

const Detail = styled.div`
  margin: 24px;
  padding: 24px;
  max-width: 540px;
  width: 100%;
  border-right: 1px solid #1e8567;
  border-bottom: 1px solid #1e8567;
`

const Title = styled.h2`
  color: #1e8567;
  font-size: 18px;
`

const Schedule = styled.p`
  font-size: 12px;
  margin: 8px 0;
  text-align: right;
`

const StyledCalendar = styled(Calendar)`
  margin: 8px;
`

const Prefecture = styled.p`
  margin: 8px 0;
`

const StyledMarker = styled(Maker)`
  margin: 8px
`
