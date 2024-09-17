import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const url = searchParams.get('url')
  if (!url) {
    return new Response('请求参数错误', { status: 400 })
  }
  try {
    const response = await fetch(url, { cache: 'no-cache' })
    const text = await response.text()
    return new Response(text, { status: 200 })
  }
  catch {
    return new Response('获取数据失败', { status: 500 })
  }
}
