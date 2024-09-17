'use client'

import { Badge, Box, Card, Flex, Link, ScrollArea, Spinner, Text } from '@radix-ui/themes'
import { useEffect, useState } from 'react'
import type { RssInfo } from '@/lib/rss'
import { parse } from '@/lib/rss'

interface CustomCardProps {
  url: string
  refresh: number
}

export default function CustomCard({ url, refresh }: CustomCardProps) {
  const [data, setData] = useState<RssInfo>()

  useEffect(() => {
    const parseRss = async () => {
      const result = await parse(url)
      setData(result)
    }

    parseRss()

    const timer = setInterval(parseRss, refresh * 1000 * 60)

    return () => clearInterval(timer)
  }, [])

  return (
    <ScrollArea
      scrollbars="vertical"
      radius="full"
    >
      <Box maxHeight="500px" minHeight="500px">
        <Card>
          {
            !data
              ? (<Flex align="center" justify="center"><Spinner size="3" /></Flex>)
              : (
                <Flex gap="3" direction="column">
                  <Text size="4" weight="bold" align="center">{data.title}</Text>
                  {
                    data.items.map((item, index) => (
                      <Flex gap="1" key={item.link}>
                        <Badge variant="soft" color="crimson">{index + 1}</Badge>
                        <Text>
                          <Link href={item.link} target="_blank">{item.title}</Link>
                        </Text>
                      </Flex>
                    ))
                  }
                </Flex>
              )
          }
        </Card>
      </Box>
    </ScrollArea>
  )
}
