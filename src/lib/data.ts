import { toast } from 'react-toastify'

export interface Data {
  values: string[]
  refresh: number
}
export async function getData(): Promise<Data | undefined> {
  const resp = await fetch('/api/data')
  if (resp.status !== 200) {
    toast.error('获取数据失败', {
      position: 'top-center',
    })
    console.error('获取数据失败')
    return
  }
  try {
    const data: Data = await resp.json()
    return data
  }
  catch {
    toast.error('数据解析失败', {
      position: 'top-center',
    })
    console.error('数据解析失败')
  }
}
