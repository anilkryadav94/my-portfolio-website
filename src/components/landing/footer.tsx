"use client";

import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto flex items-center justify-center px-4 py-4">
                <p className="text-sm text-center">
                    &copy; {new Date().getFullYear()} Anil Kumar. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
