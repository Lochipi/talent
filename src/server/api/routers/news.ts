import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const newsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const newsData = await ctx.db.news.findMany({
      orderBy: { createdAt: "desc" },
    });
    return newsData;
  }),
  getCount: publicProcedure.query(async ({ ctx }) => {
    const newsCount = await ctx.db.news.count();
    return newsCount;
  }),
});
