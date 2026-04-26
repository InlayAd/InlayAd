import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    const scrollToWaitlist = () => {
        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToFeatures = () => {
        document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden pt-24">
            <div className="absolute inset-0 grid-bg pointer-events-none" />

            {/* Sky glow orbs */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(56,189,248,0.06) 0%, transparent 70%)' }} />
            <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, rgba(250,204,21,0.04) 0%, transparent 70%)' }} />

            <div className="z-10 text-center max-w-5xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-8">
                        <span className="section-label-sky flex items-center gap-1.5">
                            <Zap className="w-3 h-3" />
                            AI ADVERTISING NETWORK
                        </span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] mb-6">
                        <span
                            className="text-sky-400 block"
                            style={{ textShadow: '0 0 40px rgba(56,189,248,0.4)' }}
                        >
                            InlayAd
                        </span>
                        <span className="text-white text-4xl md:text-5xl lg:text-6xl font-black tracking-tight block mt-3">
                            AdSense for the AI Era.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
                        Monetize AI apps and websites with precision-targeted ads powered by{' '}
                        <span className="text-yellow-400 font-medium">Probabilistic AI Memory</span>
                        {' '}— serving the right ad at the right moment, every time.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <button onClick={scrollToWaitlist} className="btn-primary text-sm">
                        Get Early Access <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={scrollToFeatures} className="btn-secondary text-sm">
                        See How It Works
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4"
                >
                    {[
                        { value: 'Sub-4ms', label: 'Ad Latency' },
                        { value: '0.82 F1', label: 'Targeting Accuracy' },
                        { value: '3 Layers', label: 'Signal Depth' },
                        { value: 'MCP', label: 'Integration' },
                    ].map(stat => (
                        <div key={stat.label} className="text-center">
                            <div className="text-xl md:text-2xl font-black text-white">{stat.value}</div>
                            <div className="text-xs font-bold tracking-widest uppercase text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
