import { Stack } from '@chakra-ui/react'

import ParadeItem from './parade-item'

function ParadeList ({list}) {
  return (
    <Stack spacing="24px" p={8}>
      {list.map((item, index) => (
        <ParadeItem key={index} item={item} />
      ))}
    </Stack>
  )
}

export default ParadeList
