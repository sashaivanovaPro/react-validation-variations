import { z } from "zod"

export const registrationFormSchema = z
  .object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(3, "Password must be at least 3 characters")
      .max(14, "Password cannot exceed 14 characters")
      .regex(
        /^(?=.*[A-ZА-Я])(?=.*\d).+$/,
        "Password must contain at least one uppercase letter and one number"
      ),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  })

export type RegistrationFormData = z.infer<typeof registrationFormSchema>
