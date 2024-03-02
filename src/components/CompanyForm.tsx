'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
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
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import Placeholder from '../assets/images/placeholder.png';
import Image from 'next/image';
import { EMPLOYEE_COUNT } from '@/app-constants';

const FormSchema = z.object({
  photo: z
    .string({
      required_error: 'Please select image',
    })
    .min(1, { message: 'Please select image' }),
  name: z.string().min(3, {
    message: 'Company name must be at least 3 characters.',
  }),
  website: z.string().min(3, {
    message: 'Website must be at least 3 characters.',
  }),
  linkedin: z.string().min(3, {
    message: 'Linkedin must be at least 3 characters.',
  }),
  industry: z.string().min(3, {
    message: 'Industry must be at least 2 characters.',
  }),
  employee_count: z
    .string({
      required_error: 'Please select number of employees',
    })
    .min(1, { message: 'Please select number of employees' }),
  description: z.string().min(3, {
    message: 'Description must be at least 3 characters.',
  }),
});

type FormValues = z.infer<typeof FormSchema>;

const defaultValues: FormValues = {
  name: '',
  linkedin: '',
  website: '',
  industry: '',
  employee_count: '',
  photo: '',
  description: '',
};

export default function CompanyForm() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues,
    mode: 'onChange',
  });

  function onSubmit(data: FormValues) {
    console.log({ data });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <div className='flex flex-col lg:flex-row-reverse justify-between lg:items-center'>
          <div className='grid grid-cols-2 space-x-3 mb-[30px]'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
            <Button type='submit'>Save changes</Button>
          </div>
          <FormField
            control={form.control}
            name='photo'
            render={({ field }) => (
              <FormItem className='flex justify-between space-x-4 lg:space-x-8 items-center'>
                <div>
                  <Image
                    src={Placeholder}
                    alt='placeholder'
                    height={108}
                    className='aspect-auto'
                  />
                </div>
                <div className='flex-grow'>
                  <FormControl>
                    <div className='space-x-3'>
                      <Button variant='destructive' type='button'>
                        Remove
                      </Button>
                      <Button variant='outline' type='button'>
                        Change photo
                      </Button>
                    </div>
                  </FormControl>
                  <FormDescription className='mt-3'>
                    or drag and drop (SVG, PNG, JPG)
                  </FormDescription>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>
        <div className='grid lg:grid-cols-2 space-y-custom-28 lg:space-y-0 lg:gap-6'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company’s Name</FormLabel>
                <FormControl>
                  <Input placeholder='Sixteen Inc.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='website'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company’s Website</FormLabel>
                <FormControl>
                  <Input placeholder='https://sixteen.life/' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='linkedin'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company’s Linkedin</FormLabel>
                <FormControl>
                  <Input
                    placeholder='https://www.linkedin.com/company/sixteenlife'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='industry'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company’s Industry</FormLabel>
                <FormControl>
                  <Input placeholder='Digital Wellbeing' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name='employee_count'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee Count</FormLabel>
              <FormControl>
                <div className='space-x-3'>
                  <Button type='button'>
                    {EMPLOYEE_COUNT[0]}
                  </Button>
                  {EMPLOYEE_COUNT.slice(1).map((emp, index) => (
                    <Button key={index} variant='outline' type='button'>
                      {emp}
                    </Button>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='lg:w-1/2'>
          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company description</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Redesign your digital life, reduce your screen time'
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Your detailed company description
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  );
}
