import { Avatar, Button, Flex, Heading, Link } from '@radix-ui/themes'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import ThemeButton from './theme-button'
import { siteInfo } from '@/constants'

export default function Header() {
  return (
    <header>
      <Flex justify="between" mx="4">
        <Flex gap="2" align="center">
          <Avatar src="/favicon.ico" fallback="R" />
          <Heading>RSS Reader</Heading>
        </Flex>
        <Flex gap="2" align="center">
          <Link href={siteInfo.githubLink} target="_blank">
            <Button color="gray" variant="outline" radius="full">
              <GitHubLogoIcon />
              Star on GitHub
            </Button>
          </Link>
          <ThemeButton />
        </Flex>
      </Flex>
    </header>
  )
}
