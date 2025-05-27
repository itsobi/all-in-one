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
import { resetPassword } from '@/lib/auth-client';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Thisisatest123

const formSchema = z.object({
  newPassword: z.string().min(8),
});

export function ResetPasswordForm({ token }: { token: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { error } = await resetPassword({
      newPassword: values.newPassword,
      token,
    });

    if (error) {
      toast.error(error.message);
      return;
    }
    form.reset();
    toast.success('Password reset successfully');
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input type="password" placeholder="New Password" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
