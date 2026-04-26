import { IndianRupee, PieChart, Send, Download } from 'lucide-react';
import { useEffect } from 'react';

export function Investors() {
    useEffect(() => {
        const meta = document.createElement('meta');
        meta.name = 'robots';
        meta.content = 'noindex, nofollow';
        document.head.appendChild(meta);
        return () => { document.head.removeChild(meta); };
    }, []);

    return (
        <section className="py-24 px-4 bg-black border-y border-card-border relative z-10" id="investors">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="text-center space-y-4">
                    <span className="section-label-sky">FOR INVESTORS</span>
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight mt-4">
                        Back the <span className="text-sky-400" style={{ textShadow: '0 0 24px rgba(56,189,248,0.3)' }}>AI Ad Infrastructure.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The advertising layer for the AI era is being built right now. Be early.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                    <div className="space-y-4">
                        <div className="bento-cell border-sky-400/20 bg-sky-400/5 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-5">
                                <IndianRupee className="w-40 h-40" />
                            </div>
                            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">The Ask</h3>
                            <div className="text-5xl md:text-6xl font-black text-white mb-1">$500,000</div>
                            <div className="text-sky-400 text-lg font-bold mb-6">(₹4.5 Crores)</div>
                            <div className="flex items-center gap-2 text-gray-400 text-sm">
                                <span className="w-2 h-2 rounded-full bg-sky-400" />
                                <span>Expected Valuation: <strong className="text-white">$5M (₹45Cr)</strong></span>
                            </div>
                        </div>

                        <div className="bento-cell">
                            <h3 className="text-base font-black mb-6 flex items-center gap-2 text-white">
                                <PieChart className="w-4 h-4 text-sky-400" />
                                Use of Funds (15 Months)
                            </h3>
                            <div className="space-y-5">
                                {[
                                    { label: 'Compute and R&D (H100 Clusters)', pct: 45, color: 'bg-sky-400' },
                                    { label: 'Operations and Pilot (Subsidies, Legal)', pct: 35, color: 'bg-sky-400/60' },
                                    { label: 'Team Building (ML, Full Stack)', pct: 20, color: 'bg-yellow-400' },
                                ].map(item => (
                                    <div key={item.label}>
                                        <div className="flex justify-between mb-2 text-sm">
                                            <span className="text-gray-300">{item.label}</span>
                                            <span className="text-sky-400 font-black">{item.pct}%</span>
                                        </div>
                                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                                            <div className={`${item.color} h-full rounded-full`} style={{ width: `${item.pct}%` }} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 flex flex-col">
                        <a
                            href="/Inlay_deck_latest.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bento-cell border-sky-400/20 hover:border-sky-400/40 transition-all flex flex-col items-center justify-center text-center gap-4 group py-12"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <Download className="w-6 h-6 text-sky-400" />
                            </div>
                            <div>
                                <h3 className="text-xl font-black mb-1 text-white">View Pitch Deck</h3>
                                <p className="text-sky-400 text-sm font-medium">Download the full presentation</p>
                            </div>
                        </a>

                        <div className="bento-cell flex-1">
                            <h3 className="text-lg font-black mb-1 text-white">Get in Touch</h3>
                            <p className="text-gray-500 mb-5 text-sm">Let's discuss how we can partner.</p>
                            <form className="space-y-3" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Investor Inquiry — InlayAd" />
                                <input type="hidden" name="role" value="investor" />
                                <input type="text" name="name" required placeholder="Name / Fund"
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors" />
                                <input type="email" name="email" required placeholder="Email"
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors" />
                                <button type="submit"
                                    className="w-full bg-sky-400 text-black font-black py-3.5 rounded-xl hover:bg-sky-300 transition-all flex items-center justify-center gap-2 text-sm"
                                    style={{ boxShadow: '3px 3px 0px rgba(56,189,248,0.4)' }}>
                                    Contact Founder <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
