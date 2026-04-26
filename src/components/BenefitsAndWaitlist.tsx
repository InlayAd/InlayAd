import { Target, BarChart3, Code2, Megaphone, TrendingUp, Layers, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const developerBenefits = [
    {
        icon: Code2,
        headline: 'Drop-In MCP Integration',
        description: 'Add InlayAd to any AI app or website in minutes. Our MCP server handles placement logic automatically — zero custom ad code required.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        border: 'border-sky-400/20',
    },
    {
        icon: BarChart3,
        headline: 'Context-Aware Revenue',
        description: 'Earn more per impression. UMP-powered targeting means ads are more relevant, clicks are higher quality, and your CPM beats every generic ad network.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        border: 'border-sky-400/20',
    },
    {
        icon: Layers,
        headline: 'Works in Any Interface',
        description: 'Chat UIs, agent dashboards, or classic websites — InlayAd serves the right format automatically. Chat card ads for LLM apps. Banner ads for everything else.',
        color: 'text-sky-400',
        bg: 'bg-sky-400/10',
        border: 'border-sky-400/20',
    },
];

const brandBenefits = [
    {
        icon: Target,
        headline: 'AI-Intent Targeting',
        description: 'Reach users who are actively expressing purchase intent in conversation — not passively scrolling. The signal quality is categorically higher than any cookie-based network.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
    },
    {
        icon: TrendingUp,
        headline: 'UMP-Powered Precision',
        description: 'Our Probabilistic AI Memory model builds a cross-session interest profile for every user. You reach the right person even in a session where they haven\'t mentioned your category.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
    },
    {
        icon: Megaphone,
        headline: 'Dual Format Campaigns',
        description: 'Run banner campaigns on AI-enabled websites and chat card campaigns inside LLM interfaces simultaneously — a single dashboard, single budget, both channels.',
        color: 'text-yellow-400',
        bg: 'bg-yellow-400/10',
        border: 'border-yellow-400/20',
    },
];

export function BenefitsAndWaitlist() {
    return (
        <section className="py-24 px-4 bg-black relative z-10 border-t border-card-border" id="waitlist">
            <div className="absolute inset-0 grid-bg pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="section-label-sky mb-4">JOIN THE NETWORK</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
                        The ad network that{' '}
                        <span className="text-sky-400" style={{ textShadow: '0 0 24px rgba(56,189,248,0.3)' }}>
                            understands context.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

                    {/* DEVELOPER COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-2">
                                For the{' '}
                                <span className="text-sky-400">Developer</span>
                            </h3>
                            <p className="text-gray-400 text-sm">Monetize your AI app or website with zero ad-ops work.</p>
                        </div>

                        <div className="flex-1 space-y-5">
                            {developerBenefits.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex gap-4">
                                        <div className={`shrink-0 w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-black mb-1 text-white">{item.headline}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bento-cell border-sky-400/20 bg-sky-400/5">
                            <h4 className="text-lg font-black mb-5 text-white">Developer Waitlist</h4>
                            <form
                                className="space-y-3"
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                aria-label="Developer waitlist signup form"
                            >
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Developer Waitlist Submission — InlayAd" />
                                <input type="hidden" name="role" value="developer" />
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" name="name" required placeholder="Name"
                                        className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors" />
                                    <input type="email" name="email" required placeholder="Email"
                                        className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors" />
                                </div>
                                <input type="url" name="app_url" placeholder="Your App / Site URL"
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors" />
                                <textarea name="message" placeholder="Briefly describe your app (optional)" rows={2}
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-sky-400/50 transition-colors resize-none" />
                                <button type="submit"
                                    className="w-full bg-sky-400 hover:bg-sky-300 text-black font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                                    style={{ boxShadow: '3px 3px 0px rgba(56,189,248,0.4)' }}
                                >
                                    Join as Developer <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* BRAND COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col gap-10"
                    >
                        <div>
                            <h3 className="text-2xl md:text-3xl font-black mb-2">
                                For the{' '}
                                <span className="text-yellow-400">Brand</span>
                            </h3>
                            <p className="text-gray-400 text-sm">Reach AI app users at their highest intent moment.</p>
                        </div>

                        <div className="flex-1 space-y-5">
                            {brandBenefits.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex gap-4">
                                        <div className={`shrink-0 w-11 h-11 rounded-xl ${item.bg} border ${item.border} flex items-center justify-center`}>
                                            <Icon className={`w-5 h-5 ${item.color}`} />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-black mb-1 text-white">{item.headline}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="bento-cell border-yellow-400/20 bg-yellow-400/5">
                            <h4 className="text-lg font-black mb-5 text-white">Brand Waitlist</h4>
                            <form
                                className="space-y-3"
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                aria-label="Brand waitlist signup form"
                            >
                                <input type="hidden" name="access_key" value="4a149625-57f6-422a-bb63-027d9e13c68c" />
                                <input type="hidden" name="subject" value="New Brand Waitlist Submission — InlayAd" />
                                <input type="hidden" name="role" value="brand" />
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" name="name" required placeholder="Name"
                                        className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-colors" />
                                    <input type="email" name="email" required placeholder="Email"
                                        className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-colors" />
                                </div>
                                <input type="text" name="company" placeholder="Company Name"
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-colors" />
                                <textarea name="message" placeholder="Campaign goals or message (optional)" rows={2}
                                    className="w-full bg-black border border-card-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-yellow-400/50 transition-colors resize-none" />
                                <button type="submit"
                                    className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-black py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
                                    style={{ boxShadow: '3px 3px 0px rgba(250,204,21,0.4)' }}
                                >
                                    Join as Brand <Send className="w-4 h-4" />
                                </button>
                            </form>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
