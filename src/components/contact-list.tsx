import React from 'react'
import { HStack, Box, Link, IconButton } from '@chakra-ui/react'
import { FaHome, FaTwitter, FaFacebookF } from 'react-icons/fa'

interface IconLinkProps {
  url: string
  icon: React.ReactElement
}
const IconLink: React.FC<IconLinkProps> = ({url, icon}: IconLinkProps) => {
  return (
    <Box>
      <Link href={url}>
        <IconButton
          variant="outline"
          colorScheme="teal"
          aria-label="web site"
          icon={icon}
        />
      </Link>
    </Box>
  )
}

interface Props {
  site: string
  facebook: string
  twitter: string
}
const ContactList: React.FC<Props> = ({site, facebook, twitter}: Props) => {
  return (
    <HStack mt={4}>
      {site && (
        <IconLink
          url={site}
          icon={<FaHome />}
        />
      )}
      {facebook && (
        <IconLink
          url={facebook}
          icon={<FaFacebookF />}
        />
      )}
      {twitter && (
        <IconLink
          url={twitter}
          icon={<FaTwitter />}
        />
      )}
    </HStack>
  )
}

export default ContactList
