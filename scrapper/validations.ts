import { z } from 'zod'

const siteRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi

export const jobSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  image: z.string().min(1),
  link: z.string().regex(siteRegex)
})

export type Job = z.infer<typeof jobSchema>
