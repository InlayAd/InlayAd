import { motion } from 'framer-motion';
import { Cookie, MessageSquare, Brain, ArrowRight, CheckCircle2 } from 'lucide-react';

const layers = [
    {
        number: '01',
        icon: Cookie,
        title: 'Traditional Cookies',
        subtitle: 'The Baseline',
        description: 'For new users with no history, we use traditional cookies and device signals as a baseline anchor — the same targeting layer every other ad network uses.',
        color: 'text-gray-300',
        borderColor: 'border-gray-600/30',
        bgColor: 'bg-white/5',
        iconBg: 'bg-white/5 border-white/10',
        tag: 'Fallback Layer',
        tagStyle: 'text-gray-400 bg-white/5 border-white/10',
    },
    {
        number: '02',
        icon: MessageSquare,
        title: 'Current Prompt Context',
        subtitle: 'The Signal',
        description: 'We read the user\'s active prompt and conversational context. Unlike cookies that read page titles, we read intent directly — making targeting dramatically more relevant.',
        color: 'text-sky-400',
        borderColor: 'border-sky-400/30',
        bgColor: 'bg-sky-400/5',
        iconBg: 'bg-sky-400/10 border-sky-400/20',
        tag: 'Contextual Layer',
        tagStyle: 'text-sky-400 bg-sky-400/10 border-sky-400/30',
    },
    {
        number: '03',
        icon: Brain,
        title: 'UMP — Probabilistic AI Memory',
        subtitle: 'The Moat',
        description: 'Our proprietary Universal Memory Protocol builds a probabilistic model of each user\'s interests from their full conversational history across all InlayAd-integrated apps. 0.82 F1-score. Zero false positives. Sub-4ms.',
        color: 'text-yellow-400',
        borderColor: 'border-yellow-400/30',
        bgColor: 'bg-yellow-400/5',
        iconBg: 'bg-yellow-400/10 border-yellow-400/20',
        tag: 'Proprietary Layer',
        tagStyle: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/30',
    },
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 px-4 bg-black relative overflow-hidden border-t border-card-border">
            <div className="absolute inset-0 grid-bg-sky pointer-events-none opacity-40" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="section-label-yellow mb-4">HOW TARGETING WORKS</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4 mb-4">
                        Three layers.<br />
                        <span className="text-sky-400" style={{ textShadow: '0 0 30px rgba(56,189,248,0.3)' }}>
                            Each one deeper.
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        InlayAd progressively upgrades targeting quality as user context accumulates.
                        New users get cookie-quality. Power users get UMP-quality — a category above everything else.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4 relative">
                    {/* Connector line on desktop */}
                    <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent pointer-events-none" />

                    {layers.map((layer, idx) => {
                        const Icon = layer.icon;
                        return (
                            <motion.div
                                key={layer.number}
                                initial={{ opacity: 0, y: 32 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                className={`bento-cell border ${layer.borderColor} ${layer.bgColor} relative group hover:scale-[1.02] transition-transform duration-300`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div className={`w-11 h-11 rounded-xl border ${layer.iconBg} flex items-center justify-center`}>
                                        <Icon className={`w-5 h-5 ${layer.color}`} />
                                    </div>
                                    <span className={`section-label text-xs ${layer.tagStyle}`}>{layer.tag}</span>
                                </div>

                                <div className="mb-2">
                                    <span className="text-xs font-black text-gray-600 tracking-widest">{layer.number}</span>
                                </div>

                                <h3 className={`text-xl font-black mb-1 ${layer.color}`}>{layer.title}</h3>
                                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">{layer.subtitle}</p>
                                <p className="text-gray-400 text-sm leading-relaxed">{layer.description}</p>

                                {idx < layers.length - 1 && (
                                    <div className="md:hidden flex items-center justify-center mt-6">
                                        <ArrowRight className="w-4 h-4 text-gray-600 rotate-90" />
                                    </div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-12 bento-cell border-sky-400/20 bg-sky-400/5"
                >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-xl font-black mb-2 text-white">The network effect kicks in at Layer 3.</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                UMP improves every time a user interacts with any InlayAd-integrated app — not just yours.
                                The more developers integrate, the more accurate UMP gets for every advertiser on the network.
                                This is the moat that compounds over time.
                            </p>
                        </div>
                        <div className="grid grid-cols-3 gap-4 shrink-0">
                            {[
                                { icon: CheckCircle2, label: 'Cross-app memory', color: 'text-sky-400' },
                                { icon: CheckCircle2, label: 'Zero false positives', color: 'text-yellow-400' },
                                { icon: CheckCircle2, label: 'Privacy-preserving', color: 'text-white' },
                            ].map(item => {
                                const ItemIcon = item.icon;
                                return (
                                    <div key={item.label} className="flex flex-col items-center text-center gap-2">
                                        <ItemIcon className={`w-5 h-5 ${item.color}`} />
                                        <span className="text-xs text-gray-400 font-medium leading-tight">{item.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
