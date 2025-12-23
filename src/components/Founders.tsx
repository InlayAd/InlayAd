import { Mail } from 'lucide-react';

const founders = [
    {
        name: "Devansh Verma",
        role: "Co-Founder",
        bio: "4th year UG at IIT Kanpur (Math & Scientific Computing). Built AI systems for DRDO and Tata Services.",
        email: "devanshv22@iitk.ac.in",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=DV&backgroundColor=1e1e1e&textColor=ff5f1f" // Placeholder
    },
    {
        name: "Riya Kashive",
        role: "Co-Founder",
        bio: "4th year UG at IIT Kanpur (Civil Engineering). Building the next generation of ad-tech infrastructure.",
        email: "riyask22@iitk.ac.in",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=RK&backgroundColor=1e1e1e&textColor=ff5f1f" // Placeholder
    },
];

export function Founders() {
    return (
        <section className="py-24 px-4 bg-background">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the <span className="text-primary">Builders</span></h2>
                <p className="text-center text-gray-400 mb-16">Built at IIT Kanpur</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {founders.map((founder, idx) => (
                        <div key={idx} className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-1">
                            <div className="flex items-start gap-4 md:gap-6">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-16 h-16 rounded-full bg-white/5 object-cover border border-white/10"
                                />
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
                                    <div className="text-primary text-sm font-medium mb-3">{founder.role}</div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        {founder.bio}
                                    </p>
                                    <div className="flex gap-3">
                                        <a href={`mailto:${founder.email}`} className="text-gray-500 hover:text-white transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
