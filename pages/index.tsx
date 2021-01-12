import styled from 'styled-components'
import ParadeContainer from '../src/presentational/molecules/paradeContainer'

const Index = ({list}) => {
  return (
    <>
      <Header>
        <Title>セント・パトリックス・デー・パレード一覧</Title>
        <Description>日本国内で開催されているセントパトリックスデーのイベントをまとめました。</Description>
      </Header>
      <ParadeContainer list={list} />
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

// パレード情報
// TODO: プロジェクト内にデータを持つのではなく、 API で取得するようにする？
export async function getStaticProps() {
  return {
    props: {
      list: [
        {
          id: 1,
          name: 'セント・パトリックス・デイ・パレード東京',
          prefecture: '東京',
          start: '20180318T1300',
          end: '20180318T1500',
          description: 'description',
          contact: [
            {
              type: 'home',
              url: 'https://www.inj.or.jp/'
            },
            {
              type: 'twitter',
              url: 'https://twitter.com/injtokyo'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/groups/irishnetworkjapan/'
            }
          ]
        },
        {
          id: 2,
          name: 'セントパトリックデーパレード横浜元町',
          prefecture: '神奈川',
          start: '20180310T1300',
          end: '20180310T1500',
          description: 'description',
          contact: [
            {
              type: 'home',
              url: 'http://stpdy.com'
            },
            {
              type: 'twitter',
              url: 'https://twitter.com/stpd_yokohama'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/StPatricksDayParadeYokohama/'
            }
          ]
        },
        // {
        //   name: 'セント・パトリックス・デー・パレード千葉',
        //   prefecture: '千葉'
        // },
        // {
        //   name: 'セントパトリックス・デー・フェスティバル名古屋2018',
        //   prefecture: '愛知'
        // },
        // {
        //   name: 'セントパトリックスデイ2018沖縄',
        //   prefecture: '沖縄'
        // },
      ]
    }
  }
}
