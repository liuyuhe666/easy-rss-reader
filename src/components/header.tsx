import { Avatar, Button, Flex, Heading, Link, Separator } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import ThemeButton from './theme-button'
import { siteInfo } from '@/constants'

export default function Header() {
  return (
    <header>
      <Flex justify="between" mx="4" direction={{ initial: 'column', md: 'row' }} gap="2">
        <Flex gap="2" align="center" justify="center">
          <Avatar src="/favicon.ico" fallback="R" size="2" />
          <Heading>RSS Reader</Heading>
        </Flex>
        <Flex gap="6" align="center" justify="center">
          <Link href="/">
            <Button variant="ghost" color="gray" size="4" radius="full">主页</Button>
          </Link>
          <Link href={siteInfo.documentationLink} target="_blank">
            <Button variant="ghost" color="gray" size="4" radius="full">
              使用说明
            </Button>
          </Link>
          <Link href={siteInfo.faqLink} target="_blank">
            <Button variant="ghost" color="gray" size="4" radius="full">
              常见问题
            </Button>
          </Link>
        </Flex>
        <Flex gap="2" align="center" justify="center">
          <Link href={siteInfo.githubLink} target="_blank">
            <Button color="gray" variant="outline" radius="full">
              <GitHubLogoIcon />
              Star on GitHub
            </Button>
          </Link>
          <ThemeButton />
        </Flex>
      </Flex>
      <Separator my="3" size="4" />
    </header>
  )
}
