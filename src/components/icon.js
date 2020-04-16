import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <FontAwesomeIcon icon={faHome} />
)
const Twitter = () => (
  <FontAwesomeIcon icon={faTwitter} />
)
const Facebook = () => (
  <FontAwesomeIcon icon={faFacebook} />
)
const Instagram = () => (
  <FontAwesomeIcon icon={faInstagram} />
)

export {
  Home,
  Twitter,
  Facebook,
  Instagram
}
