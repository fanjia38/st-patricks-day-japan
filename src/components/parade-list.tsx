import React from 'react'
import { Wrap } from '@chakra-ui/react'
import ParadeItem from './parade-item'
import type { Item } from '../types/parade-info'

interface Props {
  list: Item[]
}

const ParadeList: React.FC<Props> = ({list}: Props) => {
  return (
    <Wrap spacing="8" p="8" direction="row" wrap="wrap">
      {list.map((item) => (
        <ParadeItem key={item.id} {...item} />
      ))}
    </Wrap>
  )
}

export default ParadeList
