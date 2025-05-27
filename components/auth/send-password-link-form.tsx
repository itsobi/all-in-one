'use client';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { forgetPassword } from '@/lib/authClient';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Thisisatest123

const formSchema = z.object({
  email: z.string().email(),
});

export function SendPasswordLinkForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    const { error } = await forgetPassword({
      email: values.email,
      redirectTo: '/reset-password',
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    form.reset();
    toast.success('Password reset email sent');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Send reset link
        </Button>
      </form>
    </Form>
  );
}
