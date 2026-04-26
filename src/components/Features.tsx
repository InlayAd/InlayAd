import { motion } from 'framer-motion';
import { Server, MessageSquare, Layers, Code2, BarChart3, Shield, Lock } from 'lucide-react';

const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
};

export function Features() {
    return (
        <section id="features" className="py-24 px-4 bg-black relative overflow-hidden">
            <div className="absolute inset-0 grid-bg pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <span className="section-label-sky mb-4">CORE FEATURES</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tight mt-4 mb-4">
                        Built for the{' '}
                        <span className="text-sky-400" style={{ textShadow: '0 0 30px rgba(56,189,248,0.35)' }}>
                            AI-native
                        </span>{' '}
                        web.
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto text-base">
                        Three foundational capabilities that make InlayAd the infrastructure layer for AI advertising.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {/* Large Cell: MCP Server */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="md:col-span-2 bento-cell group hover:border-sky-400/30 transition-all duration-300"
                        style={{ minHeight: '320px' }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                                <Server className="w-5 h-5 text-sky-400" />
                            </div>
                            <span className="section-label-sky text-xs">FEATURE 01</span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-black mb-3">
                            MCP Server Integration
                        </h3>
                        <p className="text-gray-400 mb-8 text-sm md:text-base leading-relaxed max-w-lg">
                            Developers prompt our MCP server to perfectly place ad spaces into their sites or AI apps.
                            Zero layout work — the server reads your context and picks the optimal placement automatically.
                        </p>

                        <div className="code-block text-xs md:text-sm overflow-x-auto">
                            <div className="text-gray-500 mb-1">// Add to your MCP config</div>
                            <div>
                                <span className="text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-4">
                                <span className="text-sky-300">"mcpServers"</span>
                                <span className="text-white">: </span>
                                <span className="text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-8">
                                <span className="text-sky-300">"inlayad"</span>
                                <span className="text-white">: </span>
                                <span className="text-yellow-400">{"{"}</span>
                            </div>
                            <div className="pl-12">
                                <span className="text-sky-300">"command"</span>
                                <span className="text-white">: </span>
                                <span className="text-green-400">"npx inlayad-mcp"</span>
                            </div>
                            <div className="pl-8"><span className="text-yellow-400">{"}"}</span></div>
                            <div className="pl-4"><span className="text-yellow-400">{"}"}</span></div>
                            <div><span className="text-yellow-400">{"}"}</span></div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-400 text-xs font-bold">
                                <Code2 className="w-3 h-3" /> 3-line integration
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs font-bold">
                                Sub-4ms latency
                            </span>
                        </div>
                    </motion.div>

                    {/* UMP Targeting */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bento-cell group hover:border-yellow-400/30 transition-all duration-300"
                        style={{ minHeight: '320px' }}
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                                <Layers className="w-5 h-5 text-yellow-400" />
                            </div>
                            <span className="section-label-yellow text-xs">FEATURE 03</span>
                        </div>

                        <h3 className="text-2xl font-black mb-3">
                            Multi-Layered<br />Targeting
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            Ads served through a signal progression that gets smarter with every interaction.
                        </p>

                        <div className="space-y-2.5">
                            {[
                                { layer: '01', label: 'Cookies & Device', color: 'text-gray-400', bg: 'bg-white/5', border: 'border-white/10' },
                                { layer: '02', label: 'Current Prompt', color: 'text-sky-400', bg: 'bg-sky-400/5', border: 'border-sky-400/20' },
                                { layer: '03', label: 'UMP Memory', color: 'text-yellow-400', bg: 'bg-yellow-400/5', border: 'border-yellow-400/20' },
                            ].map(item => (
                                <div key={item.layer} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${item.bg} border ${item.border}`}
                                    style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.04)' }}>
                                    <span className="text-xs font-black text-gray-600">{item.layer}</span>
                                    <span className={`text-sm font-bold ${item.color}`}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Dual Ad Formats */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bento-cell group hover:border-sky-400/30 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center">
                                <MessageSquare className="w-5 h-5 text-sky-400" />
                            </div>
                            <span className="section-label-sky text-xs">FEATURE 02</span>
                        </div>

                        <h3 className="text-2xl font-black mb-3">
                            Dual Ad<br />Formats
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            Traditional banner ads for websites. Dynamic chat card ads for AI interfaces.
                        </p>

                        <div className="space-y-3">
                            <div className="rounded-xl border border-white/10 p-3 bg-white/5" style={{ boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.04)' }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <BarChart3 className="w-3.5 h-3.5 text-gray-400" />
                                    <span className="text-xs font-bold text-gray-400">BANNER / POSTER</span>
                                </div>
                                <div className="h-6 rounded-md bg-white/5 border border-white/5 flex items-center px-2">
                                    <div className="w-full h-1.5 rounded bg-white/10" />
                                </div>
                            </div>
                            <div className="rounded-xl border border-sky-400/20 p-3 bg-sky-400/5" style={{ boxShadow: 'inset 0 1px 2px rgba(56,189,248,0.06)' }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <MessageSquare className="w-3.5 h-3.5 text-sky-400" />
                                    <span className="text-xs font-bold text-sky-400">CHAT CARD</span>
                                </div>
                                <div className="text-xs text-gray-400 leading-relaxed">
                                    "Based on your question, you might like <span className="text-sky-400">→ Sponsored Product</span>"
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="bento-cell group hover:border-sky-400/20 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                                <Shield className="w-5 h-5 text-gray-400" />
                            </div>
                            <span className="section-label text-xs text-gray-500 border-gray-500/30 bg-white/5">RESEARCH-BACKED</span>
                        </div>

                        <h3 className="text-2xl font-black mb-6">
                            Built on Peer-Reviewed Science
                        </h3>

                        <div className="grid grid-cols-2 gap-3">
                            {[
                                { value: '41%', label: 'Context Retention Lift', color: 'text-sky-400' },
                                { value: '0.82', label: 'F1 Identity Score', color: 'text-yellow-400' },
                                { value: '< 4ms', label: 'Infrastructure Latency', color: 'text-white' },
                                { value: '$3/M', label: 'Cost Per Million Req', color: 'text-white' },
                            ].map(stat => (
                                <div key={stat.label} className="p-3 rounded-xl bg-white/5 border border-white/5"
                                    style={{ boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.04)' }}>
                                    <div className={`text-2xl font-black ${stat.color}`}>{stat.value}</div>
                                    <div className="text-xs text-gray-500 mt-0.5 leading-tight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Privacy by Design */}
                    <motion.div
                        {...fadeUp}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bento-cell group hover:border-yellow-400/20 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">
                                <Lock className="w-5 h-5 text-yellow-400" />
                            </div>
                            <span className="section-label-yellow text-xs">PRIVACY FIRST</span>
                        </div>

                        <h3 className="text-2xl font-black mb-3">
                            Privacy by<br />Design
                        </h3>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                            UMP builds user models with differential privacy — no PII stored, no cookies required. GDPR and DPDP compliant out of the box.
                        </p>

                        <div className="space-y-2">
                            {[
                                { label: 'No PII stored', color: 'text-yellow-400' },
                                { label: 'Differential privacy', color: 'text-yellow-400' },
                                { label: 'Cookie-free targeting', color: 'text-yellow-400' },
                            ].map(item => (
                                <div key={item.label} className="flex items-center gap-2.5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                                    <span className={`text-sm font-medium ${item.color}`}>{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
