import { ReactElement } from 'react'
import { Wrap } from '@chakra-ui/react'
import ParadeItem from './parade-item'
import { Item } from '../types/parade-info'

interface Props {
  list: Item[]
}

const ParadeList = ({ list }: Props): ReactElement => {
  return (
    <Wrap spacing='8' p='8' direction='row' wrap='wrap'>
      {list.map(item => (
        <ParadeItem key={item.id} {...item} />
      ))}
    </Wrap>
  )
}

export default ParadeList
