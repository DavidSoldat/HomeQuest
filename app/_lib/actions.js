'use server';

import { auth, signIn } from '@/auth';
import { updateProfileSchema } from './validations';
import { revalidatePath } from 'next/cache';
import prisma from './prisma';

export async function signInGoogle() {
  await signIn('google');
}
export async function signInGithub() {
  await signIn('github');
}

export async function updateProfile(values) {
  const session = await auth();
  const userId = session?.user?.id;

  if (!userId) throw Error('Unauthorized');

  const { name } = updateProfileSchema.parse(values);

  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name,
    },
  });
  revalidatePath('/');
}
