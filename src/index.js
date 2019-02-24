import React, { Component } from 'react'
import { render } from 'react-dom'

import Header from './container/header'
import Footer from './container/footer'
import ParadeContainer from './presentational/molecules/paradeContainer'

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
