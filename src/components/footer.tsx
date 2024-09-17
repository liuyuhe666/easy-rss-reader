import { Link, Text } from '@radix-ui/themes'
import { siteInfo } from '@/constants'

export default function Footer() {
  return (
    <footer>
      <Text align="center" as="p">
        Made with ❤ by
        {' '}
        <Link href={siteInfo.authorGitHubLink} target="_blank">LiuYuhe</Link>
      </Text>
    </footer>
  )
}
