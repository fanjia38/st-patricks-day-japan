import { HStack } from '@chakra-ui/react'

import ParadeItem from './parade-item'

function ParadeList ({list}) {
  return (
    <HStack spacing="24px" p={8}>
      {list.map((item, index) => (
        <ParadeItem key={index} item={item} />
      ))}
    </HStack>
  )
}

export default ParadeList
