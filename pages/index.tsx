import styled from 'styled-components'
import ParadeContainer from '../src/presentational/molecules/paradeContainer'

const Index = () => {
  return (
    <>
      <Header>
        <Title>セント・パトリックス・デー・パレード一覧</Title>
        <Description>日本国内で開催されているセントパトリックスデーのイベントをまとめました。</Description>
      </Header>
      <ParadeContainer />
      <Footer>
        <Copyright>&copy; 38fanjia</Copyright>
      </Footer>
    </>
  )
}

export default Index

const Header = styled.header`
  background-color: #1e8567;
  color: #fff;
`
const Title = styled.h1`
  font-size: 26px;
`
const Description = styled.p`
  font-size: 14px;
`

const Footer = styled.footer`
  background-color: #1e8567;
  color: #fff;
`
const Copyright = styled.p`
  font-size: 14px;
  text-align: center;
`
