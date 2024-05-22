import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";

export const newsRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      const newsData = await ctx.db.news.findMany({
        orderBy: { createdAt: "desc" },
      });
      return newsData;
    } catch (error) {
      console.log("Error while fetching news:", error);
    }
  }),
});
