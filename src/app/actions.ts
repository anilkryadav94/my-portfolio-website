"use server";

import { tailorResume } from "@/ai/flows/tailor-resume";
import { z } from "zod";

const TailorResumeActionSchema = z.object({
  jobDescription: z.string({ required_error: "Job description is required." }).min(50, "Please provide a more detailed job description (min 50 chars)."),
  resume: z.string({ required_error: "Resume content is required." }).min(100, "Please provide your full resume content (min 100 chars)."),
});

export type State = {
  message?: string | null;
  errors?: {
    jobDescription?: string[];
    resume?: string[];
  };
  tailoredContent?: string | null;
};

export async function generateTailoredResume(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = TailorResumeActionSchema.safeParse({
    jobDescription: formData.get("jobDescription"),
    resume: formData.get("resume"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing or invalid fields. Failed to generate.",
    };
  }

  try {
    const result = await tailorResume(validatedFields.data);
    return {
      message: "Successfully generated your tailored resume!",
      tailoredContent: result.tailoredContent,
    };
  } catch (error: any) {
    console.error("Error tailoring resume:", error);
    // Check for a specific error message related to the API key.
    if (error.message && error.message.includes('API key not valid')) {
        return {
            message: "AI Error: The Google AI API key is missing or invalid. Please add your GOOGLE_API_KEY to the .env file.",
        }
    }
    return {
      message: "An unexpected error occurred. Please try again later.",
    };
  }
}
