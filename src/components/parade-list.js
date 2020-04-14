import React from 'react'
import styled from 'styled-components'
import {paradeData} from '../data/paradeData'
import {ParadeDetail} from './parade-detail'

export const ParadeList = () => {
  const data = paradeData
  console.log(data)

  return (
    <ListWrapper>
      {data.map((item, index) => (
        <ParadeDetail key={index} paradeInfo={item} />
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`
