import { CreateModuleSchema } from "~/server/validator/module";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  generate: protectedProcedure
    .input(CreateModuleSchema)
    .mutation(async ({input, ctx}) => {
      
    }),
});
