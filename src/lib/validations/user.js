import * as z from "zod";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const UserValidation = z.object({
  firstname: z.string().min(2).max(30),
  lastname: z.string().min(2).max(30),
  phone_number: z.string().min(5).max(20),
  email: z.string().regex(emailRegex).min(5).max(100),
  password: z.string().regex(passwordRegex).min(8).max(30),
  dob: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});
