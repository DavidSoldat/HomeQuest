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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { editProperty } from '../_lib/actions';
import { editPropertySchema } from '../_lib/validations';
import toast from 'react-hot-toast';

export default function ModalProp({ agents, property, open, handleClose }) {
  const {
    address,
    city,
    bedrooms,
    bathrooms,
    sqmeter,
    price,
    agentId,
    soldDate,
  } = property;

  const form = useForm({
    resolver: zodResolver(editPropertySchema),
    defaultValues: {
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

  async function handleSubmit(values) {
    try {
      await editProperty(values, property.id);
      handleClose();
      toast.success('Property updated');
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
                onSubmit={form.handleSubmit(handleSubmit, (e) => {
                  console.log(e);
                })}
                className="space-y-8 py-4"
              >
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <Input placeholder="City" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input placeholder="Address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex w-full space-x-8">
                  <FormField
                    control={form.control}
                    name="bedrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bedrooms</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Bd" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="zero"
                            >
                              0
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="one"
                            >
                              1
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="two"
                            >
                              2
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="three"
                            >
                              3
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="four"
                            >
                              4
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="fiveOrMore"
                            >
                              5+
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="bathrooms"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bathrooms</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Ba" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="zero"
                            >
                              0
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="one"
                            >
                              1
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="two"
                            >
                              2
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="three"
                            >
                              3
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="four"
                            >
                              4
                            </SelectItem>
                            <SelectItem
                              className="cursor-pointer hover:bg-gray-100"
                              value="fiveOrMore"
                            >
                              5+
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="sqmeter"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sq Meters</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="sqmeters"
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
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price</FormLabel>
                        <FormControl>
                          <Input placeholder="price" type="number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex w-full space-x-8">
                  <FormField
                    control={form.control}
                    name="agentId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Agent</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select Agent" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-white">
                            {agents.map((agent) => (
                              <SelectItem
                                key={agent.id}
                                className="cursor-pointer hover:bg-gray-100"
                                value={agent.id}
                              >
                                {agent.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="soldDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sold date</FormLabel>
                        <FormControl>
                          <Input placeholder="Sold date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex justify-between">
                  <Button className="bg-blue-600 text-white" type="submit">
                    Edit Property
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
