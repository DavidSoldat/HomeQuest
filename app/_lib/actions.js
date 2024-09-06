'use server';

import { auth, signIn } from '@/auth';
import { addAgentSchema, updateProfileSchema } from './validations';
import { revalidatePath, unstable_cache } from 'next/cache';
import prisma from './prisma';
import { deleteFile } from './storage';

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

export async function deleteAgent(agentId) {
  try {
    const agent = await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
      select: {
        image: true,
      },
    });

    const path = agent.image.split('/o/')[1]?.split('?')[0];
    const decodedPath = decodeURIComponent(path);
    console.log(decodedPath);
    await deleteFile(decodedPath);

    await prisma.agent.delete({
      where: {
        id: agentId,
      },
    });

    revalidatePath('/admin/manageagents');
  } catch (error) {
    console.error('Error deleting agent:', error);
  }
}

export const getAgents = unstable_cache(
  async () => {
    return await prisma.agent.findMany();
  },
  revalidatePath('/agents'),
  revalidatePath('/admin/manageagents'),
);

export async function editAgent(values, agentId) {
  let { name, email, type, rating } = values;
  await prisma.agent.update({
    where: {
      id: agentId,
    },
    data: {
      name: name,
      email: email,
      type: type,
      rating: rating,
    },
  });

  revalidatePath('/agents'), revalidatePath('/admin/manageagents');
}
