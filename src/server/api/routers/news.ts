import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const newsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const newsData = await ctx.db.news.findMany({
      orderBy: { createdAt: "desc" },
    });
    return newsData;
  }),
});
