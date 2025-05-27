import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './db/schema', // This will pick up all .ts files in the schema folder
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.CONNECTION_STRING!,
  },
});
