'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { addAgent } from '../_lib/actions';
import { uploadFile } from '../_lib/storage';
import { addAgentSchema } from '../_lib/validations';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function AddAgent() {
  const [selectedFile, setSelectedFile] = useState(null);

  async function onSubmit(values) {
    const folder = 'agents/';
    let image = '';

    if (selectedFile) {
      image = await uploadFile(selectedFile, folder);
    }

    const newValues = {
      ...values,
      image,
    };

    try {
      await addAgent(newValues);
      toast.success('New agent added');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  const form = useForm({
    resolver: zodResolver(addAgentSchema),
    defaultValues: {
      name: '',
      email: '',
      image: '',
      type: '',
      rating: '',
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Image</FormLabel>
              <FormControl>
                <Input
                  placeholder="image"
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Type</FormLabel>
              <FormControl>
                <Input placeholder="Team/Agent" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Agent Rating</FormLabel>
              <FormControl>
                <Input placeholder="Rating" type="number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="bg-blue-600 text-white" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
