'use server';

import { auth, signIn } from '@/auth';
import { addAgentSchema, updateProfileSchema } from './validations';
import { revalidatePath } from 'next/cache';
import prisma from './prisma';

export async function signInGoogle() {
  await signIn('google');
}
export async function signInGithub() {
  await signIn('github');
}
export async function signInSendgrid(data) {
  await signIn('sendgrid', data);
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

export async function addAgent(values) {
  const session = await auth();
  const user = session?.user;

  console.log(user);

  const { name, email, image, type, rating } = addAgentSchema.parse(values);

  await prisma.agent.create({
    data: {
      name,
      email,
      image,
      type,
      rating,
    },
  });
  revalidatePath('/');
}

export async function getAgents() {
  const agents = await prisma.agent.findMany();

  revalidatePath('/agents');
  return agents;
}
