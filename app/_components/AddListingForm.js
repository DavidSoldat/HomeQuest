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
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { addProperty } from '../_lib/actions';
import { uploadFile } from '../_lib/storage';
import { addPropertySchema } from '../_lib/validations';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import getLatLng from '../_lib/helpers';

export default function AddListingForm({ agents }) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const filesArray = Array.from(e.target.files);
    setImages(filesArray);
  };

  async function handleSubmit(values) {
    setIsLoading(true);
    const folder = `properties/${Date.now()}/`;
    const uploadedImages = [];

    for (let i = 0; i < images.length; i++) {
      const file = images[i];
      const imageUrl = await uploadFile(file, folder);
      uploadedImages.push(imageUrl);
    }

    const { lat, lng } = await getLatLng(values.address, values.city);

    const newValues = {
      ...values,
      images: uploadedImages,
      sqmeter: parseInt(values.sqmeter, 10),
      price: parseInt(values.price, 10),
      lat,
      lng,
    };

    try {
      await addPropertySchema.parseAsync(newValues);
      await addProperty(newValues);
      toast.success('New listing added');

      form.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    } catch (error) {
      console.error('Validation errors:', error);
      if (error instanceof z.ZodError) {
        console.error('Zod Validation Errors:', error.errors);
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const form = useForm({
    resolver: zodResolver(addPropertySchema),
    defaultValues: {
      address: '',
      city: '',
      bedrooms: '',
      bathrooms: '',
      sqmeter: '',
      price: '',
      images: [],
      agentId: '',
      soldDate: '',
    },
  });

  return (
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
                <Select onValueChange={field.onChange} value={field.value}>
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
                <Select onValueChange={field.onChange} value={field.value}>
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
                  <Input placeholder="sqmeters" type="number" {...field} />
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
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Property Images</FormLabel>
              <FormControl>
                <Input
                  placeholder="image"
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="cursor-pointer"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full space-x-8">
          <FormField
            control={form.control}
            name="agentId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Agent</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
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

        <Button className="bg-blue-600 text-white" type="submit">
          {isLoading ? 'Adding property...' : 'Add property'}
        </Button>
      </form>
    </Form>
  );
}
