import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCalendarAlt, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Home = () => (
  <FontAwesomeIcon icon={faHome} />
)
const Calendar = () => (
  <FontAwesomeIcon icon={faCalendarAlt} />
)
const Maker = () => (
  <FontAwesomeIcon icon={faMapMarkerAlt} />
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
  Calendar,
  Maker,
  Twitter,
  Facebook,
  Instagram
}
