import { Box, Center, Text, Heading } from '@chakra-ui/react'

import ParadeList from '../components/parade-list'

const Index = ({list}) => {
  return (
    <>
      <Box p={4} bg="green.500" color="white">
        <Heading size="lg" mb={4}>セント・パトリックス・デー・パレード一覧</Heading>
        <Text fontSize="sm">日本国内で開催されているセントパトリックスデーのイベントをまとめました。</Text>
      </Box>
      <ParadeList list={list} />
      <Center p={4} bg="green.500" color="white">
        <Text fontSize="sm" as="i">&copy; 38fanjia</Text>
      </Center>
    </>
  )
}

export default Index

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
