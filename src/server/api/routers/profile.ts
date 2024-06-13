// server/api/routers/profileRouter.ts
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  updateProfile: publicProcedure
    .input(
      z.object({
        firstName: z.string().nonempty("First Name is required"),
        lastName: z.string().nonempty("Last Name is required"),
        email: z
          .string()
          .nonempty("Email is required")
          .email("Invalid email address"),
        phoneNumber: z.string().nonempty("Phone Number is required"),
        bio: z.string().optional(),
        linkedIn: z.string().url("Invalid LinkedIn URL").optional(),
        github: z.string().url("Invalid GitHub URL").optional(),
        skills: z.array(z.string()).optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      const userId = ctx.session?.user.id;

      if (!userId) {
        throw new Error("Not authenticated");
      }

      const profileData = {
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        phone: input.phoneNumber,
        bio: input.bio,
        image: "",
        userId,
      };

      const socialProfileData = {
        linkedin: input.linkedIn!,
        github: input.github!,
        userId,
      };

      const skillsData =
        input.skills?.map((skill) => ({
          skill,
          userId,
        })) ?? [];

      await ctx.db.profile.upsert({
        where: { userId },
        update: profileData,
        create: profileData,
      });

      await ctx.db.socialProfile.upsert({
        where: { userId },
        update: socialProfileData,
        create: socialProfileData,
      });

      await ctx.db.skills.deleteMany({
        where: { userId },
      });

      await ctx.db.skills.createMany({
        data: skillsData,
      });

      return { success: true, message: "Profile updated successfully" };
    }),
});
