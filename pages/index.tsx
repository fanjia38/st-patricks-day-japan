import { Box, Center, Text, Heading, useColorModeValue } from '@chakra-ui/react'
import ParadeList from '../src/components/parade-list'
import { NextPage } from 'next'
import { Item } from '../src/types/parade-info'

interface Props {
  list: Item[]
}
const Index: NextPage<Props> = ({ list }: Props) => {
  // header, footer のカラーモード
  const color = useColorModeValue('white', 'gray.800')

  return (
    <>
      <Box p={4} bg='green.500' color={color}>
        <Heading size='lg' mb={4}>
          セント・パトリックス・デー・パレード in Japan
        </Heading>
        <Text fontSize='sm'>
          3月17日はアイルランドの聖人・聖パトリックの命日 ☘️<br />
          この日を祝う日本国内で開催されているセントパトリックスデーのイベントをまとめました。
        </Text>
      </Box>
      <ParadeList list={list} />
      <Center p={4} bg='green.500' color={color}>
        <Text fontSize='sm' as='i'>
          &copy; fanjia38
        </Text>
      </Center>
    </>
  )
}

export default Index

// パレード情報取得
export async function getStaticProps (): Promise<{ props: Props }> {
  const res = await fetch(
    'https://script.googleusercontent.com/macros/echo?user_content_key=GOZsaYjX77-bMVdv5h3UFWxdQ4Dn2qnd9iVgnQ1XfDDdjgcGh06YoJ0EcNicQJ5YWpUzhRWDMwsuf3773Rv_1ozDdws3-u4tm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNOVkYZ-D26rRyZYJvWWBR2mEU2zFbuQNy6389EXjUlYfbGpDiVXvwI9ygTl3lIyEPUyt4dgzL8cGGaU2pP6Ntk&lib=MTzTh0lz8kttKtw-Gms9Lh0sclDyLTpXh'
  )
  const data = await res.json()

  return {
    props: data
  }
}
