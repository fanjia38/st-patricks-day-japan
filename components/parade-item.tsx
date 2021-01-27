import { WrapItem, Box, Stack, HStack, Heading, Text, Badge } from '@chakra-ui/react'
import {useMemo} from 'react'
import dayjs from 'dayjs'

import ContactList from './contact-list'

function ParadeItem ({item}) {
  const {id, name, prefecture, start, end, cancel, description, site, facebook, twitter} = item

  const startDay = useMemo(() => dayjs(start), [start])
  const endDay = useMemo(() => dayjs(end), [end])

  const shceduleText = useMemo(() => {
    if (!start && !end) {
      return '-'
    }

    const isSameDay = startDay.date() === endDay.date() || !end
    const hasTime = startDay.hour() !== 0 && endDay.hour() !== 0

    const format = hasTime ? 'YYYY/MM/DD HH:mm' : 'YYYY/MM/DD'

    const formatedStart = startDay.format(format)
    const formatedEnd = isSameDay ? end && endDay.format('HH:mm') : end && endDay.format(format)
    const isBetween = !isSameDay || hasTime

    return `${formatedStart}${isBetween ? '~' : ''}${formatedEnd}`
  }, [item])

  const isCancel = useMemo(() => (
    cancel === 'true'
  ), [item])

  const isEnd = useMemo(() => (
    !isCancel && (end ? dayjs().isAfter(endDay) : dayjs().isAfter(startDay))
  ), [item])

  return (
    <WrapItem key={id} p={4} borderWidth={1} borderRadius="lg" w="500px">
      <Box width="100%">
        <Heading size="md">{name}</Heading>
        <HStack justify="flex-end" mt="4">
          {isCancel && <Badge colorScheme="yellow">開催中止</Badge>}
          {isEnd && <Badge>イベント終了</Badge>}
          <Badge colorScheme="green">{prefecture}</Badge>
          <Text ml={4} align="right">{shceduleText}</Text>
        </HStack>
        <Text>{description}</Text>
        <ContactList site={site} facebook={facebook} twitter={twitter} />
      </Box>
    </WrapItem>
  )
}

export default ParadeItem
