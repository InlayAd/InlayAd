import { motion } from 'framer-motion';
import { Zap, Globe, Server, DollarSign } from 'lucide-react';

const specs = [
    { icon: Zap, label: 'Ad Latency', value: '< 4ms', color: 'text-sky-400', desc: 'End-to-end serving' },
    { icon: Server, label: 'Integration', value: 'MCP', color: 'text-yellow-400', desc: '3-line setup' },
    { icon: Globe, label: 'Platforms', value: 'Any', color: 'text-white', desc: 'Web, native, API' },
    { icon: DollarSign, label: 'Cost', value: '$3/M', color: 'text-sky-400', desc: 'Per million requests' },
];

export function TechShowcase() {
    return (
        <section id="demo" className="py-24 px-4 bg-black relative overflow-hidden border-t border-card-border">
            <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />

            {/* Sky glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.04) 0%, transparent 70%)' }} />

            <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label-sky mb-4">INFRASTRUCTURE</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-4">
                        Production-grade{' '}
                        <span className="text-sky-400" style={{ textShadow: '0 0 24px rgba(56,189,248,0.3)' }}>
                            from day one.
                        </span>
                    </h2>
                    <p className="text-gray-400 max-w-lg mx-auto text-base">
                        The same infrastructure specs that power the UMP research paper — built for real-world scale.
                    </p>
                </motion.div>

                {/* MCP Flow Diagram */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-full max-w-4xl mb-16"
                >
                    <div
                        className="bento-cell border-sky-400/20 bg-sky-400/5 relative overflow-hidden"
                        style={{ minHeight: '220px' }}
                    >
                        {/* Glow effect */}
                        <div className="absolute inset-0 pointer-events-none"
                            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 60%)' }} />

                        <h3 className="text-lg font-black text-white mb-8 relative z-10">MCP Request Flow</h3>

                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
                            {[
                                { label: 'Your AI App', sub: 'User sends prompt', color: 'border-white/20 bg-white/5', text: 'text-white' },
                                { label: 'InlayAd MCP', sub: 'Reads context + UMP', color: 'border-sky-400/40 bg-sky-400/10', text: 'text-sky-400' },
                                { label: 'UMP Engine', sub: 'Probabilistic match', color: 'border-yellow-400/30 bg-yellow-400/5', text: 'text-yellow-400' },
                                { label: 'Ad Returned', sub: 'Chat card or banner', color: 'border-sky-400/40 bg-sky-400/10', text: 'text-sky-400' },
                            ].map((node, idx, arr) => (
                                <div key={node.label} className="flex items-center gap-3 md:gap-4">
                                    <div className={`px-4 py-3 rounded-xl border ${node.color} text-center min-w-[120px]`}
                                        style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.04)' }}>
                                        <div className={`text-sm font-black ${node.text}`}>{node.label}</div>
                                        <div className="text-xs text-gray-500 mt-0.5">{node.sub}</div>
                                    </div>
                                    {idx < arr.length - 1 && (
                                        <div className="hidden md:flex items-center text-gray-600">
                                            <div className="w-6 h-px bg-sky-400/30" />
                                            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[6px] border-l-sky-400/30" />
                                        </div>
                                    )}
                                    {idx < arr.length - 1 && (
                                        <div className="md:hidden text-gray-600 rotate-90 text-xs">→</div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 pt-4 border-t border-sky-400/10 flex items-center gap-2 relative z-10">
                            <div className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                            <span className="text-xs text-sky-400 font-bold tracking-wider">TOTAL ROUND-TRIP: SUB-4MS</span>
                        </div>
                    </div>
                </motion.div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
                    {specs.map((spec, idx) => {
                        const Icon = spec.icon;
                        return (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.08 }}
                                className="bento-cell text-center"
                            >
                                <Icon className={`w-5 h-5 ${spec.color} mx-auto mb-3`} />
                                <div className={`text-2xl font-black ${spec.color} mb-1`}>{spec.value}</div>
                                <div className="text-xs font-bold text-white mb-0.5">{spec.label}</div>
                                <div className="text-xs text-gray-600">{spec.desc}</div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
