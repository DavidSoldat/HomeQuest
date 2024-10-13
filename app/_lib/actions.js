'use server';

import { auth, signIn } from '@/auth';
import { revalidatePath, unstable_cache } from 'next/cache';
import prisma from './prisma';
import { deleteFile } from './storage';
import { addAgentSchema, updateProfileSchema } from './validations';

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

  const {
    name,
    email,
    image,
    bio,
    company,
    type,
    rating,
    rangeLower,
    rangeUpper,
  } = addAgentSchema.parse(values);

  try {
    await prisma.agent.create({
      data: {
        name,
        email,
        image,
        company,
        type,
        rating,
        bio,
        rangeLower,
        rangeUpper,
      },
    });
    revalidatePath('/agents');
    revalidatePath('/admin');
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

export const getAgent = async (agentId) => {
  try {
    return await prisma.agent.findUnique({
      where: {
        id: agentId,
      },
      include: {
        properties: true,
      },
    });
  } catch (error) {
    throw new Error('Error fetching agents: ' + error.message);
  }
};

export async function editAgent(values, agentId) {
  const { name, email, type, rating, company, rangeLower, rangeUpper } = values;

  try {
    await prisma.agent.update({
      where: {
        id: agentId,
      },
      data: {
        name,
        email,
        company,
        type,
        rating,
        rangeLower,
        rangeUpper,
      },
    });
    revalidatePath('/agents');
    revalidatePath('/admin/manageagents');
  } catch (error) {
    throw new Error('Error updating agent: ' + error.message);
  }
}

export async function addProperty(values) {
  const {
    address,
    city,
    bedrooms,
    bathrooms,
    sqmeter,
    price,
    images,
    agentId,
    soldDate,
    lat,
    lng,
  } = values;

  try {
    await prisma.property.create({
      data: {
        address,
        bedrooms,
        bathrooms,
        sqmeter,
        city,
        price,
        images,
        agent: {
          connect: { id: agentId },
        },
        soldDate,
        lat,
        lng,
      },
    });
    console.log('Success');
    revalidatePath('/admin/managelistings');
  } catch (error) {
    throw new Error('Error adding property: ' + error.message);
  }
}

export async function getProperties() {
  try {
    return await prisma.property.findMany();
  } catch (error) {
    throw new Error('Error fetching properties: ' + error.message);
  }
}

export const getProperty = async (propertyId) => {
  try {
    return await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
    });
  } catch (error) {
    throw new Error('Error fetching property: ' + error.message);
  }
};

export const getAgentsProperties = async (agentId) => {
  console.log(agentId);
  try {
    const properties = await prisma.property.findMany({
      where: {
        agentId: agentId,
      },
    });

    if (!properties.length) {
      return [];
    }

    return properties;
  } catch (error) {
    console.error('Error fetching properties:', error);
    throw new Error('Error fetching properties: ' + error.message);
  }
};

export async function deleteProperty(propertyId) {
  try {
    const property = await prisma.property.findUnique({
      where: {
        id: propertyId,
      },
      select: {
        images: true,
      },
    });

    if (!property) {
      console.warn(`Property with ID ${propertyId} does not exist.`);
      throw new Error('Property not found');
    }

    if (property.images && property.images.length > 0) {
      for (let i = 0; i < property.images.length; i++) {
        const path = property.images[i].split('/o/')[1]?.split('?')[0];
        if (path) {
          const decodedPath = decodeURIComponent(path);
          try {
            await deleteFile(decodedPath);
            console.log(`Successfully deleted: ${decodedPath}`);
          } catch (error) {
            console.error(`Failed to delete ${decodedPath}:`, error);
          }
        } else {
          console.warn(`No valid path found for image at index ${i}`);
        }
      }
    } else {
      console.log('No images to delete for this property.');
    }

    await prisma.property.delete({
      where: {
        id: propertyId,
      },
    });

    revalidatePath('/admin/managelistings');
  } catch (error) {
    console.error('Error deleting property:', error);
    throw new Error('Failed to delete property');
  }
}

export async function editProperty(values, propertyId) {
  const {
    address,
    city,
    bedrooms,
    bathrooms,
    sqmeter,
    price,
    agentId,
    soldDate,
  } = values;

  try {
    await prisma.property.update({
      where: {
        id: propertyId,
      },
      data: {
        address,
        city,
        bedrooms,
        bathrooms,
        sqmeter,
        price,
        agentId,
        soldDate,
      },
    });
    revalidatePath('/admin/managelistings');
  } catch (error) {
    throw new Error('Error updating property: ' + error.message);
  }
}
