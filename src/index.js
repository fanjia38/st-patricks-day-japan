import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './components/header'
import Footer from './components/footer'
import ParadeContainer from './components/paradeContainer'

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
