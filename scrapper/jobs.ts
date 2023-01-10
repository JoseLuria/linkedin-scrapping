import 'dotenv/config'
import { PROPERTIES_SELECTORS, SELECTOR_CONTAINER } from './selectors'
import { scrape } from './utils'
import { Job, jobSchema } from './validations'

export const getJobs = async (): Promise<Job[]> => {
  const $ = await scrape(
    'https://www.linkedin.com/jobs/search?keywords=React&location=M%C3%A9xico&geoId=103323778&f_TPR=r86400&f_WT=2&currentJobId=3428126698&position=4&pageNum=0'
  )

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
