import { Link, useNavigate } from 'react-router-dom';
import { Mail, Linkedin, Globe, ArrowUpRight } from 'lucide-react';

export function Footer() {
    const navigate = useNavigate();

    const scrollTo = (id: string) => {
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="border-t border-card-border bg-black">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    <div className="md:col-span-2 space-y-4">
                        <img src="/logo_dark-nobg.png" alt="InlayAd" className="h-8" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            <strong className="text-white">InlayAd</strong> is the AI advertising network.
                            Serving precision-targeted ads inside AI apps, chatbots, and websites
                            — powered by Probabilistic AI Memory (UMP).
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://devanshv17.github.io" target="_blank" rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-400 transition-colors" aria-label="Portfolio">
                                <Globe className="w-5 h-5" />
                            </a>
                            <a href="mailto:devanshv22@iitk.ac.in"
                                className="text-gray-500 hover:text-sky-400 transition-colors" aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="https://www.linkedin.com/in/devanshv17/" target="_blank" rel="noopener noreferrer"
                                className="text-gray-500 hover:text-sky-400 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Product</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <button onClick={() => scrollTo('features')} className="text-gray-400 hover:text-white transition-colors">
                                    Features
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollTo('how-it-works')} className="text-gray-400 hover:text-white transition-colors">
                                    How It Works
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollTo('waitlist')} className="text-gray-400 hover:text-white transition-colors">
                                    Get Early Access
                                </button>
                            </li>
                            <li>
                                <Link to="/research" className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1">
                                    Research <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-gray-500">Resources</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/research" className="text-gray-400 hover:text-white transition-colors">
                                    UMP Research
                                </Link>
                            </li>
                            <li>
                                <a href="https://zenodo.org/records/19423177" target="_blank" rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-sky-400 transition-colors flex items-center gap-1">
                                    Preprint (Zenodo) <ArrowUpRight className="w-3 h-3" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:devanshv22@iitk.ac.in" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-card-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-600 text-sm">
                        &copy; {new Date().getFullYear()} InlayAd. All rights reserved.
                    </p>
                    <p className="text-gray-600 text-xs">
                        Built at <span className="text-gray-500">IIT Kanpur</span> · DOI{' '}
                        <a href="https://zenodo.org/records/19423177" target="_blank" rel="noopener noreferrer"
                            className="text-gray-500 hover:text-sky-400 transition-colors">
                            10.5281/zenodo.19423177
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
