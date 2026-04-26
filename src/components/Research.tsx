import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FlaskConical } from 'lucide-react';

export function Research() {
    return (
        <section id="research" className="py-24 px-4 bg-black relative overflow-hidden border-t border-card-border">
            <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.04) 0%, transparent 60%)' }} />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label-yellow mb-4">PEER-REVIEWED RESEARCH</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-6">
                            The science behind{' '}
                            <span className="text-yellow-400" style={{ textShadow: '0 0 24px rgba(250,204,21,0.3)' }}>
                                UMP.
                            </span>
                        </h2>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            InlayAd's targeting engine is built on published, peer-reviewed research.
                            Universal Memory Protocol — a probabilistic framework for cross-platform AI memory
                            and identity resolution — was developed at IIT Kanpur and is publicly available on Zenodo.
                        </p>

                        <div className="space-y-3 mb-8">
                            {[
                                '41% improvement in cross-session context retention',
                                '0.82 F1-score for probabilistic identity linking',
                                'Sub-4ms latency at $3.00 per million requests',
                                'Zero false positives in identity resolution test set',
                            ].map(point => (
                                <div key={point} className="flex items-start gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0" />
                                    <span className="text-gray-300 text-sm">{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <Link to="/research" className="btn-primary text-sm"
                                style={{ background: '#facc15', color: '#000', boxShadow: '4px 4px 0px rgba(250,204,21,0.4)' }}>
                                Read the Research <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://zenodo.org/records/19423177"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary text-sm"
                                style={{ borderColor: 'rgba(250,204,21,0.5)', color: '#facc15' }}
                            >
                                <BookOpen className="w-4 h-4" /> View Preprint
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="space-y-4"
                    >
                        <div className="bento-cell border-yellow-400/20 bg-yellow-400/5">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center shrink-0">
                                    <FlaskConical className="w-5 h-5 text-yellow-400" />
                                </div>
                                <div>
                                    <h3 className="font-black text-white mb-1 text-base">
                                        Universal Memory Protocol
                                    </h3>
                                    <p className="text-xs text-gray-500 mb-3">
                                        A Probabilistic Framework for Cross-Platform AI Memory and Identity Resolution
                                    </p>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400">IIT Kanpur</span>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">March 2026</span>
                                        <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">DOI: 10.5281/zenodo.19423177</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'Information Entropy Analysis', desc: 'Weighs semantic richness of each interaction' },
                                { label: 'Gaussian Similarity Metrics', desc: 'Models interests as probability distributions' },
                                { label: 'Hardware Anchoring', desc: 'Privacy-preserving cross-session identity' },
                                { label: 'Differential Privacy', desc: 'No PII stored — only statistical signatures' },
                            ].map(item => (
                                <div key={item.label} className="bento-cell py-4 px-4 hover:border-yellow-400/20 transition-colors">
                                    <div className="text-xs font-black text-yellow-400 mb-1">{item.label}</div>
                                    <div className="text-xs text-gray-500 leading-relaxed">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
