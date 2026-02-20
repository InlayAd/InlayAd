

export function Roadmap() {
    return (
        <section id="roadmap" className="py-24 px-4 bg-background relative border-t border-white/5">
            <div className="max-w-4xl mx-auto space-y-24">
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
                                { period: "Q4 2026", label: "Scale & Expansion", status: "upcoming" },
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

                    <div className="mt-24 text-center text-sm text-gray-500 space-y-1">
                        <p>Direct Inquiries:</p>
                        <p className="text-gray-400 select-all">devanshv22@iitk.ac.in</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
