"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const imageUrl = "/profile.jpg";
  
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
         
          <Button asChild variant="link" size="lg">
            <a href="#about" className="text-foreground">
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
      <div className="group relative h-64 w-64 flex-shrink-0 md:h-80 md:w-80">
        <Image
          src={imageUrl}
          alt="Anil Kumar"
          fill
          className="rounded-full object-cover shadow-2xl"
          data-ai-hint="professional headshot"
          key={imageUrl} 
        />
      </div>
    </section>
  );
}
