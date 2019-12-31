// パレード情報
// TODO: プロジェクト内にデータを持つのではなく、 API で取得するようにしたい
export const paradeData = [
  {
    id: 1,
    name: 'セント・パトリックス・デイ・パレード東京',
    prefecture: '東京',
    start: '20190317T1500',
    end: '20190317T1700',
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
    start: '20180316T1300',
    end: '20180316T1500',
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
    name: 'アイラブアイルランド・フェスティバル',
    prefecture: '東京・代々木公園',
    start: '20190316T1000',
    end: '20190316T1700',
    description: 'description',
    contact: [
      {
        type: 'home',
        url: 'http://iloveirelandfes.com'
      },
      {
        type: 'twitter',
        url: 'https://twitter.com/iloveirelandjpn'
      },
      {
        type: 'facebook',
        url: 'https://www.facebook.com/iloveireland.japan/'
      },
      {
        type: 'instagram',
        url: 'https://www.instagram.com/iloveirelandfestival/'
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
