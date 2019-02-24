import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderWrapper>
      <Title>セント・パトリックス・デー・パレード一覧</Title>
      <Description>日本国内で開催されているセントパトリックスデーのイベントをまとめました。</Description>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: #1e8567;
  color: #fff;
`
const Title = styled.h1`
  font-size: 26px;
`
const Description = styled.p`
  font-size: 14px;
`

export default Header
