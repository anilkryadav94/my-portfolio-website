"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 py-8 md:flex-row">
                <p className="text-sm">&copy; {new Date().getFullYear()} Anil Kumar. All rights reserved.</p>
                <div className="mt-4 flex items-center space-x-1 md:mt-0">
                   <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                       <a href="mailto:anilkumaryadav747@gmail.com" aria-label="Email">
                           <Mail className="h-5 w-5" />
                       </a>
                   </Button>
                   <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                       <a href="https://www.linkedin.com/in/anil-kumar-50b363107" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                           <Linkedin className="h-5 w-5" />
                       </a>
                   </Button>
                   <Button variant="ghost" size="icon" className="hover:bg-primary-foreground/10" asChild>
                       <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                           <Github className="h-5 w-5" />
                       </a>
                   </Button>
                </div>
            </div>
        </footer>
    );
}
