import { ReactElement, useMemo } from 'react'
import { WrapItem, VStack, HStack, Heading, Text, Badge } from '@chakra-ui/react'

import dayjs from 'dayjs'
import ContactList from './contact-list'
import { Item } from '../types/parade-info'

const ParadeItem = ({
  id,
  name,
  prefecture,
  start,
  end,
  cancel,
  online,
  description,
  site,
  facebook,
  twitter,
  link
}: Item): ReactElement => {
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
    const formatedEnd = isSameDay
      ? end && endDay.format('HH:mm')
      : end && endDay.format(format)
    const isBetween = !isSameDay || hasTime

    return `${formatedStart}${isBetween ? '~' : ''}${formatedEnd}`
  }, [startDay, endDay])

  const isOnline = useMemo(() => online === 'true', [online])

  const isCancel = useMemo(() => cancel === 'true', [cancel])

  const isEnd = useMemo(
    () =>
      !isCancel && (end ? dayjs().isAfter(endDay) : dayjs().isAfter(startDay)),
    [isCancel, endDay, startDay]
  )

  return (
    <WrapItem key={id} p={4} borderWidth={1} borderRadius='lg' w='500px'>
      <VStack width='100%' height="100%" alignItems="normal">
        <Heading size='md'>{name}</Heading>
        <HStack justify='flex-end' mt='4'>
          {isCancel && <Badge colorScheme='yellow'>開催中止</Badge>}
          {isOnline && <Badge colorScheme='blue'>オンライン開催</Badge>}
          {isEnd && <Badge>イベント終了</Badge>}
          <Badge colorScheme='green'>{prefecture}</Badge>
          <Text ml={4} align='right'>
            {shceduleText}
          </Text>
        </HStack>
        <Text>{description}</Text>
        <ContactList
          site={site}
          facebook={facebook}
          twitter={twitter}
          link={link}
        />
      </VStack>
    </WrapItem>
  )
}

export default ParadeItem
