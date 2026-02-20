import { Target, BarChart3, Presentation, IndianRupee, ShieldCheck, Zap, Send } from 'lucide-react';

const brandBenefits = [
    {
        icon: Target,
        headline: "Zero Logistics, Infinite Scale",
        description: "Save 100% on logistics. Skip shipping physical products and waiting days for shoots. We instantly inject your brand into 50+ videos at scale.",
        color: "text-blue-400"
    },
    {
        icon: BarChart3,
        headline: "Pixel-Perfect Tracking",
        description: "Gain a comprehensive dashboard to track exactly how your embedded assets perform and prove ROI to executives.",
        color: "text-primary"
    },
    {
        icon: Presentation,
        headline: "Native Integration",
        description: "Seamlessly integrate your brand into high-performing Reels and Shorts without interrupting the viewer's dopamine loop.",
        color: "text-green-400"
    }
];

const creatorBenefits = [
    {
        icon: IndianRupee,
        headline: "Consistent Income",
        description: "Generate stable, automated earnings without waiting months for manual, infrequent brand deals to close.",
        color: "text-green-400"
    },
    {
        icon: ShieldCheck,
        headline: "Pristine Content Quality",
        description: "No script changes, no cringe ad reads. Automated post-production injection keeps your content pure.",
        color: "text-blue-400"
    },
    {
        icon: Zap,
        headline: "Market-Leading Payout",
        description: "We believe creators deserve the lion's share. Enjoy a massive 80% payout on all generated ad revenue.",
        color: "text-primary"
    }
];

export function BenefitsAndWaitlist() {
    return (
        <section className="py-24 px-4 bg-background relative z-10 border-t border-white/5" id="waitlist">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* BRAND COLUMN */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">For the <span className="text-primary">Brand</span></h2>
                            <p className="text-gray-400">Access the world's most engaged audience segments without the logistics nightmare.</p>
                        </div>

                        <div className="space-y-8">
                            {brandBenefits.map((p, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                                        <p.icon className={`w-6 h-6 ${p.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{p.headline}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-card p-8 rounded-3xl border border-white/5 relative group">
                            <div className="absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-6">Brand Waitlist</h3>
                            <form className="space-y-4 relative z-10" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Brand Waitlist Submission" />
                                <input type="hidden" name="role" value="brand" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="name" required placeholder="Name" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                    <input type="email" name="email" required placeholder="Email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                                <input type="text" name="company" placeholder="Company Name" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                <textarea name="message" placeholder="Message (Optional)" rows={3} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors resize-none" />
                                <button type="submit" className="w-full bg-white hover:bg-gray-100 text-black font-bold py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                                    Join as Brand <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* CREATOR COLUMN */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h2 className="text-3xl md:text-4xl font-bold">For the <span className="text-primary">Influencer</span></h2>
                            <p className="text-gray-400">Monetize your existing views with zero extra effort and zero creative compromises.</p>
                        </div>

                        <div className="space-y-8">
                            {creatorBenefits.map((p, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center">
                                        <p.icon className={`w-6 h-6 ${p.color}`} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-2">{p.headline}</h4>
                                        <p className="text-gray-400 leading-relaxed text-sm">{p.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-card p-8 rounded-3xl border border-white/5 relative group">
                            <div className="absolute inset-0 bg-primary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            <h3 className="text-2xl font-bold mb-6">Creator Waitlist</h3>
                            <form className="space-y-4 relative z-10" action="https://api.web3forms.com/submit" method="POST">
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Creator Waitlist Submission" />
                                <input type="hidden" name="role" value="creator" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" name="name" required placeholder="Name" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                    <input type="email" name="email" required placeholder="Email" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                </div>
                                <input type="text" name="social_link" placeholder="Instagram/YouTube Link" className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors" />
                                <textarea name="message" placeholder="Message (Optional)" rows={3} className="w-full bg-background border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none" />
                                <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,95,31,0.3)]">
                                    Join as Creator <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
