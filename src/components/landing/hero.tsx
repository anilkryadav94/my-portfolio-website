"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

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


export default function Hero() {
  return (
    <section id="hero" className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 px-4 py-20 md:flex-row md:py-32">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Anil Kumar
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          IP Professional | Data and Automation Enthusiast | Python, Django, SQL, JS, React, HTML, CSS, MS Power platform | Lifelong Learner
          </p><br></br><p>Built this responsive web page using Firebase Studio, Google’s AI-driven development environment, showcasing my ability to leverage AI tools for efficient full stack development and Firebase integration. 
          </p><br></br><p>
          <strong>My IP Expertise:</strong>  Analytical, organized and detail-oriented IP Specialist with expertise in patent and trademark docketing, paralegal work, process improvement, and automation.
        </p><br></br>
        
        <div className="mt-5 flex items-center justify-center gap-x-6 md:justify-start">
            <div className="flex items-center space-x-1 md:mt-0">
                <Button variant="ghost" size="icon" className="hover:text-gray-500 transition" asChild>
                    <a href="https://wa.me/7011553054" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                        <WhatsAppIcon className="h-5 w-5 text-green-500" />
                    </a>
                </Button>                  
                <Button variant="ghost" size="icon" className="hover:text-gray-500 transition" asChild>
                    <a href="mailto:ayadav232@gmail.com" aria-label="Email">
                        <Mail className="h-5 w-5 text-[#D14836]" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-gray-500 transition" asChild>
                    <a href="https://www.linkedin.com/in/anilkryadav94" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5 text-blue-500" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-gray-500 transition" asChild>
                    <a href="https://github.com/anilkryadav94" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github className="h-5 w-5" />
                    </a>
                </Button>
            </div>
        </div>
         <div className="mt-5 flex items-center justify-center gap-x-6 md:justify-start">
          <Button asChild variant="link" size="lg">
            <a href="#about" className="text-foreground">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="group relative h-64 w-64 flex-shrink-0 md:h-80 md:w-80">
        <Image
          src="/profile.jpg"
          alt="Anil Kumar"
          fill
          className="rounded-full object-cover shadow-2xl"
          data-ai-hint="professional headshot"
        />
      </div>
    </section>
  );
}
