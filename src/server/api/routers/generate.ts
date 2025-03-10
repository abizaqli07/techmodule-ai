import {
  CreateModuleSchema,
  GetOneModuleSchema,
} from "~/server/validator/module";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { GeneratePrompt } from "~/lib/generatePrompt";
import { TRPCError } from "@trpc/server";
import { generated } from "~/server/db/schema";

export const generateRouter = createTRPCRouter({
  generateModule: protectedProcedure
    .input(CreateModuleSchema)
    .mutation(async ({ input, ctx }) => {
      const inputPrompt = GeneratePrompt(input);
      const userId = ctx.session.user.id;

      try {
        const completion1 = await ctx.openai.chat.completions.create({
          model: "chatgpt-4o-latest",
          max_completion_tokens: 3000,
          messages: [
            {
              role: "developer",
              content:
                "Anda adalah seorang asisten guru yang sangat membantu dalam proses perencanaan pembelajaran dan pembuatan modul ajar.",
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: inputPrompt.prompt1,
                },
              ],
            },
          ],
          store: true,
        });

        const completion2 = await ctx.openai.chat.completions.create({
          model: "chatgpt-4o-latest",
          max_completion_tokens: 3000,
          messages: [
            {
              role: "developer",
              content:
                "Anda adalah seorang asisten guru yang sangat membantu dalam proses perencanaan pembelajaran dan pembuatan modul ajar.",
            },
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: inputPrompt.prompt2,
                },
              ],
            },
          ],
          store: true,
        });

        try {
          const toInsertData: typeof generated.$inferInsert = {
            userId: userId,
            title: input.title,
            class: input.class,
            subject: input.subjects,
            message1: completion1.choices[0]?.message.content ?? "",
            message2: completion2.choices[0]?.message.content ?? "",
            message3: "",
            message4: "",
          };

          const insert = await ctx.db
            .insert(generated)
            .values(toInsertData)
            .returning();

          return insert[0]?.id;
        } catch (error) {
          throw new TRPCError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Database error, gagal menyimpan modul",
            cause: error,
          });
        }
      } catch (error) {
        throw new TRPCError({
          code: "UNPROCESSABLE_CONTENT",
          message: "Modul gagal digenerasi, terdapat error pada AI",
          cause: error,
        });
      }
    }),
  getOne: protectedProcedure
    .input(GetOneModuleSchema)
    .query(async ({ input, ctx }) => {
      try {
        const generate = await ctx.db.query.generated.findFirst({
          where: (generated, { eq }) => eq(generated.id, input.id),
        });

        return generate;
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Server error, Modul tidal dapat ditampilkan.",
          cause: error,
        });
      }
    }),
  getAll: protectedProcedure.query(async ({ ctx }) => {
    try {
      const generate = await ctx.db.query.generated.findMany({
        where: (generated, { eq }) => eq(generated.userId, ctx.session.user.id),
        columns: {
          id: true,
          class: true,
          title: true,
          subject: true,
          createdAt: true,
        },
      });

      return generate;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Server error, Modul tidak dapat ditampilkan.",
        cause: error,
      });
    }
  }),
  getOverview: protectedProcedure.query(async ({ ctx }) => {
    try {
      const generate = await ctx.db.query.generated.findMany({
        where: (generated, { eq }) => eq(generated.userId, ctx.session.user.id),
        columns: {
          id: true,
          class: true,
          title: true,
          subject: true,
          createdAt: true,
        },
        limit: 6
      });

      return generate;
    } catch (error) {
      console.log(error);
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Server error, Modul tidak dapat ditampilkan.",
        cause: error,
      });
    }
  }),
});
