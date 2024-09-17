import Parser from 'rss-parser'

interface RssItem {
  title: string
  link: string
}

export interface RssInfo {
  title: string
  items: RssItem[]
}

export async function parse(url: string): Promise<RssInfo | undefined> {
  const resp = await fetch(`/api/rss?url=${url}`, { cache: 'no-cache' })
  if (resp.status !== 200) {
    console.error('获取数据失败')
    return
  }
  const text = await resp.text()
  const parser = new Parser()
  const feed = await parser.parseString(text)
  if (!feed.title) {
    return
  }
  const items: RssItem[] = []
  for (const item of feed.items) {
    if (item.title && item.link) {
      items.push({
        title: item.title,
        link: item.link,
      })
    }
  }
  return {
    title: feed.title,
    items,
  }
}
