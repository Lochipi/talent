import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { newsRouter } from "./routers/news";
import { coursesRouter } from "./routers/courses";
import { applicationRouter } from "./routers/application";
import { profileRouter } from "./routers/profile";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  news: newsRouter,
  courses: coursesRouter,
  courseApply: applicationRouter,
  profileUpdate: profileRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);
