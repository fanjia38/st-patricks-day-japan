// パレード情報
// TODO: プロジェクト内にデータを持つのではなく、 API で取得するようにしたい
export const paradeData = [
  {
    id: 1,
    name: 'セント・パトリックス・デイ・パレード東京',
    prefecture: '東京',
    start: '2019-03-17 15:00',
    end: '2019-03-17 17:00',
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
    start: '2018-03-16 3:00',
    end: '2018-03-16 15:00',
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
    start: '2019-03-16 10:00',
    end: '2019-03-16 17:00',
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
