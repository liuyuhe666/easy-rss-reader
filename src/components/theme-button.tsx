'use client'

import { Button } from '@radix-ui/themes'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { useEffect, useState } from 'react'
import { Theme } from '@/lib/theme'

export default function ThemeButton() {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const { theme, setTheme } = useTheme()
    const onToggle = () => {
        if (theme === Theme.light) {
            setTheme(Theme.dark)
        }
        else {
            setTheme(Theme.light)
        }
    }

    if (!mounted) {
        return null
    }

    return (
        <Button onClick={onToggle} variant="outline" color="gray" radius="full">
            {theme === Theme.light ? <SunIcon /> : <MoonIcon />}
        </Button>
    )
}
