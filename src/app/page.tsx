'use client'

import { useEffect, useState } from 'react'
import { Grid } from '@radix-ui/themes'
import CustomCard from '@/components/custom-card'
import type { Data } from '@/lib/data'
import { getData } from '@/lib/data'

export default function Home() {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData()
      setData(result)
    }
    fetchData()
  }, [])

  return (
    <Grid columns={{ initial: '1', md: '2', xl: '4' }} gap="4" width="auto" m="4">
      {
        data && data.values.map(item => <CustomCard url={item} refresh={data.refresh} key={item} />)
      }
    </Grid>
  )
}
