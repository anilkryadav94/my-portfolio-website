import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Calendar, BookOpen, GraduationCap, Heart, Languages, Flag, Puzzle } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="bg-secondary/50 py-20">
            <div className="container mx-auto px-4">
                <h2 className="font-headline text-3xl font-bold text-center mb-12 text-primary">About Me</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <Card className="md:col-span-2">
                        <CardHeader>
                            <CardTitle>Bio</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-foreground/90">
                            <p>Analytical and detail-oriented IP Specialist with extensive experience in patent and trademark docketing, paralegal operations, and IP quality assurance. With over 5 years of specialized IP experience, I excel in managing complex workflows, ensuring compliance, and delivering strategic IP support to global stakeholders.</p>
                            <p>Known for my ownership mindset, collaborative approach, and track record of driving efficiency through process optimization and automation.</p>
                            <p>I actively leverage technology to enhance operational impact—using modern tools like ChatGPT, Grok, GitHub Copilot, Firebase, Gemini, ElevenLabs, and others for task automation, research, and productivity.</p>
                            <p>Skilled in Excel, Access, VBA, and exploring Power Platform (Power Apps, Power Automate, Power BI, Dataverse) and Django (Python) to build scalable, intelligent solutions that bridge IP with tech innovation.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-primary" /> <span><b>Location:</b> Ghaziabad, UP India</span></div>
                            <div className="flex items-center gap-4"><Calendar className="h-5 w-5 text-primary" /> <span><b>D.O.B:</b> 26/07/1994</span></div>
                            <div className="flex items-center gap-4"><Heart className="h-5 w-5 text-primary" /> <span><b>Marital Status:</b> Married</span></div>
                            <div className="flex items-center gap-4"><Languages className="h-5 w-5 text-primary" /> <span><b>Languages:</b> English, Hindi</span></div>
                            <div className="flex items-center gap-4"><Flag className="h-5 w-5 text-primary" /> <span><b>Nationality:</b> Indian</span></div>
                            <div className="flex items-center gap-4"><Puzzle className="h-5 w-5 text-primary" /> <span><b>Hobbies:</b> Cricket, Music, Travelling</span></div>
                        </CardContent>
                    </Card>
                     <Card className="md:col-span-3">
                        <CardHeader>
                            <CardTitle>Education</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-3"><GraduationCap className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h3 className="font-semibold">Bachelor of Commerce (Hons.)</h3>
                                    <p className="text-muted-foreground">Sri Venkateswara College, Delhi University (2012-2015)</p>
                                    <p className="text-sm">Percentage: 65.81%</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-3"><BookOpen className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h3 className="font-semibold">Intermediate, Commerce</h3>
                                    <p className="text-muted-foreground">Vinay Nagar Bengali Senior Secondary School, CBSE (2010-2012)</p>
                                    <p className="text-sm">Percentage: 90%</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="rounded-full bg-primary/10 p-3"><BookOpen className="h-6 w-6 text-primary"/></div>
                                <div>
                                    <h3 className="font-semibold">High School</h3>
                                    <p className="text-muted-foreground">P.D Model Sr. Sec School, CBSE (2010)</p>
                                    <p className="text-sm">CGPA: 8.0</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
