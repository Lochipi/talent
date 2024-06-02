import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coursesRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const coursesData = await ctx.db.course.findMany({
      orderBy: { createdAt: "desc" },
    });
    return coursesData;
  }),
  getCount: publicProcedure.query(async ({ ctx }) => {
    const coursesCount = await ctx.db.course.count();
    return coursesCount;
  }),
  getOne: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input, ctx }) => {
      const courseData = await ctx.db.course.findFirst({
        where: { id: input.id },
      });
      return courseData;
    }),
  getCoursesWithMembers: publicProcedure.query(async ({ ctx }) => {
    const coursesWithMembers = await ctx.db.course.findMany({
      select: {
        id: true,
        title: true,
        enrolled: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return coursesWithMembers;
  }),
  getCoursesAppliedByUser: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input, ctx }) => {
      const userCourses = await ctx.db.course.findMany({
        where: {
          enrolled: {
            some: {
              id: input.userId,
            },
          },
        },
        select: {
          id: true,
          title: true,
          enrolled: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      return userCourses;
    }),
});
