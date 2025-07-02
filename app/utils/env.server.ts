import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.string().default("").optional(),
  DATABASE_URL: z.string().min(1, "DATABASE_URL must be set"),
  // REDIS_URL: z.string().min(1, "REDIS_URL must be set"),
  SESSION_SECRET: z.string().min(1, "SESSION_SECRET must be set"),
  SESSION_TTL: z.string().min(1, "SESSION_TTL must be set").default("7"),
});

export const env = () => envSchema.parse(process.env);
