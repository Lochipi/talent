import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const coursesData = await ctx.db.course.findMany({
      orderBy: { createdAt: "desc" },
    });
    return coursesData;
  }),
});
