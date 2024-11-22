import { createTRPCRouter } from "../trpc";
import { authRouter } from "./auth";

export const userRouter = createTRPCRouter({
  auth: authRouter,
});