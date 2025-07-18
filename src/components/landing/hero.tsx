"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { EditImageDialog } from './edit-image-dialog';

const DEFAULT_IMAGE_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=400&fit=crop";
const IMAGE_STORAGE_KEY = "heroImageUrl";

export default function Hero({ editMode }: { editMode: boolean }) {
  const [imageUrl, setImageUrl] = useState(DEFAULT_IMAGE_URL);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const storedUrl = localStorage.getItem(IMAGE_STORAGE_KEY);
    if (storedUrl) {
      setImageUrl(storedUrl);
    }
  }, []);

  const handleImageSave = (newUrl: string) => {
    setImageUrl(newUrl);
    localStorage.setItem(IMAGE_STORAGE_KEY, newUrl);
    setIsDialogOpen(false);
  };
  
  return (
    <section id="hero" className="container mx-auto flex flex-col-reverse items-center justify-between gap-12 px-4 py-20 md:flex-row md:py-32">
      <div className="max-w-3xl text-center md:text-left">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Anil Kumar
        </h1>
        <p className="mt-6 text-lg leading-8 text-foreground/80">
          Analytical, organized and detail-oriented IP Specialist with expertise in patent and trademark docketing, paralegal work, process improvement, and automation.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <a href="#contact">Contact Me</a>
          </Button>
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
        {editMode && (
          <>
            <div className="absolute inset-0 rounded-full bg-black/50 opacity-0 transition-opacity group-hover:opacity-100" />
            <Button
              variant="outline"
              size="icon"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100"
              onClick={() => setIsDialogOpen(true)}
            >
              <Pencil className="h-5 w-5" />
              <span className="sr-only">Edit Image</span>
            </Button>
            <EditImageDialog
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
              onSave={handleImageSave}
              currentImageUrl={imageUrl}
            />
          </>
        )}
      </div>
    </section>
  );
}
