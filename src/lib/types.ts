import { z } from "zod";

export const schema = z.object({
  names: z.object({
    firstName: z.string().min(1, "First Name is required"),
    lastName: z.string().min(1, "Last Name is required"),
  }),
  email: z
    .string()
    .nonempty("Email field is required!")
    .email("Invalid email address"),
  phoneNumber: z
    .number({
      required_error: "required field",
      invalid_type_error: "Invalid phone number",
    })
    .min(5, "Phone number must be at least 5 characters")
    .max(11, "Phone number must be at most 11 characters"),
  bio: z.string().min(1, "Update your bio with something about yourself"),
  socials: z.object({
    linkedin: z
      .string()
      .url()
      .includes("linkedin.com", { message: "Invalid LinkedIn URL" }),
    github: z
      .string()
      .url("Invalid GitHub URL")
      .includes("github.com", { message: "Invalid GitHub URL" }),
  }),
  skills: z.array(z.string()).min(1, "Add at least one skill"),
});
