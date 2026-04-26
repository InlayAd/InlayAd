import { Mail, Linkedin, Globe, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

export function Founders() {
    return (
        <section className="py-24 px-4 bg-black border-t border-card-border" id="founders">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="section-label-sky mb-4">THE BUILDER</span>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
                        Meet the{' '}
                        <span className="text-sky-400" style={{ textShadow: '0 0 24px rgba(56,189,248,0.3)' }}>
                            Founder.
                        </span>
                    </h2>
                    <p className="text-gray-500 mt-3 text-sm">Built at IIT Kanpur</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bento-cell border-sky-400/20 hover:border-sky-400/40 transition-all duration-300 max-w-3xl mx-auto"
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 text-center md:text-left">
                        <div className="shrink-0">
                            <img
                                src="/founder.jpeg"
                                alt="Devansh Verma — Founder of InlayAd"
                                loading="lazy"
                                width="160"
                                height="160"
                                className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover border border-sky-400/20"
                                style={{ boxShadow: '0 0 24px rgba(56,189,248,0.15)' }}
                            />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-2xl font-black text-white mb-1">Devansh Verma</h3>
                            <div className="text-sky-400 font-bold text-sm mb-6">Founder — InlayAd</div>

                            <div className="space-y-4 text-gray-300 text-sm leading-relaxed mb-6">
                                <p>
                                    Engineer at heart. I obsess over building intelligent systems that scale and impact millions.
                                    Currently completing my 4th year in Math &amp; Scientific Computing at IIT Kanpur.
                                </p>
                                <p>
                                    Before InlayAd, I architected data infrastructure scaling to{' '}
                                    <strong className="text-white">15Cr+ households</strong> for the Indian Government,
                                    and built and scaled a consumer platform to{' '}
                                    <strong className="text-white">50K+ users</strong> single-handedly.
                                    I've also spent time deep in quant trading, leveraging Deep Learning to optimize quantitative strategies.
                                </p>
                                <p>
                                    Now, I'm combining deep expertise in AI systems, LLM optimization, and probabilistic modeling
                                    to build the advertising infrastructure for the AI era —
                                    starting with the publication of Universal Memory Protocol at IIT Kanpur.
                                </p>
                            </div>

                            <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                                <a href="https://devanshv17.github.io" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium"
                                    aria-label="Portfolio">
                                    <Globe className="w-4 h-4" /> Portfolio
                                </a>
                                <a href="mailto:devanshv22@iitk.ac.in"
                                    className="flex items-center gap-1.5 text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium"
                                    aria-label="Email">
                                    <Mail className="w-4 h-4" /> Email
                                </a>
                                <a href="https://www.linkedin.com/in/devanshv17/" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-gray-400 hover:text-sky-400 transition-colors text-sm font-medium"
                                    aria-label="LinkedIn">
                                    <Linkedin className="w-4 h-4" /> LinkedIn
                                </a>
                                <a href="https://zenodo.org/records/19423177" target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 transition-colors text-sm font-bold"
                                    aria-label="Research Paper">
                                    <BookOpen className="w-4 h-4" /> UMP Research
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
