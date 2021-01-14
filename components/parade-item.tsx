import { WrapItem, Box, Stack, HStack, Heading, Text, Badge } from '@chakra-ui/react'
import dayjs from 'dayjs'

import ContactList from './contact-list'

function ParadeItem ({item}) {
  const {id, name, prefecture, start, end, isCancel, description, contact} = item

  const getScheduleText = (start, end) => {
    if (!start && !end) {
      return '-'
    }

    const startDay = dayjs(start)
    const endDay = dayjs(end)
    const isSameDay = startDay.date() === endDay.date()

    const formatedStart = startDay.format('YYYY/MM/DD HH:mm')
    const formatedEnd = isSameDay ? endDay.format('HH:mm') : end && endDay.format('YYYY/MM/DD HH:mm')

    return `${formatedStart}~${formatedEnd}`
  }

  return (
    <WrapItem key={id} p={4} borderWidth={1} borderRadius="lg" w="500px">
      <Box width="100%">
        <Heading size="md">{name}</Heading>
        <Text mt={4} align="right">{getScheduleText(start, end)}</Text>
        <HStack justify="end">
          {isCancel && <Badge colorScheme="yellow">開催中止</Badge>}
          <Badge>{prefecture}</Badge>
        </HStack>
        <Text>{description}</Text>
        <ContactList items={contact} />
      </Box>
    </WrapItem>
  )
}

export default ParadeItem
