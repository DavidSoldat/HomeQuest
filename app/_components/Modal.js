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
import { editAgentSchema } from '../_lib/validations';
import { editAgent } from '../_lib/actions';
import toast from 'react-hot-toast';

export default function ModalComponent({ agent, open, handleClose }) {
  const { name, email, type, rating } = agent;
  const form = useForm({
    resolver: zodResolver(editAgentSchema),
    defaultValues: {
      name: name,
      email: email,
      type: type,
      rating: rating,
    },
  });
  async function onSubmit(values) {
    try {
      await editAgent(values, agent.id);
      handleClose();
      toast.success('Agent updated');
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="z-10 w-2/3 rounded-lg bg-white p-6 shadow-lg lg:w-2/5">
            <h2 className="mb-4 text-xl font-bold">Edit agent</h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
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
                <div className="flex justify-between">
                  <Button className="bg-blue-600 text-white" type="submit">
                    Submit
                  </Button>
                  <Button
                    className="rounded bg-red-600 text-white"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
