import { Send } from 'lucide-react';

export function Contact() {
    return (
        <section id="contact" className="py-24 px-4 bg-background relative border-t border-white/5">
            <div className="max-w-4xl mx-auto space-y-24">

                {/* Roadmap */}
                <div className="space-y-12">
                    <h2 className="text-3xl font-bold text-center">Roadmap</h2>
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

                        <div className="grid gap-8 md:gap-12">
                            {[
                                { period: "Q1 2026", label: "MVP Development", status: "current" },
                                { period: "Q2 2026", label: "Alpha Testing", status: "upcoming" },
                                { period: "Q3 2026", label: "Public Launch", status: "upcoming" },
                            ].map((item, idx) => (
                                <div key={idx} className={`flex flex-col md:flex-row items-center gap-4 md:gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                    <div className="w-full md:w-1/2 p-4 text-center md:text-right">
                                        {idx % 2 === 0 && (
                                            <>
                                                <div className="text-primary font-bold text-xl">{item.period}</div>
                                                <div className="text-gray-400">{item.label}</div>
                                            </>
                                        )}
                                    </div>

                                    <div className="relative z-10 w-4 h-4 rounded-full bg-card border-2 border-primary" />

                                    <div className="w-full md:w-1/2 p-4 text-center md:text-left">
                                        {idx % 2 !== 0 && (
                                            <>
                                                <div className="text-white font-bold text-xl">{item.period}</div>
                                                <div className="text-gray-400">{item.label}</div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card p-8 md:p-12 rounded-3xl border border-white/5 max-w-2xl mx-auto w-full">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-2">Join the Revolution</h2>
                        <p className="text-gray-400">Early access for creators and brands.</p>
                    </div>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                            />
                        </div>
                        <select className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors appearance-none">
                            <option value="" disabled selected>I am a...</option>
                            <option value="creator">Creator</option>
                            <option value="brand">Brand</option>
                            <option value="investor">Investor</option>
                        </select>
                        <textarea
                            placeholder="Message (Optional)"
                            rows={4}
                            className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                        />
                        <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                            Send Request <Send className="w-4 h-4" />
                        </button>
                    </form>

                    <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
                        <p>Direct Inquiries:</p>
                        <p className="text-gray-400 select-all">devanshv22@iitk.ac.in</p>
                        <p className="text-gray-400 select-all">riyask22@iitk.ac.in</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
