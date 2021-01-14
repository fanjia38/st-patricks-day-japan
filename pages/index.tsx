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
        <Text fontSize="sm" as="i">&copy; fanjia38</Text>
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
          start: '20200315T1300',
          end: '',
          isCancel: true,
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
          start: '20200310',
          end: '',
          isCancel: true,
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
        {
          id: 3,
          name: '熊本 セント・パトリックス・デイ・パレード',
          prefecture: '熊本',
          description: 'description',
          start: '',
          end: '',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://parade.kumamoto-ireland.org/'
            }
          ]
        },
        {
          id: 4,
          name: 'セント・パトリックス・デー・パレード千葉',
          prefecture: '千葉',
          description: 'description',
          start: '',
          end: '',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://chiba.inj.or.jp/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/groups/chibaINJ/'
            }
          ]
        },
        {
          id: 5,
          name: 'アイリッシュ・フェスティバル in Matsue',
          prefecture: '島根',
          description: 'description',
          start: '20200308T1130',
          end: '20200308T1230',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'http://sanin-japan-ireland.org/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/irishfesmatsue'
            }
          ]
        },
        {
          id: 6,
          name: 'The Emerald Ball',
          prefecture: '東京',
          description: 'description',
          start: '20200314T1830',
          end: '',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'http://www.emeraldballtokyo.net/'
            }
          ]
        },
        {
          id: 7,
          name: 'セントパトリックス・デー・フェスティバル名古屋',
          prefecture: '愛知',
          description: 'description',
          start: '20200314T1215',
          end: '',
          isCancel: true,
          contact: [
            {
              type: 'facebook',
              url: 'https://www.facebook.com/groups/297977985838/'
            }
          ]
        },
        {
          id: 8,
          name: 'I Love Ireland Festival　アイラブアイルランド・フェスティバル',
          prefecture: '東京',
          description: 'description',
          start: '20200314',
          end: '20200315',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://www.iloveirelandfes.com/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/iloveireland.japan/'
            },
            {
              type: 'twitter',
              url: 'https://twitter.com/iloveirelandjpn'
            }
          ]
        },
        {
          id: 9,
          name: 'セント・パトリックスデー・パレード in 岡山',
          prefecture: '岡山',
          description: 'description',
          start: '20200315T1100',
          end: '20200315T1600',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://irishinokayama.jimdofree.com/'
            }
          ]
        },
        {
          id: 10,
          name: '高松アイルランドフェスティバル',
          prefecture: '高松',
          description: 'description',
          start: '20200317',
          end: '20200321',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://shikokuirishnetworkjapan.jimdofree.com/'
            }
          ]
        },
        {
          id: 11,
          name: 'セントパトリックスデー 札幌',
          prefecture: '北海道',
          description: 'description',
          start: '20200321',
          end: '',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://st-patrick-sapporo.jimdofree.com/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/St.PatricksDayinSAPPORO/'
            },
            {
              type: 'twitter',
              url: 'https://twitter.com/sapporo_patrick'
            }
          ]
        },
        {
          id: 12,
          name: 'セントパトリックデーパレード 松本',
          prefecture: '長野',
          description: 'description',
          start: '20200322T1300',
          end: '',
          contact: [
            {
              type: 'facebook',
              url: 'https://www.facebook.com/spdp.matsumoto'
            },
            {
              type: 'twitter',
              url: 'https://twitter.com/stpd_matsumoto'
            }
          ]
        },
        {
          id: 13,
          name: 'St. Patrick\'s Dayの集い',
          prefecture: '東京',
          description: 'description',
          start: '20200321',
          end: '',
          contact: [
            {
              type: 'home',
              url: 'http://japan-ireland.jugem.jp/'
            }
          ]
        },
        {
          id: 14,
          name: 'Fukui Patrick\'s Day',
          prefecture: '福井',
          description: 'description',
          start: '20200321T1100',
          end: '20200321T1500',
          isCancel: true,
          contact: [
            {
              type: 'home',
              url: 'https://site-1216490-6793-6880.mystrikingly.com/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/fukuipatricksday/'
            }
          ]
        },
        {
          id: 15,
          name: 'THE WILD ROVER',
          prefecture: '東京',
          description: 'description',
          start: '20200322T1400',
          end: '20200322T2200',
          contact: [
            {
              type: 'home',
              url: 'https://site-1216490-6793-6880.mystrikingly.com/'
            },
            {
              type: 'facebook',
              url: 'https://www.facebook.com/fukuipatricksday/'
            }
          ]
        }
      ]
    }
  }
}
