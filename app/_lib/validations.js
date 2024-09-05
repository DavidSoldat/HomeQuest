import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
});

const type = ['team', 'agent'];

export const addAgentSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
  image: z.string(),
  type: z.enum(type),
  rating: z.preprocess((val) => Number(val), z.number().min(1).max(5)),
});
