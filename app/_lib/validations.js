import { z } from 'zod';

export const RegisterFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  password: z
    .string()
    .min(8, { message: 'At least 8 characters' })
    .regex(/^(?=.*[a-zA-Z])(?=.*\d).+$/, {
      message: 'Mix of letters and numbers',
    })
    .regex(/^(?=.*[a-z])(?=.*[A-Z]).+$/, {
      message: 'At least 1 lowercase letter and 1 uppercase letter',
    })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'At least 1 special character',
    })
    .trim(),
});

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  password: z.string().min(8, { message: 'At least 8 characters' }).trim(),
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
});
