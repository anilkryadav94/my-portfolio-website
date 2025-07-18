"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Download, Menu } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#resume-tailor", label: "AI Resume Tailor" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-headline text-lg font-bold text-primary ml-2">
          Anil's Portfolio
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="link" asChild>
              <a href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {link.label}
              </a>
            </Button>
          ))}
           <Button asChild className="ml-2">
              <a href="/Anil_Kumar_CV.pdf" download="Anil_Kumar_CV.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden mr-2">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
               <SheetHeader className="text-left">
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation links for Anil Kumar's portfolio.
                  </SheetDescription>
                </SheetHeader>
              <div className="flex flex-col gap-y-4 pt-6">
                <a href="#" onClick={closeMenu} className="mb-4 font-headline text-lg font-bold text-primary">
                  Anil's Portfolio
                </a>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} className="text-lg text-foreground/80 transition-colors hover:text-foreground">
                    {link.label}
                  </a>
                ))}
                <Button asChild className="mt-4">
                  <a href="/Anil_Kumar_CV.pdf" download="Anil_Kumar_CV.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
