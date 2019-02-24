import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <Copyright>&copy; 38fanjia</Copyright>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #1e8567;
  color: #fff;
`
const Copyright = styled.p`
  font-size: 14px;
  text-align: center;
`

export default Footer
