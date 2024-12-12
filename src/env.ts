import { z } from 'zod';

const CLERK_DOCS_URL = 'https://dashboard.clerk.com/last-active?path=api-keys';

const envSchema = z.object({
  VITE_CLERK_PUBLISHABLE_KEY: z.string()
    .min(1)
    .refine((key) => {
      if (!key.startsWith('pk_test_') && !key.startsWith('pk_live_')) {
        throw new Error(
          `Invalid Clerk Publishable Key format.\n` +
          `The key must start with "pk_test_" or "pk_live_".\n` +
          `Please check your key at:\n${CLERK_DOCS_URL}`
        );
      }
      return true;
    })
});

const parsed = envSchema.safeParse({
  VITE_CLERK_PUBLISHABLE_KEY: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
});

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    JSON.stringify(parsed.error.format(), null, 2)
  );
  throw new Error('Invalid environment variables');
}

export const env = parsed.data;

export default env;