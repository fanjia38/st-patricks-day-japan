import React from 'react'
import { HStack, Link } from '@chakra-ui/react'

function ContactList({items}) {
  return (
    <HStack>
      {items.map((item, index) => (
        <Link key={index} href={item.url}>{item.type}</Link>
      ))}
    </HStack>
  )
}

export default ContactList
