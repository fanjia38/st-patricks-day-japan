import { ReactElement } from 'react'
import { HStack, Box, Link, IconButton } from '@chakra-ui/react'
import { FaHome, FaTwitter, FaFacebookF, FaLink } from 'react-icons/fa'

interface IconLinkProps {
  url: string
  icon: ReactElement
}
const IconLink = ({ url, icon }: IconLinkProps): ReactElement => {
  return (
    <Box>
      <Link href={url}>
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='web site'
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
  link: string
}
const ContactList = ({ site, facebook, twitter, link }: Props): ReactElement => {
  return (
    <HStack>
      {site && <IconLink url={site} icon={<FaHome />} />}
      {facebook && <IconLink url={facebook} icon={<FaFacebookF />} />}
      {twitter && <IconLink url={twitter} icon={<FaTwitter />} />}
      {link && <IconLink url={link} icon={<FaLink />} />}
    </HStack>
  )
}

export default ContactList
