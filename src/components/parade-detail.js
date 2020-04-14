import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {format, parse, isSameDay} from 'date-fns'
import {ParadeContact} from './parade-contact'

export const ParadeDetail = (props) => {
  const {name, start, end, prefecture, contact} = props.paradeInfo
  const [schedule, setSchedule] = useState('')

  useEffect(() => {
    const parsedStart = parse(start, 'yyyy-MM-dd HH:mm' , new Date())
    const parsedEnd = parse(end, 'yyyy-MM-dd HH:mm' , new Date())
    const isSame = isSameDay(parsedStart, parsedEnd)

    const from = format(parsedStart, 'yyyy/MM/dd HH:mm')
    const to = format(parsedEnd, isSame ? 'HH:mm' : 'yyyy/MM/dd HH:mm')

    setSchedule(`${from} 〜 ${to}`)
  }, [start, end])

  return (
    <Detail>
      <Title>{name}</Title>
      <Schedule>{schedule}</Schedule>
      <Prefecture>{prefecture}</Prefecture>
      <ParadeContact contact={contact} />
    </Detail>
  )
}

const Detail = styled.div`
  padding: 24px 8px;
  flex-basis: 50%;
  box-sizing: border-box;
  width: 50%;

  &:nth-child(odd) {
    padding-right: 60px;
  }
  &:nth-child(even) {
    padding-left: 60px;
  }
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

const Prefecture = styled.p`
  margin: 8px 0;
`
