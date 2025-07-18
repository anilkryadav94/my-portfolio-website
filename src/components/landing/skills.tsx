import * as React from 'react';
import { Card } from '@/components/ui/card';
import { Gavel, Code, FileText, ClipboardCheck, FileSpreadsheet, Database, Bot, Server, Presentation as PresentationIcon } from 'lucide-react';

const skills = [
  { name: 'Intellectual Property', icon: <Gavel /> },
  { name: 'Patent & TM Docketing', icon: <FileText /> },
  { name: 'Quality Control & Audits', icon: <ClipboardCheck /> },
  { name: 'Python', icon: <Code /> },
  { name: 'Django', icon: <Server /> },
  { name: 'React', icon: <Code /> },
  { name: 'Next.js', icon: <Code /> },
  { name: 'Advance Excel (VBA)', icon: <FileSpreadsheet /> },
  { name: 'MS Access', icon: <Database /> },
  { name: 'MS Word', icon: <FileText /> },
  { name: 'MS PowerPoint', icon: <PresentationIcon /> },
  { name: 'SQL Basics', icon: <Database /> },
  { name: 'AI Tools (ChatGPT)', icon: <Bot /> },
];

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">My Skills</h2>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {skills.map((skill) => (
                        <Card key={skill.name} className="flex flex-col items-center justify-center p-6 text-center transition-shadow hover:shadow-lg">
                            <div className="mb-4 text-primary">{React.cloneElement(skill.icon, { className: 'h-10 w-10' })}</div>
                            <p className="font-semibold">{skill.name}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
