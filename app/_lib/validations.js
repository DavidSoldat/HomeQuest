import { z } from 'zod';

export const LoginFormSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email' }).trim(),
});

export const updateProfileSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long' }),
});

export const addAgentSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Please enter a valid email' }).trim(),
    image: z.string(),
    type: z.enum(['team', 'agent']),
    rating: z.preprocess((val) => Number(val), z.number().min(1).max(5)),
    rangeLower: z.preprocess((val) => Number(val), z.number()),
    rangeUpper: z.preprocess((val) => Number(val), z.number()),
  })
  .refine((data) => data.rangeLower < data.rangeUpper, {
    message: 'Lower price must be smaller than upper price',
    path: ['rangeLower'],
  });

export const editAgentSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Please enter a valid email' }).trim(),
    type: z.enum(['team', 'agent']),
    rating: z.preprocess((val) => Number(val), z.number().min(1).max(5)),
    rangeLower: z.preprocess((val) => Number(val), z.number()),
    rangeUpper: z.preprocess((val) => Number(val), z.number()),
  })
  .refine((data) => data.rangeLower < data.rangeUpper, {
    message: 'Lower price must be smaller than upper price',
    path: ['rangeLower'],
  });
