import { ReactElement } from 'react'
import { Wrap } from '@chakra-ui/react'
import dayjs from 'dayjs'

import ParadeItem from './parade-item'
import { Item } from '../types/parade-info'

/**
 * 開始日時で並び替える
 * 1.今年 2.日時指定なし 3.去年以降
 */
const sortStartTime = (a: Item, b: Item) => {
  const first = a.start || dayjs().format('YYYY0101')
  const second = b.start || dayjs().format('YYYY0101')

  if (first > second) {
    return -1
  } else if(first < second) {
    return 1
  } else {
    return 0
  }
}

interface Props {
  list: Item[]
}
const ParadeList = ({ list }: Props): ReactElement => {
  const sortedList = list.sort(sortStartTime)

  return (
    <Wrap spacing='8' p='8' direction='row' wrap='wrap'>
      {sortedList.map(item => (
        <ParadeItem key={item.id} {...item} />
      ))}
    </Wrap>
  )
}

export default ParadeList
