import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Briefcase, CheckCircle } from 'lucide-react';

const anaquaResponsibilities = [
    "Handling multiple processes like Patent Docketing, Annuity, Abandonment and Trademarks docketing.",
    "Performing quality checks on patent documents/emails and providing feedback.",
    "Processing TM emails and documents daily, along with patent QC.",
    "Handling internal queries and drafting client queries.",
    "Participating in the Audit Team for third-level quality audits using Excel and macros.",
    "Undertaking project work and MIS tasks as required.",
];

const automationInnovations = [
    "Document renaming tool",
    "Raw Data Collation using MS Access and Excel VBA",
    "QC Tool using MS Access and Excel VBA",
    "Outlook Email Fetch",
    "Time sheet Macro",
    "Abandonment & Annuity Reports using Excel VBA",
    "Filing Order letter preparation using Mail Merge and Macros"
];


export default function Experience() {
    return (
        <section id="experience" className="bg-secondary/50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">Work Experience</h2>
                <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-border md:before:mx-auto md:before:translate-x-0">
                    
                    <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                           <Briefcase className="h-5 w-5"/>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Sr. IP Specialist</CardTitle>
                                    <CardDescription>Anaqua Inc. | 3+ years</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <h4 className="mb-2 font-semibold">Key Responsibilities:</h4>
                                    <ul className="space-y-2 text-sm text-muted-foreground">
                                        {anaquaResponsibilities.map((item, index) => (
                                            <li key={index} className="flex gap-2"><CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                    <h4 className="mb-2 mt-4 font-semibold">Automation & Innovation:</h4>
                                     <ul className="space-y-2 text-sm text-muted-foreground">
                                        {automationInnovations.map((item, index) => (
                                            <li key={index} className="flex gap-2"><CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-primary" /><span>{item}</span></li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                     <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <Briefcase className="h-5 w-5"/>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                             <Card>
                                <CardHeader>
                                    <CardTitle>Sr. IP Analyst</CardTitle>
                                    <CardDescription>Clarivate | June 2019 – May 2022 (2 years 9 months)</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                    
                    <div className="group relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border bg-primary text-primary-foreground shadow-md md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <Briefcase className="h-5 w-5"/>
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Payroll Processor</CardTitle>
                                    <CardDescription>Wipro Ltd. | Dec 2016 – June 2019 (2 years 6 months)</CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
