import { Link, Separator, Text } from '@radix-ui/themes'
import { siteInfo } from '@/constants'

export default function Footer() {
  return (
    <footer>
      <Separator my="3" size="4" />
      <Text align="center" as="p">
        Made with ❤ by
        {' '}
        <Link href={siteInfo.authorGitHubLink} target="_blank">LiuYuhe</Link>
      </Text>
    </footer>
  )
}
