import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './components/organisms/header'
import Footer from './components/organisms/footer'
import ParadeContainer from './components/molecules/paradeContainer'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <Header />
        <ParadeContainer />
        <Footer />
      </div>
    )
  }
}

render(
  <App />,
  document.querySelector('#root')
)
