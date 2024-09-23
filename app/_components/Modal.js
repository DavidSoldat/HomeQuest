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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function ModalComponent({ agent, open, handleClose }) {
  const { name, email, type, rating, company, rangeLower, rangeUpper } = agent;
  const form = useForm({
    resolver: zodResolver(editAgentSchema),
    defaultValues: {
      name: name,
      email: email,
      type: type,
      company: company,
      rating: rating,
      rangeLower: rangeLower,
      rangeUpper: rangeUpper,
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

                <div className="flex w-full space-x-8">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Company" {...field} />
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
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
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
                </div>

                <div className="flex w-full space-x-8">
                  <FormField
                    control={form.control}
                    name="rating"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Agent Rating</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Rating"
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
