'use client';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../_components/Button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { updateProfileSchema } from '../_lib/validations';
import { updateProfile } from '../_lib/actions';
import { useSession } from 'next-auth/react';

export default function SettingsPage({ user }) {
  const session = useSession();

  const form = useForm({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: { name: user.name || '' },
  });

  async function onSubmit(data) {
    try {
      await updateProfile(data);
      session.update();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main className="w-full px-4 py-8 md:max-w-6xl lg:mx-auto">
      <section className="space-y-6">
        <h1 className="text-primary-darkGray text-2xl font-semibold leading-tight">
          Settings
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="max-w-sm space-y-2.5"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter a username"
                      className="bg-gray-50"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Your public username</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="bg-blue-700 text-white"
              disabled={form.formState.isSubmitting}
            >
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
