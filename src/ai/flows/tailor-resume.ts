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
  prompt: `You are an expert resume and cover letter writer.

  Given the job description and resume provided, generate a tailored cover letter or summary of qualifications highlighting the skills and experience most relevant to the specific job.

  Job Description: {{{jobDescription}}}

  Resume: {{{resume}}}

  Existing Cover Letter (if any): {{{existingCoverLetter}}}
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
