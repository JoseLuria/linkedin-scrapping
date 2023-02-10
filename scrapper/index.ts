import { getJobs } from './jobs'
import { saveJSON } from './utils'

void (async () => {
  const jobs = await getJobs()
  const jobsString = JSON.stringify(jobs, null, 2)
  await saveJSON(jobsString, 'jobs')
})()
