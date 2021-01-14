import { Wrap } from '@chakra-ui/react'

import ParadeItem from './parade-item'

function ParadeList ({list}) {
  return (
    <Wrap spacing="8" p="8" direction="row" wrap="wrap">
      {list.map((item) => (
        <ParadeItem key={item.id} item={item} />
      ))}
    </Wrap>
  )
}

export default ParadeList
