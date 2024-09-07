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

  if (!userId) throw new Error('Unauthorized');

  const { name } = updateProfileSchema.parse(values);

  try {
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name,
      },
    });
    revalidatePath('/');
  } catch (error) {
    throw new Error('Error updating profile: ' + error.message);
  }
}

export async function addAgent(values) {
  const session = await auth();
  const user = session?.user;

  if (!user) throw new Error('Unauthorized');

  const { name, email, image, type, rating } = addAgentSchema.parse(values);

  try {
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
  } catch (error) {
    throw new Error('Error adding agent: ' + error.message);
  }
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

    if (agent?.image) {
      const path = agent.image.split('/o/')[1]?.split('?')[0];
      const decodedPath = decodeURIComponent(path);
      console.log(decodedPath);
      await deleteFile(decodedPath);
    }

    await prisma.agent.delete({
      where: {
        id: agentId,
      },
    });

    revalidatePath('/admin/manageagents');
  } catch (error) {
    console.error('Error deleting agent:', error);
    throw new Error('Failed to delete agent');
  }
}

export const getAgents = unstable_cache(async () => {
  try {
    return await prisma.agent.findMany();
  } catch (error) {
    throw new Error('Error fetching agents: ' + error.message);
  }
});

export async function editAgent(values, agentId) {
  const { name, email, type, rating } = values;

  try {
    await prisma.agent.update({
      where: {
        id: agentId,
      },
      data: {
        name,
        email,
        type,
        rating,
      },
    });
    revalidatePath('/agents');
    revalidatePath('/admin/manageagents');
  } catch (error) {
    throw new Error('Error updating agent: ' + error.message);
  }
}
