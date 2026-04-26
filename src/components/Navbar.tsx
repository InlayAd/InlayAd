import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleScroll = (id: string) => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        setMobileMenuOpen(false);
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 100);
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    return (
        <>
            <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <nav
                    aria-label="Main navigation"
                    className="w-full max-w-5xl bg-black/80 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl pointer-events-auto flex items-center justify-between"
                    style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.06), 0 8px 32px rgba(0,0,0,0.8)' }}
                >
                    <button onClick={scrollToTop} className="flex items-center outline-none shrink-0 pl-1">
                        <img src="/logo_dark-nobg.png" alt="InlayAd Logo" className="h-7 md:h-8 hover:opacity-80 transition-opacity" />
                    </button>

                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-7">
                        <button onClick={scrollToTop} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Home
                        </button>
                        <button onClick={() => handleScroll('features')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Features
                        </button>
                        <Link to="/research" className="text-sm font-medium text-gray-400 hover:text-sky-400 transition-colors">
                            Research
                        </Link>
                        <Link to="/blog" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Blog
                        </Link>
                        <button onClick={() => handleScroll('founders')} className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                            Founder
                        </button>
                    </div>

                    <div className="flex items-center shrink-0 gap-2">
                        <button
                            onClick={() => handleScroll('waitlist')}
                            className="hidden sm:flex items-center gap-2 px-5 py-2 bg-sky-400 text-black text-sm font-black rounded-lg transition-all hover:bg-sky-300"
                            style={{ boxShadow: '3px 3px 0px rgba(56,189,248,0.4)' }}
                            onMouseOver={e => (e.currentTarget.style.transform = 'translate(1px,1px)', e.currentTarget.style.boxShadow = '2px 2px 0px rgba(56,189,248,0.4)')}
                            onMouseOut={e => (e.currentTarget.style.transform = '', e.currentTarget.style.boxShadow = '3px 3px 0px rgba(56,189,248,0.4)')}
                        >
                            Get Access
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 text-white hover:text-sky-400 transition-colors"
                            aria-label="Toggle mobile menu"
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </nav>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
                            onClick={() => setMobileMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="fixed top-20 left-4 right-4 z-50 bg-black border border-white/10 rounded-2xl p-6 shadow-2xl"
                            style={{ boxShadow: '0 0 0 1px rgba(56,189,248,0.08), 0 16px 48px rgba(0,0,0,0.9)' }}
                        >
                            <div className="flex flex-col gap-1">
                                {[
                                    { label: 'Home', action: scrollToTop },
                                    { label: 'Features', action: () => handleScroll('features') },
                                    { label: 'How It Works', action: () => handleScroll('how-it-works') },
                                    { label: 'Blog', link: '/blog' },
                                    { label: 'Research', link: '/research' },
                                    { label: 'Founder', action: () => handleScroll('founders') },
                                ].map(item => (
                                    <div key={item.label}>
                                        {item.link ? (
                                            <Link
                                                to={item.link}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className="block text-left text-base font-medium text-gray-300 hover:text-sky-400 transition-colors py-3 border-b border-white/5"
                                            >
                                                {item.label}
                                            </Link>
                                        ) : (
                                            <button
                                                onClick={item.action}
                                                className="w-full text-left text-base font-medium text-gray-300 hover:text-white transition-colors py-3 border-b border-white/5"
                                            >
                                                {item.label}
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => handleScroll('waitlist')}
                                    className="mt-4 w-full py-3.5 bg-sky-400 text-black font-black rounded-xl transition-all hover:bg-sky-300 text-sm"
                                    style={{ boxShadow: '3px 3px 0px rgba(56,189,248,0.4)' }}
                                >
                                    Get Early Access
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
