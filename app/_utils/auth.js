import { SignupFormSchema } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';

export async function signup(state, formData) {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
}
