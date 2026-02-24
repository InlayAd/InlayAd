import { motion } from 'framer-motion';
import { Clock, Tag, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const insights = [
    {
        id: 'gaussian-splatting-ads',
        title: "How 3D Gaussian Splatting is Changing Short-Form Video Advertising",
        excerpt: "Traditional product placement requires physical logistics — shipping products, coordinating shoots, and weeks of post-production. 3D Gaussian Splatting eliminates all of that for Reels, Shorts, and TikTok.",
        content: `The advertising industry is at an inflection point. Traditional product placement requires physical logistics — shipping products, coordinating shoots, and weeks of post-production. 3D Gaussian Splatting (3DGS) eliminates all of that by reconstructing photorealistic 3D scenes from standard 2D images.

Unlike traditional polygon-mesh 3D modeling, 3DGS uses millions of tiny light-emitting points (Gaussians) to represent objects with stunning fidelity. The result? Photorealistic product assets that can be rendered in real-time at under 20ms latency — fast enough for live video.

At Inlay, we combine 3DGS with Optical Flow analysis to understand scene geometry, depth, and motion. This allows us to inject brand assets into creator videos that look indistinguishable from native content. No reshoots. No shipping. No coordination delays.

The implications for brands are massive: instead of paying for a single influencer shoot, a brand can have its product appear naturally in hundreds of videos across the creator economy — simultaneously.

Early adopters like Zillow and Monks are already using 3DGS for e-commerce visualization. We're taking it a step further into the $600B digital advertising market, specifically targeting the creator economy where the friction between brands and creators has never been higher.

The future of advertising isn't interruption — it's integration. And 3D Gaussian Splatting is the technology that makes it possible at scale.`,
        readTime: "5 min read",
        tags: ["3D Gaussian Splatting", "Short-Form Video Ads", "Computer Vision"],
        date: "Feb 2026"
    },
    {
        id: 'non-intrusive-ads',
        title: "Why Non-Intrusive Ads Win: The Creator Economy Shift",
        excerpt: "67% of Gen Z uses ad blockers. The old model of pre-roll ads and banner interruptions is dying — and the creator economy is demanding something better.",
        content: `67% of Gen Z uses ad blockers. YouTube Premium has over 100 million subscribers specifically to avoid ads. The message from consumers is clear: interruption-based advertising is broken.

Yet the creator economy is booming. Influencer marketing surpassed $21B in 2024 and is projected to double by 2028. The paradox? Audiences love creator content but hate the ads within it. The cringe "and now a word from our sponsor" mid-roll is the single biggest driver of viewer drop-off.

Non-intrusive advertising solves this by making the ad indistinguishable from the content. Instead of overlaying a banner or inserting a pre-roll, non-intrusive methods embed products directly into the video's visual narrative. A creator filming a cooking video? That branded olive oil bottle on the counter was placed there by AI — photorealistically, automatically, in post-production.

This approach delivers three critical advantages:
• Viewer retention stays high because there's no interruption to break the content flow
• Brand recall actually increases because the product appears in a natural context rather than a skippable ad slot
• Creator authenticity is preserved — no awkward script changes or forced endorsements

At InlayAd, we're building this future. Our autonomous AI handles the entire pipeline: scene analysis, asset injection, and real-time rendering. The result is advertising that viewers don't skip, creators don't resent, and brands can scale infinitely.

The shift from intrusive to invisible advertising isn't coming — it's already here.`,
        readTime: "4 min read",
        tags: ["Creator Economy", "Non-Intrusive Ads", "Short-Form Content"],
        date: "Feb 2026"
    },
    {
        id: 'end-of-logistics',
        title: "The End of Logistics-Heavy Brand Deals",
        excerpt: "The average influencer brand deal takes 6-8 weeks from outreach to published post. Most of that time is spent on shipping, coordination, and approvals. What if it took zero?",
        content: `The average influencer brand deal takes 6-8 weeks from outreach to published post. Here's where the time goes:
• Week 1-2: Outreach, negotiation, and contracts
• Week 3-4: Product shipping and delivery
• Week 5: Creator produces content with the product
• Week 6-7: Brand review, revision requests
• Week 8: Content goes live

For a single video. At a cost of $5,000-$50,000+ for a mid-tier influencer. And if the content underperforms? That budget is gone.

The logistics model doesn't scale. Brands can't ship products to thousands of micro-influencers. Creators making fewer than 100K views per video can't afford to dedicate a week to a single brand deal. This gap between top-tier influencers (who are oversaturated with offers) and micro-creators (who are underserved) represents a massive market inefficiency.

InlayAd eliminates the logistics entirely. Our autonomous AI pipeline works like this:
1. Brand uploads product assets and campaign parameters
2. Our 3D Gaussian Splatting engine creates photorealistic 3D models of the product
3. AI identifies optimal placement opportunities across creator videos
4. Products are injected into videos in post-production with zero creator intervention
5. Real-time tracking dashboard shows exactly how each placement performs

The result: a brand can go from campaign brief to live placements across 50+ creator videos in under 24 hours. No shipping. No coordination. No creative reviews.

For creators, this means passive income from existing content. Our 80% creator payout ensures that the people actually driving views are fairly compensated — automatically, every month.

The era of logistics-heavy brand deals is ending. Welcome to autonomous advertising.`,
        readTime: "6 min read",
        tags: ["Brand Deals", "Reels & Shorts", "Micro-Influencers"],
        date: "Feb 2026"
    }
];

export function Blog() {
    const [expandedArticle, setExpandedArticle] = useState<string | null>(null);

    const toggleArticle = (id: string) => {
        setExpandedArticle(expandedArticle === id ? null : id);
    };

    return (
        <section id="insights" className="py-24 px-4 bg-card/30 border-t border-white/5 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                        INSIGHTS
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        The Future of <span className="text-primary">Ad Tech</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Explore how autonomous AI, 3D Gaussian Splatting, and the creator economy are converging to reinvent short-form video advertising across Reels, Shorts & TikTok.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {insights.map((article, idx) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-background border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all group"
                        >
                            {/* Article Header */}
                            <div className="p-6 pb-0">
                                <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {article.readTime}
                                    </span>
                                    <span>•</span>
                                    <span>{article.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                            </div>

                            {/* Expanded Content */}
                            <div className={`overflow-hidden transition-all duration-500 ${expandedArticle === article.id ? 'max-h-[2000px]' : 'max-h-0'}`}>
                                <div className="px-6 pb-2">
                                    <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line border-t border-white/5 pt-4">
                                        {article.content}
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="p-6 pt-2">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map(tag => (
                                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-primary/80 bg-primary/5 rounded-full border border-primary/10">
                                            <Tag className="w-2.5 h-2.5" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => toggleArticle(article.id)}
                                    className="flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                                >
                                    {expandedArticle === article.id ? (
                                        <>Read Less <ChevronUp className="w-4 h-4" /></>
                                    ) : (
                                        <>Read More <ChevronDown className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
