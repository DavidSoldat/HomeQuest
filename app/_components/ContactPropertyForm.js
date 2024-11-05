'use client';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Button } from '../_components/Button';
import { ContactPropertySchema } from '../_lib/validations';

export default function ContactPropertyForm({ property }) {
  const form = useForm({
    resolver: zodResolver(ContactPropertySchema),
    defaultValues: {
      email: '',
      name: '',
      message: `I am interested in ${property.address}, ${property.city}`,
      financingInfo: true,
    },
  });

  async function onSubmit(data) {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        toast.success('Message sent');
        form.reset();
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to send message, please try again.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="h-fit space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter a email"
                  className="bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Message <span className="text-gray-500">(optional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full resize-none bg-gray-50"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="financingInfo"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3 space-y-0 rounded-md border bg-gray-50 p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className={`h-5 w-5 rounded border-gray-300 ${
                    field.value
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>I want financing information</FormLabel>
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="w-full bg-blue-700 text-white"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Sending message...' : 'Send message'}
        </Button>
      </form>
    </Form>
  );
}
