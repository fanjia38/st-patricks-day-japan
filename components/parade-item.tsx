import { Box, Stack, Heading, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'

import ContactList from './contact-list'

function ParadeItem ({item}) {
  const {id, name, prefecture, start, end, description, contact} = item

  const getScheduleText = (start, end) => {
    const formatedStart = dayjs(start).format('YYYY/MM/DD HH:mm')
    const formatedEnd = dayjs(end).format('YYYY/MM/DD HH:mm')
    return `${formatedStart}~${formatedEnd}`
  }

  return (
    <Box key={id} p={4} borderWidth={1} borderRadius="lg" w="500px">
      <Heading size="md">{name}</Heading>
      <Text mt={4}>{getScheduleText(start, end)}</Text>
      <Text>{prefecture}</Text>
      <Text>{description}</Text>
      <ContactList items={contact} />
    </Box>
  )
}

export default ParadeItem
