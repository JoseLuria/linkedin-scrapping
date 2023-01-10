import 'dotenv/config'
import { PROPERTIES_SELECTORS, SELECTOR_CONTAINER } from './selectors'
import { scrape } from './utils'
import { Job, jobSchema } from './validations'

const URL = process.env.URL

export const getJobs = async (): Promise<Job[]> => {
  if (URL === undefined) {
    throw new Error('URL not found')
  }

  const $ = await scrape(URL)

  const jobs: Job[] = []

  $(SELECTOR_CONTAINER).each((_, el) => {
    const jobData = PROPERTIES_SELECTORS.map(({ name, selector, attr }) => {
      const res = $(el).find(selector)
      const value = attr !== undefined ? res.attr(attr) : res.text().trim()
      return [name, value]
    })

    const validate = jobSchema.safeParse(Object.fromEntries(jobData))

    if (validate.success) {
      jobs.push(validate.data)
    }
  })

  return jobs
}
