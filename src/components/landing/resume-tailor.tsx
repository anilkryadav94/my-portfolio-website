"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import { generateTailoredResume, type State } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Clipboard, ClipboardCheck, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90 md:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Bot className="mr-2 h-4 w-4" />}
      {pending ? "Generating..." : "Generate Tailored Content"}
    </Button>
  );
}

export default function ResumeTailor() {
    const initialState: State = { message: null, errors: {} };
    const [state, dispatch] = useFormState(generateTailoredResume, initialState);
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();
    const resultRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (state.message && state.errors) {
            toast({
                title: "Error",
                description: state.message,
                variant: "destructive",
            });
        }
        if (state.tailoredContent) {
            resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [state, toast]);

    const handleCopy = () => {
        if (state.tailoredContent) {
            navigator.clipboard.writeText(state.tailoredContent);
            setCopied(true);
            toast({ title: "Copied to clipboard!"});
            setTimeout(() => setCopied(false), 2000);
        }
    };

  return (
    <section id="resume-tailor" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-headline text-3xl font-bold text-center mb-2 text-primary">AI Resume Tailor</h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
            Paste a job description below, and my AI assistant will tailor a cover letter or summary of qualifications based on my resume.
        </p>
        <Card>
            <form action={dispatch}>
                <CardHeader>
                    <CardTitle>Generator</CardTitle>
                    <CardDescription>Provide a job description to get started.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid w-full gap-2">
                        <Label htmlFor="jobDescription">Job Description</Label>
                        <Textarea id="jobDescription" name="jobDescription" placeholder="Paste the full job description here..." rows={10} required/>
                        {state.errors?.jobDescription && <p className="text-sm font-medium text-destructive">{state.errors.jobDescription[0]}</p>}
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton />
                </CardFooter>
            </form>
        </Card>

        {state.tailoredContent && (
            <div ref={resultRef} className="mt-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Generated Content</CardTitle>
                         <Button variant="ghost" size="icon" onClick={handleCopy}>
                            {copied ? <ClipboardCheck className="h-5 w-5 text-primary" /> : <Clipboard className="h-5 w-5" />}
                            <span className="sr-only">Copy</span>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <pre className="whitespace-pre-wrap rounded-md bg-secondary/50 p-4 font-body text-sm">
                            {state.tailoredContent}
                        </pre>
                    </CardContent>
                </Card>
            </div>
        )}
      </div>
    </section>
  );
}
