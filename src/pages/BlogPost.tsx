import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { blogPosts, getPostBySlug, type BlogSection } from '../data/blogPosts';

function renderSection(section: BlogSection, idx: number) {
    switch (section.type) {
        case 'h2':
            return (
                <h2 key={idx} className="text-2xl md:text-3xl font-black text-white mt-12 mb-4 tracking-tight">
                    {section.text}
                </h2>
            );
        case 'paragraph':
            return (
                <p key={idx} className="text-gray-300 leading-relaxed text-base mb-6">
                    {section.text}
                </p>
            );
        case 'list':
            return (
                <ul key={idx} className="space-y-4 mb-6">
                    {section.items?.map((item, i) => {
                        const colonIdx = item.indexOf(':');
                        const hasLabel = colonIdx > 0 && colonIdx < 50;
                        return (
                            <li key={i} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2.5 shrink-0" />
                                <span className="text-gray-300 text-base leading-relaxed">
                                    {hasLabel ? (
                                        <>
                                            <strong className="text-white font-black">{item.substring(0, colonIdx)}</strong>
                                            {item.substring(colonIdx)}
                                        </>
                                    ) : item}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            );
        case 'callout':
            return (
                <div key={idx} className="bento-cell border-sky-400/30 bg-sky-400/5 my-8">
                    <p className="text-gray-200 leading-relaxed text-base font-medium italic">
                        {section.text}
                    </p>
                </div>
            );
        default:
            return null;
    }
}

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = slug ? getPostBySlug(slug) : undefined;

    useEffect(() => {
        if (!post) return;
        document.title = post.seoTitle;
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `https://inlayad.com/blog/${post.slug}`);
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute('content', post.seoDescription);
    }, [post]);

    if (!post) return <Navigate to="/blog" replace />;

    const currentIdx = blogPosts.findIndex(p => p.slug === slug);
    const prevPost = currentIdx > 0 ? blogPosts[currentIdx - 1] : null;
    const nextPost = currentIdx < blogPosts.length - 1 ? blogPosts[currentIdx + 1] : null;

    return (
        <main className="pt-28 pb-24 px-4 bg-black min-h-screen">
            <div className="absolute inset-0 grid-bg pointer-events-none opacity-30" />

            <div className="max-w-3xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Back link */}
                    <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-sky-400 transition-colors mb-10">
                        <ArrowLeft className="w-4 h-4" /> Back to Blog
                    </Link>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-sky-400/80 bg-sky-400/5 rounded-full border border-sky-400/10">
                                <Tag className="w-2.5 h-2.5" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-12 pb-8 border-b border-card-border">
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                        <span>·</span>
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>InlayAd Blog</span>
                    </div>

                    {/* Content */}
                    <article className="prose-inlay">
                        {post.sections.map((section, idx) => renderSection(section, idx))}
                    </article>

                    {/* Navigation */}
                    <div className="mt-16 pt-8 border-t border-card-border grid grid-cols-1 md:grid-cols-2 gap-4">
                        {prevPost && (
                            <Link to={`/blog/${prevPost.slug}`} className="bento-cell hover:border-sky-400/30 transition-all group block">
                                <div className="text-xs font-bold text-gray-600 mb-2 flex items-center gap-1">
                                    <ArrowLeft className="w-3 h-3" /> Previous
                                </div>
                                <div className="text-sm font-black text-white group-hover:text-sky-400 transition-colors leading-snug">
                                    {prevPost.title}
                                </div>
                            </Link>
                        )}
                        {nextPost && (
                            <Link to={`/blog/${nextPost.slug}`} className={`bento-cell hover:border-sky-400/30 transition-all group block ${!prevPost ? 'md:col-start-2' : ''}`}>
                                <div className="text-xs font-bold text-gray-600 mb-2 flex items-center gap-1 md:justify-end">
                                    Next <ArrowRight className="w-3 h-3" />
                                </div>
                                <div className="text-sm font-black text-white group-hover:text-sky-400 transition-colors leading-snug md:text-right">
                                    {nextPost.title}
                                </div>
                            </Link>
                        )}
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
