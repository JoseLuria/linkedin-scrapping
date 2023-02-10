import { z } from 'zod'

export const jobSchema = z.object({
  title: z.string().min(1),
  company: z.string().min(1),
  location: z.string().min(1),
  image: z.string().min(1),
  link: z.string().url()
})

export type Job = z.infer<typeof jobSchema>
