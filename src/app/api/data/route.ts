import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import { NextResponse } from 'next/server'

export async function GET() {
  const filePath = path.join(process.cwd(), 'data.json')
  const jsonData = fs.readFileSync(filePath, 'utf-8')
  const data = JSON.parse(jsonData)
  return NextResponse.json(data)
}
