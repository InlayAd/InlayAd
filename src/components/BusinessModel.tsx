import { motion } from 'framer-motion';
import { IndianRupee } from 'lucide-react';

export function BusinessModel() {
    return (
        <section className="py-24 px-4 bg-card/30 relative border-y border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold">Revenue Share</h2>
                        <p className="text-xl text-gray-300">
                            Optimized for <span className="text-primary font-semibold">Cost per Second</span> to serve micro-influencers profitably.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            We believe creators deserve the lion's share. Our transparent pricing model ensures sustainable growth for the entire ecosystem.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Chart/Visual */}
                        <div className="bg-card border border-white/5 rounded-2xl p-8 space-y-6">

                            <div className="space-y-4">
                                <div className="w-full">
                                    <div className="flex justify-between mb-2 text-sm font-medium">
                                        <span className="text-gray-400">Creator Payout (80%)</span>
                                        <span className="text-white flex items-center"><IndianRupee className="w-3 h-3 mr-1" /> 160</span>
                                    </div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "80%" }}
                                        transition={{ duration: 1, ease: "easeOut" }}
                                        className="h-4 bg-primary rounded-full relative overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                                    </motion.div>
                                </div>

                                <div className="w-full">
                                    <div className="flex justify-between mb-2 text-sm font-medium">
                                        <span className="text-gray-400">Inlay Fee (20%)</span>
                                        <span className="text-white flex items-center"><IndianRupee className="w-3 h-3 mr-1" /> 40</span>
                                    </div>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "20%" }}
                                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                        className="h-4 bg-gray-600 rounded-full"
                                    />
                                </div>
                            </div>

                            <div className="pt-6 border-t border-white/10 flex justify-between items-end">
                                <div>
                                    <div className="text-sm text-gray-500 mb-1">Total Gross CPM</div>
                                    <div className="text-3xl font-bold flex items-center text-white">
                                        <IndianRupee className="w-6 h-6 mr-1 text-gray-400" />
                                        200
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold uppercase rounded-full border border-green-500/20">
                                    High Yield
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
