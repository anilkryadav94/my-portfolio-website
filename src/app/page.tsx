import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Skills from '@/components/landing/skills';
import Experience from '@/components/landing/experience';
import ResumeTailor from '@/components/landing/resume-tailor';
import ContactForm from '@/components/landing/contact-form';
import Footer from '@/components/landing/footer';

export default function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const editMode = searchParams?.edit === 'true';

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <div className="px-10">
        <Header />
      </div>
      <div className="px-2.5">
        <main className="flex-1">
          <Hero editMode={editMode} />
          <About />
          <Skills />
          <Experience />
          <ResumeTailor />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
