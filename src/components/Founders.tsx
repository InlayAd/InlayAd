import { Mail } from 'lucide-react';

const founders = [
    {
        name: "Devansh Verma",
        role: "Co-Founder",
        bio: <><strong>4th year UG at IIT Kanpur</strong> (Math & Scientific Computing). Built infra for <strong>15cr+ households</strong> (Jal Jeevan Mission). Scaled a consumer app to <strong>50k+ users</strong>. Ranked <strong>#1 trading intern</strong> at Axxela.</>,
        email: "devanshv22@iitk.ac.in",
        image: "https://api.dicebear.com/9.x/initials/svg?seed=DV&backgroundColor=1e1e1e&textColor=ff5f1f" // Placeholder
    }
];

export function Founders() {
    return (
        <section className="py-24 px-4 bg-background" id="founders">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Meet the <span className="text-primary">Builders</span></h2>
                <p className="text-center text-gray-400 mb-16">Built at IIT Kanpur</p>

                <div className="max-w-2xl mx-auto">
                    {founders.map((founder, idx) => (
                        <div key={idx} className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-1">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-24 h-24 rounded-full bg-white/5 object-cover border border-white/10"
                                />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                                    <div className="text-primary font-medium mb-4">{founder.role}</div>
                                    <p className="text-base text-gray-300 leading-relaxed mb-6">
                                        {founder.bio}
                                    </p>
                                    <div className="flex justify-center md:justify-start gap-3">
                                        <a href={`mailto:${founder.email}`} className="text-gray-500 hover:text-white transition-colors">
                                            <Mail className="w-6 h-6" />
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
