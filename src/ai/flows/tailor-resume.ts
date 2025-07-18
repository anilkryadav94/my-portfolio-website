'use server';

/**
 * @fileOverview AI-powered tool to tailor a cover letter or summary of qualifications based on user-provided job description text.
 *
 * - tailorResume - A function that handles the resume tailoring process.
 * - TailorResumeInput - The input type for the tailorResume function.
 * - TailorResumeOutput - The return type for the tailorResume function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TailorResumeInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume to.'),
  resume: z.string().describe('The user provided resume text.'),
  existingCoverLetter: z
    .string()
    .optional()
    .describe(
      'The existing cover letter if there is one, to be improved upon.'
    ),
});
export type TailorResumeInput = z.infer<typeof TailorResumeInputSchema>;

const TailorResumeOutputSchema = z.object({
  tailoredContent: z.string().describe('The tailored cover letter or summary of qualifications.'),
});
export type TailorResumeOutput = z.infer<typeof TailorResumeOutputSchema>;

export async function tailorResume(input: TailorResumeInput): Promise<TailorResumeOutput> {
  return tailorResumeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tailorResumePrompt',
  input: {schema: TailorResumeInputSchema},
  output: {schema: TailorResumeOutputSchema},
  prompt: `You are an expert career coach and resume writer. Your task is to rewrite a professional summary for a resume to be highly tailored to a specific job description.

Analyze the provided Job Description to identify the key skills, qualifications, and keywords the employer is looking for.

Then, review the provided Resume.

Based on your analysis, rewrite the 'SUMMARY' section of the resume. The new summary should be a concise, powerful paragraph that directly addresses the requirements from the job description, using the candidate's existing skills and experience. It must be written from the candidate's perspective.

Return *only* the rewritten summary as the tailoredContent. Do not include the rest of the resume.

Job Description:
{{{jobDescription}}}

---

Resume:
{{{resume}}}
  `,
});

const tailorResumeFlow = ai.defineFlow(
  {
    name: 'tailorResumeFlow',
    inputSchema: TailorResumeInputSchema,
    outputSchema: TailorResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
