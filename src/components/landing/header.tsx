import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Header() {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#resume-tailor", label: "Resume Tailor" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <a href="#" className="font-headline text-lg font-bold text-primary">
          Anil Kumar
        </a>
        <nav className="hidden items-center space-x-2 md:flex">
          {navLinks.map((link) => (
            <Button key={link.href} variant="link" asChild>
              <a href={link.href} className="text-foreground/80 transition-colors hover:text-foreground">
                {link.label}
              </a>
            </Button>
          ))}
           <Button asChild>
              <a href="/Anil_Kumar_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
        </nav>
      </div>
    </header>
  );
}
