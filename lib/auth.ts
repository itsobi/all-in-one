import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '@/db';
import * as schema from '@/db/schema/auth';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema,
  }),
  socialProviders: {
    google: {
      prompt: 'select_account',
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url, token }, request) => {
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // TODO: use real domain in future
        to: process.env.PERSONAL_EMAIL as string, // TODO: use user's email in future
        subject: 'Reset your password',
        html: `<p>Click <a href="${url}" target="_blank">here</a> to reset your password</p>`,
      });
    },
  },
  emailVerification: {
    autoSignInAfterVerification: false,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url, token }, request) => {
      console.log('user:', user);
      await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>', // TODO: use real domain in future
        to: process.env.PERSONAL_EMAIL as string, // TODO: use user's email in future
        subject: 'Verify your email',
        html: `<p>Click <a href="${url}" target="_blank">here</a> to verify your email</p>`,
      });
    },
  },
});
