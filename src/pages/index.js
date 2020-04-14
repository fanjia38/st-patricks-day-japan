import {Header} from '../components/header'
import {Footer} from '../components/footer'
import {ParadeList} from '../components/parade-list'
import GlobalStyle from '../global-styles'

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ParadeList />
      <Footer />
    </>
  )
}

export default Home
