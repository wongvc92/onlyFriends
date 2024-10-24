import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  code: z.optional(z.string()),
});

export type TSignInSchema = z.infer<typeof signInSchema>;
