import { motion } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

export function Blog() {
    return (
        <section id="insights" className="py-24 px-4 bg-black relative z-10 border-t border-card-border">
            <div className="absolute inset-0 grid-bg pointer-events-none opacity-50" />

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6"
                >
                    <div>
                        <span className="section-label-sky mb-4">INSIGHTS</span>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4 mb-3">
                            The future of{' '}
                            <span className="text-sky-400" style={{ textShadow: '0 0 24px rgba(56,189,248,0.3)' }}>
                                AI ads.
                            </span>
                        </h2>
                        <p className="text-gray-400 max-w-md text-sm">
                            Research, analysis, and technical writing on the AI advertising landscape.
                        </p>
                    </div>
                    <Link to="/blog"
                        className="inline-flex items-center gap-2 text-sm font-black text-sky-400 hover:text-sky-300 transition-colors shrink-0">
                        View all posts <ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-4">
                    {blogPosts.map((post, idx) => (
                        <motion.article
                            key={post.slug}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bento-cell group hover:border-sky-400/30 transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center gap-3 text-xs text-gray-600 mb-4">
                                <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {post.readTime}
                                </span>
                                <span>·</span>
                                <span>{post.date}</span>
                            </div>

                            <h3 className="text-lg font-black text-white mb-3 leading-snug group-hover:text-sky-400 transition-colors">
                                {post.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
                                {post.excerpt}
                            </p>

                            <div>
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {post.tags.slice(0, 2).map(tag => (
                                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-sky-400/80 bg-sky-400/5 rounded-full border border-sky-400/10">
                                            <Tag className="w-2.5 h-2.5" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to={`/blog/${post.slug}`}
                                    className="inline-flex items-center gap-1.5 text-sm font-black text-sky-400 hover:text-sky-300 transition-colors"
                                >
                                    Read More <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
