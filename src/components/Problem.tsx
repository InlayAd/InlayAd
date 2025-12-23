import { motion } from 'framer-motion';
import { EyeOff, Wallet, TrendingDown } from 'lucide-react';

const problems = [
    {
        icon: EyeOff,
        title: "The Viewer",
        headline: "Banner Blindness",
        description: "Interruptive ads break the dopamine loop. Viewers have learned to ignore traditional ad formats entirely.",
        color: "text-blue-400"
    },
    {
        icon: Wallet,
        title: "The Creator",
        headline: "90% Earn Zero",
        description: "India has 2.5M creators, yet the vast majority make no revenue despite significant engagement.",
        color: "text-primary"
    },
    {
        icon: TrendingDown,
        title: "The Brand",
        headline: "Wasted Attention",
        description: "Reels & Shorts capture 20% of user attention but attract only 1% of total ad spend.",
        color: "text-green-400"
    }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export function Problem() {
    return (
        <section className="py-24 px-4 bg-background relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-red-500 line-through decoration-primary">Broken</span> Economy</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">The current advertising model is failing all three key stakeholders.</p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {problems.map((p, idx) => (
                        <motion.div
                            key={idx}
                            variants={item}
                            className="bg-card p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors`}>
                                <p.icon className={`w-6 h-6 ${p.color}`} />
                            </div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">{p.title}</h3>
                            <h4 className="text-2xl font-bold mb-3">{p.headline}</h4>
                            <p className="text-gray-400 leading-relaxed">{p.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
