import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import * as cheerio from 'cheerio'

export const scrape = async (URL: string): Promise<cheerio.CheerioAPI> => {
  const res = await fetch(URL)
  const html = await res.text()
  return cheerio.load(html)
}

export const saveJSON = async (JSONText: string, name: string): Promise<void> => {
  const ROOT_PATH = process.cwd()
  const filePath = path.join(ROOT_PATH, `data/${name}.json`)
  await writeFile(filePath, JSONText, 'utf-8')
  console.log(`Created ${name} JSON`)
}
