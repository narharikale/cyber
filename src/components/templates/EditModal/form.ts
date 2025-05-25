import type { User } from "@/types/user";
import { z } from "zod";

export const formSchema = z.object({
  id: z.number(),
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  username: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone: z.string(),
  website: z.string().min(6, {
    message: "name must be at least 2 characters.",
  }),
});


export const getDefaultValues = (data: User) => {
  return {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    phone: data.phone,
    website: data.website,
  };
};

export type FormSchema = z.infer<typeof formSchema>;
