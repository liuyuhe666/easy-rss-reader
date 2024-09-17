'use client'

import { useEffect, useState } from 'react'
import { Grid } from '@radix-ui/themes'
import CustomCard from '@/components/custom-card'

interface Data {
  values: string[]
  refresh: number
}

export default function Home() {
  const [data, setData] = useState<Data>()

  useEffect(() => {
    fetch('/api/data')
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
  }, [])

  return (
    <Grid columns={{ initial: '1', md: '2', xl: '4' }} gap="4" width="auto" m="4">
      {
        data && data.values.map(item => <CustomCard url={item} refresh={data.refresh} key={item} />)
      }
    </Grid>
  )
}
