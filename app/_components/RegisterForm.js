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
import { RegisterFormSchema } from '../_lib/validations';
import { Button } from './Button';

export default function RegisterForm() {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: { name: '', email: '', password: '' },
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
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder='Enter a name'
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
        <div className='px-5 flex flex-col gap-0.5 pt-1'>
          <p className='text-gray-500 text-xs'>At least 8 characters</p>
          <p className='text-gray-500 text-xs'>Mix of letters and numbers</p>
          <p className='text-gray-500 text-xs'>At least 1 special character</p>
          <p className='text-gray-500 text-xs'>
            At least 1 lowercase letter and 1 uppercase letter
          </p>
        </div>
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
