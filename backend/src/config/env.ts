import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
  MONGODB_CONNECTION_STRING: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(parsed.error.format());
  throw new Error("Invalid environment variables");
}

export const ENV = parsed.data;
