import { motion } from 'framer-motion';

export function TechShowcase() {
    return (
        <section className="py-24 px-4 bg-background relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-primary">Inlay</span> Magic</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Powered by 3D Gaussian Splatting and Optical Flow for photorealistic asset injection.
                    </p>
                </div>

                {/* Video Container with Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-[0_0_50px_rgba(255,95,31,0.15)] border border-primary/20 group hover:border-primary/40 transition-colors"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-20 pointer-events-none" />

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&rel=0&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
                        title="Inlay Tech Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full object-cover"
                    ></iframe>
                </motion.div>

                {/* Tech Specs */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 w-full max-w-4xl text-center">
                    {[
                        { label: "Latency", value: "< 20ms" },
                        { label: "Integration", value: "Zero-Code" },
                        { label: "Assets", value: "Photorealistic" },
                        { label: "Platform", value: "Universal" },
                    ].map((spec, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-card/50 border border-white/5">
                            <div className="text-2xl font-bold text-white mb-1">{spec.value}</div>
                            <div className="text-sm text-gray-500 uppercase tracking-wider">{spec.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
