import React, { Component } from 'react'
import { render } from 'react-dom'

import GlobalStyle from './components/global-styles'
import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import ParadeContainer from './components/molecules/paradeContainer'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <>
        <GlobalStyle />
        <Header />
        <ParadeContainer />
        <Footer />
      </>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)
