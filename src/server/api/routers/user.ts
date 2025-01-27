import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";
import { generateRouter } from "./generate";

export const userRouter = createTRPCRouter({
  auth: authRouter,
  generate: generateRouter
});