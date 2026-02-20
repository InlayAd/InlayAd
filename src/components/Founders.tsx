import { Mail, Linkedin } from 'lucide-react';

const founders = [
    {
        name: "Devansh Verma",
        role: "Founder",
        bio: (
            <div className="space-y-3">
                <p>
                    <strong>4th year UG at IIT Kanpur</strong> (Math & Scientific Computing). Previously built data infrastructure scaling to <strong>15cr+ households</strong> for the Government of India (Jal Jeevan Mission).
                </p>
                <p>
                    Creator of SuperLiving, a solo-engineered platform successfully scaled to <strong>50k+ users</strong>. Ranked the <strong>#1 trading intern</strong> at Axxela, leveraging Deep Learning (LSTM & XGBoost) to aggressively optimize quantitative strategies.
                </p>
                <p>
                    Deeply passionate about AI systems, specializing in robust multi-agent deployments, LLM optimization, and autonomous infrastructure.
                </p>
            </div>
        ),
        email: "devanshv22@iitk.ac.in",
        linkedin: "https://www.linkedin.com/in/devanshv17/",
        image: "/founder.jpeg"
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
                        <div key={idx} className="bg-card p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group hover:-translate-y-1 mt-4">
                            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left">
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-[0_0_20px_rgba(255,255,255,0.05)] border-2 border-white/10"
                                />
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                                    <div className="text-primary font-medium mb-4">{founder.role}</div>
                                    <div className="text-sm md:text-base text-gray-300 leading-relaxed mb-6">
                                        {founder.bio}
                                    </div>
                                    <div className="flex justify-center md:justify-start gap-4">
                                        <a href={`mailto:${founder.email}`} className="text-gray-400 hover:text-white transition-colors" aria-label="Email">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                        <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors" aria-label="LinkedIn">
                                            <Linkedin className="w-5 h-5" />
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
