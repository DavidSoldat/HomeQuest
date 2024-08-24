'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '../_components/Button';
import { LoginFormSchema } from '../_lib/validations';

export default function SignInForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(LoginFormSchema),
    // TODO: Add default value from current user
    defaultValues: { email: '', password: '' },
  });

  async function onSubmit(data) {
    try {
      await updateProfile(data);
      toast({ description: 'Logged in' });
    } catch (error) {
      toast({
        variant: 'destructive',
        description: 'An error occurred. Please try again.',
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='max-w-sm space-y-4 mb-7'
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter a email'
                  className='bg-gray-50'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter a password'
                  className='bg-gray-50'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className='bg-blue-700 text-white w-full'
          disabled={form.formState.isSubmitting}
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}
