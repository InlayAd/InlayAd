import { IndianRupee, PieChart, Send, Download } from 'lucide-react';

export function Investors() {
    return (
        <section className="py-24 px-4 bg-card/30 border-y border-white/5 relative z-10" id="investors">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">For <span className="text-primary">Investors</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">Back the future of non-intrusive, scalable ad-tech infrastructure.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* The Ask & The Plan */}
                    <div className="space-y-8">
                        <div className="bg-background border border-white/5 p-8 rounded-3xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <IndianRupee className="w-48 h-48" />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">The Ask</h3>
                            <div className="text-5xl md:text-6xl font-bold text-white mb-2">$500,000</div>
                            <div className="text-primary text-xl font-medium mb-8">(₹4.5 Crores)</div>

                            <div className="flex items-center gap-2 text-gray-400">
                                <span className="w-2 h-2 rounded-full bg-green-500" />
                                <span>Expected Valuation: <strong className="text-white">$5M (45cr)</strong></span>
                            </div>
                        </div>

                        <div className="bg-background border border-white/5 p-8 rounded-3xl">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <PieChart className="w-5 h-5 text-primary" />
                                Use of Funds (15 Months)
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-gray-300">Compute and R&D (H100 Clusters)</span>
                                        <span className="text-primary font-bold">45%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[45%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-gray-300">Operations and Pilot (Subsidies, Legal)</span>
                                        <span className="text-primary font-bold">35%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="bg-primary/70 h-full w-[35%]" />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between mb-2 text-sm">
                                        <span className="text-gray-300">Team Building (CV/ML, Full Stack)</span>
                                        <span className="text-primary font-bold">20%</span>
                                    </div>
                                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                                        <div className="bg-primary/40 h-full w-[20%]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pitch Deck & Waitlist */}
                    <div className="space-y-8 flex flex-col">

                        <a
                            href="/Inlay_deck_latest.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary/10 border border-primary/20 p-8 rounded-3xl hover:bg-primary/20 transition-all flex flex-col items-center justify-center text-center gap-4 group"
                        >
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Download className="w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold mb-2">View Pitch Deck</h3>
                                <p className="text-primary/80">Download the full presentation</p>
                            </div>
                        </a>

                        <div className="bg-card p-8 rounded-3xl border border-white/5 flex-1 flex flex-col justify-center">
                            <h3 className="text-2xl font-bold mb-2">Get in Touch</h3>
                            <p className="text-gray-400 mb-6 text-sm">Let's discuss how we can partner.</p>

                            <form className="space-y-4" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Investor Inquiry for Inlay" />
                                <input type="hidden" name="role" value="investor" />

                                <input type="text" name="name" required placeholder="Name / Fund" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                <input type="email" name="email" required placeholder="Email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />

                                <button type="submit" className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
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
