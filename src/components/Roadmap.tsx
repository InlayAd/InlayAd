export function Roadmap() {
    const milestones = [
        { period: 'Q1 2026', label: 'Research & MVP', status: 'current', desc: 'UMP research published. MCP server prototype built.' },
        { period: 'Q2 2026', label: 'Alpha Testing', status: 'upcoming', desc: 'Closed alpha with select AI app developers.' },
        { period: 'Q3 2026', label: 'Public Launch', status: 'upcoming', desc: 'Open network launch. Publisher and advertiser onboarding.' },
        { period: 'Q4 2026', label: 'Scale & Expand', status: 'upcoming', desc: 'UMP network effects kick in. Cross-app memory compounds.' },
    ];

    return (
        <section id="roadmap" className="py-24 px-4 bg-black relative border-t border-card-border">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center">
                    <span className="section-label-sky mb-4">ROADMAP</span>
                    <h2 className="text-4xl font-black tracking-tight mt-4">
                        The path to{' '}
                        <span className="text-sky-400">scale.</span>
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/20 via-sky-400/10 to-transparent hidden md:block" />

                    <div className="grid gap-8 md:gap-10">
                        {milestones.map((item, idx) => (
                            <div
                                key={idx}
                                className={`flex flex-col md:flex-row items-center gap-4 md:gap-0 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-1/2 md:px-8 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                    {idx % 2 === 0 && (
                                        <div className={`bento-cell inline-block text-left ${item.status === 'current' ? 'border-sky-400/30 bg-sky-400/5' : ''}`}>
                                            <div className={`text-base font-black ${item.status === 'current' ? 'text-sky-400' : 'text-white'}`}>
                                                {item.period}
                                            </div>
                                            <div className="text-sm font-bold text-white mt-0.5 mb-1">{item.label}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                            {item.status === 'current' && (
                                                <div className="flex items-center gap-1.5 mt-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                                                    <span className="text-xs text-sky-400 font-bold">In Progress</span>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>

                                <div className="relative z-10 w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0"
                                    style={{
                                        borderColor: item.status === 'current' ? '#38bdf8' : '#1a1a1a',
                                        backgroundColor: item.status === 'current' ? 'rgba(56,189,248,0.2)' : '#000',
                                        boxShadow: item.status === 'current' ? '0 0 12px rgba(56,189,248,0.5)' : 'none'
                                    }}>
                                    {item.status === 'current' && <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                                </div>

                                <div className={`w-full md:w-1/2 md:px-8 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                    {idx % 2 !== 0 && (
                                        <div className="bento-cell inline-block text-left">
                                            <div className="text-base font-black text-white">{item.period}</div>
                                            <div className="text-sm font-bold text-gray-300 mt-0.5 mb-1">{item.label}</div>
                                            <div className="text-xs text-gray-500">{item.desc}</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center text-sm text-gray-600">
                    <p>Direct Inquiries:</p>
                    <a href="mailto:devanshv22@iitk.ac.in" className="text-gray-400 hover:text-sky-400 transition-colors">
                        devanshv22@iitk.ac.in
                    </a>
                </div>
            </div>
        </section>
    );
}
