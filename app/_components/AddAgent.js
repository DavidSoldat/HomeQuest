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

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function AddAgent() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(values) {
    setIsLoading(true);
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
    } finally {
      setIsLoading(false);
    }
  }

  const form = useForm({
    resolver: zodResolver(addAgentSchema),
    defaultValues: {
      name: '',
      email: '',
      image: '',
      type: '',
      rating: 0,
      rangeLower: 0,
      rangeUpper: 0,
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-4">
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of agent" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-white">
                  <SelectItem
                    className="cursor-pointer hover:bg-gray-100"
                    value="team"
                  >
                    Team
                  </SelectItem>
                  <SelectItem
                    className="cursor-pointer hover:bg-gray-100"
                    value="agent"
                  >
                    Agent
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full space-x-8">
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

          <FormField
            control={form.control}
            name="rangeLower"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lower price range </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Lower Price Range"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rangeUpper"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upper price range</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Upper Price Range"
                    type="number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="bg-blue-600 text-white" type="submit">
          {isLoading ? 'Adding Agent...' : 'Add agent'}
        </Button>
      </form>
    </Form>
  );
}
