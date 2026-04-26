import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, FlaskConical, Brain, Shield, Cpu, BarChart3, Link2 } from 'lucide-react';

export function ResearchPage() {
    return (
        <main className="pt-28 pb-24 px-4 bg-black min-h-screen">
            <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

            <div className="max-w-4xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="section-label-yellow mb-6">RESEARCH</span>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-6">
                        Universal Memory Protocol
                    </h1>

                    <p className="text-xl text-gray-400 leading-relaxed mb-8">
                        A Probabilistic Framework for Cross-Platform AI Memory and Identity Resolution
                    </p>

                    <div className="flex flex-wrap gap-3 mb-8">
                        <span className="section-label text-gray-400 bg-white/5 border-white/10">Devansh Verma</span>
                        <span className="section-label text-gray-400 bg-white/5 border-white/10">IIT Kanpur</span>
                        <span className="section-label text-yellow-400 bg-yellow-400/10 border-yellow-400/30">March 2026</span>
                        <span className="section-label text-gray-500 bg-white/5 border-white/10 font-mono text-xs">
                            DOI: 10.5281/zenodo.19423177
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://zenodo.org/records/19423177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-sm"
                            style={{ background: '#facc15', color: '#000', boxShadow: '4px 4px 0px rgba(250,204,21,0.4)' }}
                        >
                            <BookOpen className="w-4 h-4" />
                            Read Full Preprint
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                        <a
                            href="https://zenodo.org/records/19423177"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-sm"
                            style={{ borderColor: 'rgba(250,204,21,0.4)', color: '#facc15' }}
                        >
                            Cite on Zenodo
                        </a>
                    </div>
                </motion.div>

                {/* Problem */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bento-cell border-yellow-400/20 bg-yellow-400/5 mb-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                            <FlaskConical className="w-5 h-5 text-yellow-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-white mb-3">The Problem: Contextual Amnesia in AI</h2>
                            <p className="text-gray-300 leading-relaxed text-sm">
                                Current AI agents operate in isolation. Each session starts fresh — with no memory of the user's
                                history across platforms, devices, or previous conversations. The research calls this
                                <strong className="text-yellow-400"> "contextual amnesia"</strong>, and it fundamentally limits
                                how well AI systems can serve users — including how accurately advertisers can reach them.
                                Traditional cookies can't read inside conversations. Contextual targeting only sees one message.
                                Neither captures the full signal.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Architecture */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6"
                >
                    <h2 className="text-2xl font-black text-white mb-4">Three-Layer Architecture</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                icon: FlaskConical,
                                title: 'Information Entropy Analysis',
                                desc: 'Analyzes the semantic richness of each user interaction. High-entropy messages — specific, detailed queries — carry stronger targeting signal and are weighted accordingly in the probability model.',
                                color: 'text-yellow-400',
                                bg: 'bg-yellow-400/5',
                                border: 'border-yellow-400/20',
                            },
                            {
                                icon: Brain,
                                title: 'Gaussian-Boosted Similarity Metrics',
                                desc: 'Models user interests as probability distributions rather than binary categories. A Gaussian distribution centered on a user\'s interest domain updates via Bayesian inference with each new interaction.',
                                color: 'text-sky-400',
                                bg: 'bg-sky-400/5',
                                border: 'border-sky-400/20',
                            },
                            {
                                icon: Shield,
                                title: 'Client-Agnostic Hardware Anchoring',
                                desc: 'Links cross-session interactions probabilistically using hardware-level signals processed with differential privacy. No PII stored. No cookies required. Identity resolved statistically.',
                                color: 'text-white',
                                bg: 'bg-white/5',
                                border: 'border-white/10',
                            },
                        ].map(item => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className={`bento-cell ${item.bg} ${item.border}`}>
                                    <Icon className={`w-5 h-5 ${item.color} mb-4`} />
                                    <h3 className={`text-sm font-black ${item.color} mb-2`}>{item.title}</h3>
                                    <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Key Results */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="mb-6"
                >
                    <h2 className="text-2xl font-black text-white mb-4">Key Results</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { value: '41%', label: 'Context Retention Improvement', sub: 'vs baseline systems', color: 'text-sky-400' },
                            { value: '0.82', label: 'F1-Score', sub: 'Identity linking accuracy', color: 'text-yellow-400' },
                            { value: '0', label: 'False Positives', sub: 'In identity test set', color: 'text-white' },
                            { value: '<4ms', label: 'Infrastructure Latency', sub: '$3.00/M requests', color: 'text-sky-400' },
                        ].map(stat => (
                            <div key={stat.label} className="bento-cell text-center">
                                <div className={`text-3xl md:text-4xl font-black ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="text-xs font-bold text-white mb-1">{stat.label}</div>
                                <div className="text-xs text-gray-600">{stat.sub}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Technical Foundations */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bento-cell border-card-border mb-6"
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Cpu className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-white mb-1">Technical Foundations</h2>
                            <p className="text-gray-500 text-sm">Methodologies applied in the UMP framework</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Vector Quantization',
                            'Graph Neural Networks',
                            'Differential Privacy',
                            'Edge Computing',
                            'Model Context Protocol',
                            'Bayesian Inference',
                            'Entropy Analysis',
                            'Probabilistic Identity Resolution',
                        ].map(tech => (
                            <span key={tech} className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-gray-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Application to AdTech */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="bento-cell border-sky-400/20 bg-sky-400/5 mb-6"
                >
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                            <BarChart3 className="w-5 h-5 text-sky-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-black text-white mb-3">Application: AI Ad Targeting</h2>
                            <p className="text-gray-300 leading-relaxed text-sm mb-4">
                                InlayAd applies UMP as the third and most powerful layer in a progressive targeting stack.
                                New users receive cookie-quality targeting as a baseline. As sessions accumulate,
                                the UMP layer becomes dominant — building a probabilistic model of user interests
                                from their full conversational history across every InlayAd-integrated app.
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                <strong className="text-white">Important distinction:</strong> The published research establishes
                                the theoretical framework and proves feasibility. The InlayAd production system —
                                the specific model architectures, training data, and MCP server implementation — is proprietary.
                                The paper is the "why it works." The integration is the "how to use it."
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Citation */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bento-cell border-card-border"
                >
                    <div className="flex items-start gap-3 mb-4">
                        <Link2 className="w-5 h-5 text-gray-500 shrink-0 mt-0.5" />
                        <h3 className="text-base font-black text-white">How to Cite</h3>
                    </div>
                    <div className="code-block text-xs leading-relaxed">
                        Verma, D. (2026). <em>Universal Memory Protocol: A Probabilistic Framework for Cross-Platform AI Memory and Identity Resolution.</em> Zenodo. https://doi.org/10.5281/zenodo.19423177
                    </div>
                    <a
                        href="https://zenodo.org/records/19423177"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-4 text-sm font-black text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                        View on Zenodo <ArrowUpRight className="w-4 h-4" />
                    </a>
                </motion.div>

            </div>
        </main>
    );
}
