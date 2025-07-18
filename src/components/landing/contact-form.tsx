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
import { Loader2, MessageSquareText } from "lucide-react";
import { useState } from "react";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Please enter a valid email address."),
    message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormInputs = z.infer<typeof contactSchema>;

export default function ContactForm() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>({
        resolver: zodResolver(contactSchema)
    });

    const myWhatsAppNumber = "7011553054";

    const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
        setIsSubmitting(true);
        
        const messageBody = `New message from your portfolio:\n\n*Name:* ${data.name}\n*Email:* ${data.email}\n\n*Message:*\n${data.message}`;
        const encodedMessage = encodeURIComponent(messageBody);
        const whatsappUrl = `https://wa.me/${myWhatsAppNumber}?text=${encodedMessage}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
        
        // Simulate a short delay to allow the new tab to open
        await new Promise(resolve => setTimeout(resolve, 500));

        toast({
            title: "Ready to Send!",
            description: "Your message is ready in WhatsApp. Just press send!",
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
                            <CardTitle>Send a Message via WhatsApp</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" {...register("name")} />
                                {errors.name && <p className="text-sm font-medium text-destructive">{errors.name.message}</p>}
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" {...register("email")} />
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
                                {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <MessageSquareText className="mr-2 h-4 w-4" />}
                                {isSubmitting ? "Redirecting..." : "Send via WhatsApp"}
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </section>
    );
}
