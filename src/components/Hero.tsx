import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    const scrollToWaitlist = () => {
        const waitlistSection = document.getElementById('waitlist');
        if (waitlistSection) {
            waitlistSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/20 pointer-events-none" />

            <div className="z-10 text-center max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                        SHORT-FORM VIDEO AD-TECH
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                        Making advertising <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">invisible</span>, <span className="text-primary">scalable</span>, and profitable.
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        We turn short-form video pixels into premium ad real estate. AI-powered product placement for Reels, Shorts & TikTok — non-intrusive for viewers, zero-effort for creators.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <button
                        onClick={scrollToWaitlist}
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full overflow-hidden transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,95,31,0.3)] hover:shadow-[0_0_30px_rgba(255,95,31,0.5)]"
                    >
                        Join the Waitlist
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </motion.div>
            </div>

            {/* Abstract Industrial Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}
            />
        </section>
    );
}
