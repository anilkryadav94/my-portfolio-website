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

const resume = `Anil Kumar
Ghaziabad, UP India

SUMMARY
Detail-oriented IP Specialist with 7+ years of experience in patent and trademark docketing, paralegal work, and process automation. Proven ability to deliver high-quality strategic solutions by leveraging a unique combination of IP expertise and technical skills. Proficient in building tools and automating workflows using Python, Django, React, Next.js, SQL, and advanced Excel (VBA/Macros). Collaborative team player with a strong ownership mentality and experience using AI tools to enhance productivity.

EXPERIENCE
- Sr. IP Specialist, Anaqua Inc. (Current, 3+ years)
- Sr. IP Analyst, Clarivate (2 years 9 months)
- Payroll Processor, Wipro Ltd. (2 years 6 months)

SKILLS
- Technical: Python, Django, React, Next.js, SQL Basics, Advance Excel (VBA, Macros), MS Access (Database, Forms)
- IP Specific: Intellectual Property Law, Patent & TM Docketing, Quality Control, Audits, Annuity & Abandonment Processing
- Other: Process Automation, AI Tools (ChatGPT), MIS Reporting
`;

const TailorResumeInputSchema = z.object({
  jobDescription: z
    .string()
    .describe('The job description to tailor the resume to.'),
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
  input: {schema: z.object({jobDescription: z.string(), resume: z.string()})},
  output: {schema: TailorResumeOutputSchema},
  prompt: `You are an expert career coach and professional resume writer. Your primary task is to create a highly tailored Professional Summary or a concise Cover Letter for a candidate based on a specific job description.

**CRITICAL INSTRUCTIONS:**
1.  **Analyze the Job Description:** First, meticulously analyze the provided Job Description. Identify the top 3-5 most critical skills, qualifications, keywords, and experiences the employer is seeking.
2.  **Review the Candidate's Resume:** Next, review the provided Resume to understand the candidate's background, skills, and accomplishments.
3.  **Synthesize and Write a NEW Summary/Letter:** Your main goal is to write a **NEW, completely tailored professional summary or a short cover letter (3-4 paragraphs)**. This new content must:
    *   Directly address the key requirements you identified from the job description.
    *   Strategically highlight the candidate's most relevant skills and experiences from their resume.
    *   Use the keywords from the job description naturally.
    *   Be written in a compelling, professional, and confident tone from the candidate's perspective.
4.  **DO NOT simply rephrase or slightly modify the summary already present in the resume.** You must generate new, unique content that creates a strong connection between the candidate and the specific job role.

**Input:**

**Job Description:**
\`\`\`
{{{jobDescription}}}
\`\`\`

---

**Candidate's Resume:**
\`\`\`
{{{resume}}}
\`\`\`

**Output:**

Return *only* the newly written, tailored content in the 'tailoredContent' field. Do not include any other text, explanations, or the rest of the resume.
  `,
});

const tailorResumeFlow = ai.defineFlow(
  {
    name: 'tailorResumeFlow',
    inputSchema: TailorResumeInputSchema,
    outputSchema: TailorResumeOutputSchema,
  },
  async input => {
    const {output} = await prompt({...input, resume});
    return output!;
  }
);
