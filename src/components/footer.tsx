import { Flex, Link, Separator, Text } from '@radix-ui/themes'
import { siteInfo } from '@/constants'

export default function Footer() {
  return (
    <footer>
      <Separator size="4" />
      <Flex height="10vh" justify="center" direction="column">
        <Text align="center" as="p">
          Made with ❤ by
          {' '}
          <Link href={siteInfo.authorGitHubLink} target="_blank">LiuYuhe</Link>
        </Text>
      </Flex>
    </footer>
  )
}
