import { z } from "zod"

export const CreateModuleSchema = z.object({
  name: z.string().min(1, {
    message: "Name cannot be blank"
  }),
  phase: z.string(),
})