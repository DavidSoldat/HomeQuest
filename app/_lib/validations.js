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
    company: z.string().min(2, { message: 'Please enter a company name' }),
    rangeLower: z.preprocess((val) => Number(val), z.number()),
    rangeUpper: z.preprocess((val) => Number(val), z.number()),
    bio: z
      .string()
      .min(5, { message: 'Bio must be at least 5 characters long' }),
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
    company: z.string().min(2, { message: 'Please enter a company name' }),
    rangeUpper: z.preprocess((val) => Number(val), z.number()),
    bio: z
      .string()
      .min(5, { message: 'Bio must be at least 5 characters long' }),
  })
  .refine((data) => data.rangeLower < data.rangeUpper, {
    message: 'Lower price must be smaller than upper price',
    path: ['rangeLower'],
  });

const currentYear = new Date().getFullYear();

export const addPropertySchema = z.object({
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long' }),
  address: z
    .string()
    .min(2, { message: 'Address must be at least 2 characters long' }),
  bedrooms: z.enum(['zero', 'one', 'two', 'three', 'four', 'fiveOrMore'], {
    message: 'Choose number of bedrooms',
  }),
  bathrooms: z.enum(['zero', 'one', 'two', 'three', 'four', 'fiveOrMore'], {
    message: 'Choose number of bathrooms',
  }),
  sqmeter: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input Sqare meters' }),
  ),
  price: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input price' }),
  ),
  images: z.string().array(),
  agentId: z.string(),
  soldDate: z.string().optional(),
  builtYear: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(1900, { message: 'Year must be at least 1900' })
      .max(currentYear, {
        message: `Year must not be in the future. Current year is ${currentYear}`,
      })
      .refine((year) => year < currentYear, {
        message: 'Year must be in the past',
      }),
  ),
  HOA: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input Sqare meters' }),
  ),
  propertyType: z.string({ message: 'Select type of the property' }),
  listingType: z.string({ message: 'Select type of the listing' }),
  features: z.array(z.string()),
  about: z.string({ message: 'Give us some info about this property' }),
});

export const editPropertySchema = z.object({
  city: z
    .string()
    .min(2, { message: 'City must be at least 2 characters long' }),
  address: z
    .string()
    .min(2, { message: 'Address must be at least 2 characters long' }),
  bedrooms: z.enum(['zero', 'one', 'two', 'three', 'four', 'fiveOrMore'], {
    message: 'Choose number of bedrooms',
  }),
  bathrooms: z.enum(['zero', 'one', 'two', 'three', 'four', 'fiveOrMore'], {
    message: 'Choose number of bathrooms',
  }),
  sqmeter: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input Sqare meters' }),
  ),
  price: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input price' }),
  ),
  agentId: z.string(),
  soldDate: z.string().optional(),
  builtYear: z.preprocess(
    (val) => Number(val),
    z
      .number()
      .min(1900, { message: 'Year must be at least 1900' })
      .max(currentYear, {
        message: `Year must not be in the future. Current year is ${currentYear}`,
      })
      .refine((year) => year < currentYear, {
        message: 'Year must be in the past',
      }),
  ),
  HOA: z.preprocess(
    (val) => Number(val),
    z.number({ message: 'Input Sqare meters' }),
  ),
  propertyType: z.string({ message: 'Select type of the property' }),
  listingType: z.string({ message: 'Select type of the listing' }),
  features: z.array(z.string()),
  about: z.string({ message: 'Give us some info about this property' }),
});

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at lest 3 characters long' }),
  email: z.string().email({ message: 'Input valid email' }),
  message: z.string().optional(),
});
export const ContactPropertySchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Name must be at lest 3 characters long' }),
  email: z.string().email({ message: 'Input valid email' }),
  message: z.string().optional(),
  financingInfo: z.boolean().default(true),
});
