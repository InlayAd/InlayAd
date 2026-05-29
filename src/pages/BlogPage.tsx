import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function BlogPage() {
    useEffect(() => {
        document.title = 'Blog | InlayAd — AI Advertising Insights';
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', 'https://inlayad.com/blog');
    }, []);

    return (
        <main className="pt-28 pb-24 px-4 bg-black min-h-screen">
            <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

            <div className="max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <span className="section-label-sky mb-4">INSIGHTS</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-4">
                        The InlayAd{' '}
                        <span className="text-sky-400" style={{ textShadow: '0 0 30px rgba(56,189,248,0.3)' }}>
                            Blog.
                        </span>
                    </h1>
                    <p className="text-gray-400 text-base max-w-lg">
                        Research, analysis, and technical writing on AI advertising, probabilistic targeting, and the future of monetization.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {blogPosts.map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                        >
                            <Link to={`/blog/${post.slug}`} className="block group">
                                <div className="bento-cell hover:border-sky-400/30 transition-all duration-300 group-hover:bg-sky-400/[0.02]">
                                    <div className="flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                                <span>·</span>
                                                <span>{post.date}</span>
                                            </div>
                                            <h2 className="text-xl md:text-2xl font-black text-white mb-3 group-hover:text-sky-400 transition-colors leading-snug">
                                                {post.title}
                                            </h2>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-2xl">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags.map(tag => (
                                                    <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-sky-400/70 bg-sky-400/5 rounded-full border border-sky-400/10">
                                                        <Tag className="w-2.5 h-2.5" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="shrink-0">
                                            <div className="inline-flex items-center gap-2 text-sm font-black text-sky-400 group-hover:text-sky-300 transition-colors">
                                                Read <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </div>
            </div>
        </main>
    );
}
