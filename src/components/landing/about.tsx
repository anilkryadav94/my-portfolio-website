import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, MapPin, Calendar, BookOpen, GraduationCap, Heart, Languages } from 'lucide-react';

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
                            <p>Analytical, organized and detail-oriented IP Specialist expertise and experience in the full spectrum of patent and trademark docketing and paralegal work.</p>
                            <p>Collaborative team player with ownership mentality and a track record of delivering the highest quality strategic solutions to resolve challenges and propel business growth. Also, having expertise in process improvement, automations, and use of AI tools (ChatGPT) in daily work.</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Personal Details</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center gap-4"><User className="h-5 w-5 text-primary" /> <span><b>Age:</b> 30</span></div>
                            <div className="flex items-center gap-4"><MapPin className="h-5 w-5 text-primary" /> <span><b>Location:</b> Ghaziabad, UP India</span></div>
                            <div className="flex items-center gap-4"><Calendar className="h-5 w-5 text-primary" /> <span><b>D.O.B:</b> 26/07/1994</span></div>
                            <div className="flex items-center gap-4"><Heart className="h-5 w-5 text-primary" /> <span><b>Marital Status:</b> Married</span></div>
                            <div className="flex items-center gap-4"><Languages className="h-5 w-5 text-primary" /> <span><b>Languages:</b> English, Hindi</span></div>
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
