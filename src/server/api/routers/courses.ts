import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
      const coursesData = await ctx.db.course.findMany({
        orderBy: { createdAt: "desc" },
      });
      return coursesData;
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const courseData = await ctx.db.course.findFirst({
        where: { id: input.id },
      });
      return courseData;
    }),
});
