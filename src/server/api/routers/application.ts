import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const applicationRouter = createTRPCRouter({
  addMemberToCourse: publicProcedure
    .input(
      z.object({
        memberId: z.string(),
        courseId: z.number(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: input.memberId },
      });

      if (!user) {
        throw new Error("User not found");
      }

      const addMember = await ctx.db.course.update({
        where: {
          id: input.courseId,
        },
        data: {
          enrolled: {
            connectOrCreate: {
              where: {
                id: user.id,
              },
              create: {
                id: user.id,
              },
            },
          },
        },
        select: {
          _count: {
            select: {
              enrolled: true,
            },
          },
        },
      });

      return addMember;
    }),
});
