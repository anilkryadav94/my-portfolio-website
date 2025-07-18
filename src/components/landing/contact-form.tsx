"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
);

export default function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema)
    });

    const myWhatsApp = "7011553054";

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setIsSubmitting(true);
        
        const messageBody = encodeURIComponent(
          `Hi Anil,\n\nI got your number from your portfolio website.\n\nMessage:\n${data.message}\n\nThanks,\nName: ${data.name}\nEmail: ${data.email}`
        );
        
        const whatsappUrl = `https://wa.me/${myWhatsApp}?text=${messageBody}`;

        // Open user's WhatsApp
        window.location.href = whatsappUrl;
        
        // Simulate a short delay to allow WhatsApp to open
        await new Promise(resolve => setTimeout(resolve, 500));

        toast({
            title: "Redirecting to WhatsApp!",
            description: "Your message is ready to be sent.",
        });
        
        reset();
        setIsSubmitting(false);
    };
    
    return (
         <section id="contact" className="bg-secondary/50 py-20">
            <div className="container mx-auto max-w-2xl px-4">
                 <h2 className="font-headline text-3xl font-bold text-center mb-2 text-primary">Contact Me</h2>
                 <p className="mx-auto mb-12 text-center text-muted-foreground">Have a question or want to work together? Drop me a line.</p>
                <Card>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CardHeader>
                            <CardTitle>Send me a WhatsApp Message</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name")} />
                                {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Your Email</Label>
                                <Input id="email" type="email" {...register("email")} placeholder="So I can reply to you" />
                                {errors.email && <p className="text-sm font-medium text-destructive">{errors.email.message}</p>}
                            </div>
                             <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea id="message" {...register("message")} rows={5} />
                                {errors.message && <p className="text-sm font-medium text-destructive">{errors.message.message}</p>}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button type="submit" disabled={isSubmitting} className="bg-accent text-accent-foreground hover:bg-accent/90">
                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <WhatsAppIcon className="mr-2 h-4 w-4" />}
                                {isSubmitting ? "Redirecting..." : "Send via WhatsApp"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </section>
    );
}
