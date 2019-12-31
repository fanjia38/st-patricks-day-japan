import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderWrapper>
      <Title>St.Patrick's Day Parade in Japan</Title>
      <Description>日本国内で開催されているセントパトリックスデーのイベント一覧</Description>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: #1e8567;
  color: #fff;
  padding: 10px;
`

const Title = styled.h1`
  margin: 0;
  padding-bottom: 5px;
  font-size: 26px;
  line-height: 1.5;
  height: 36px;
`

const Description = styled.p`
  font-size: 14px;
`
