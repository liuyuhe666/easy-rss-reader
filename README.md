# 🎯Easy RSS Reader

> A minimalist RSS online browsing tool.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Configuration File

You can edit `data.json` and customize your content.

The following is an example.

```json
{
  "values": [
    "https://www.zhihu.com/rss",
    "https://tech.meituan.com/feed/",
    "http://www.ruanyifeng.com/blog/atom.xml",
    "https://feeds.appinn.com/appinns/",
    "https://v2ex.com/feed/tab/tech.xml",
    "http://www.sciencenet.cn/xml/blog.aspx?di=30",
    "https://www.douban.com/feed/review/book",
    "https://www.douban.com/feed/review/movie",
    "https://www.geekpark.net/rss",
    "https://hostloc.com/forum.php?mod=rss&fid=45&auth=389ec3vtQanmEuRoghE%2FpZPWnYCPmvwWgSa7RsfjbQ%2BJpA%2F6y6eHAx%2FKqtmPOg",
    "https://rsshub.rssforever.com/bilibili/precious",
    "https://rsshub.rssforever.com/bilibili/ranking/129/7/1"
  ],
  "refresh": 6
}
```
- `values`: Your RSS subscription link.
- `refresh`: Refresh interval, in minutes.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/liuyuhe666/easy-rss-reader)

## Reference
- [https://github.com/srcrs/rss-reader](https://github.com/srcrs/rss-reader)
- [https://docs.rsshub.app](https://docs.rsshub.app)
