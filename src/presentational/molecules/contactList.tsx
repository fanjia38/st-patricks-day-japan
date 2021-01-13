import { HStack, Box, Link, IconButton } from '@chakra-ui/react'
import { FaHome, FaTwitter, FaFacebookF } from 'react-icons/fa'

function ContactList({items}) {
  const getIcon = (type) => {
    switch (type) {
      case 'home':
        return <FaHome />
      case 'twitter':
        return <FaTwitter />
      case 'facebook':
        return <FaFacebookF />
          }
    return
  }

  return (
    <HStack mt={4}>
      {items.map((item, index) => (
        <Box key={index}>
          <Link key={index} href={item.url}>
            <IconButton
              variant="outline"
              colorScheme="teal"
              aria-label="web site"
              icon={getIcon(item.type)}
            />
          </Link>
        </Box>
      ))}
    </HStack>
  )
}

export default ContactList
