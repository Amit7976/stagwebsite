// src/lib/bugFormSchema.ts
import { z } from "zod";

export const bugFormSchema = z.object({
  reason: z.string().min(1, "Reason is required"),
  explain: z.string().min(10, "Please provide at least 10 characters"),
  priority: z.string().min(1, "Priority is required"),
  pageUrl: z.string().url("Must be a valid URL"),
  addInfo: z.string().optional(),
  file: z
    .any()
    .refine(
      (file) =>
        !file ||
        [
          "image/jpeg",
          "image/png",
          "application/pdf",
          "video/mp4",
          "video/webm",
          "video/ogg",
        ].includes(file.type),
      "Invalid file type"
    )
    .refine(
      (file) => !file || file.size <= 10 * 1024 * 1024,
      "File size must be under 10MB"
    ),
});
