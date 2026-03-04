import { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../context/ThemeContext';

const NAV_LINKS = [
    { label: 'About', href: '#about' },
    { label: 'Career', href: '#career' },
    { label: 'Education', href: '#education' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handle = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handle, { passive: true });
        return () => window.removeEventListener('scroll', handle);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header
            className={cn(
                'fixed top-0 inset-x-0 z-50 bg-[var(--bg-navbar)] backdrop-blur-md transition-all duration-300',
                scrolled
                    ? 'border-b border-[var(--border)] shadow-[var(--shadow-md)]'
                    : 'border-b border-transparent'
            )}
        >
            <nav className="flex items-center justify-between max-w-[1100px] mx-auto px-5 py-4">
                {/* Logo */}
                <a href="#hero" onClick={closeMenu} className="text-xl font-bold flex items-center gap-0.5 text-[var(--text-primary)] no-underline">
                    <span className="gradient-text">{'<'}</span>
                    <span>YourName</span>
                    <span className="gradient-text">{' />'}</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex list-none gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="block px-3 py-1.5 text-sm font-medium text-[var(--text-secondary)] rounded-lg transition-all duration-300 hover:text-[var(--text-primary)] hover:bg-[var(--border)] no-underline"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Right Controls */}
                <div className="flex items-center gap-2">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex items-center justify-center w-9 h-9 rounded-full text-[var(--text-secondary)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:text-[var(--accent-blue)] hover:border-[var(--accent-blue)] hover:shadow-[var(--shadow-glow)] cursor-pointer"
                    >
                        {theme === 'dark' ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="5" />
                                <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
                                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                                <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
                                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>

                    {/* Hamburger â€” mobile only */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                        className="md:hidden flex flex-col justify-center gap-[5px] w-9 h-9 p-1.5 rounded-lg text-[var(--text-secondary)] border border-[var(--border)] bg-[var(--bg-card)] transition-all duration-300 hover:border-[var(--accent-blue)] cursor-pointer"
                    >
                        <span className={cn('block h-0.5 bg-current rounded-sm transition-all duration-300', menuOpen && 'translate-y-[7px] rotate-45')} />
                        <span className={cn('block h-0.5 bg-current rounded-sm transition-all duration-300', menuOpen && 'opacity-0')} />
                        <span className={cn('block h-0.5 bg-current rounded-sm transition-all duration-300', menuOpen && '-translate-y-[7px] -rotate-45')} />
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    'md:hidden overflow-hidden transition-all duration-300',
                    menuOpen
                        ? 'max-h-96 py-3 border-t border-[var(--border)]'
                        : 'max-h-0'
                )}
            >
                <ul className="list-none px-5 flex flex-col gap-1">
                    {NAV_LINKS.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={closeMenu}
                                className="block px-4 py-3 text-[var(--text-secondary)] text-base font-medium rounded-lg transition-all duration-300 hover:text-[var(--text-primary)] hover:bg-[var(--border)] no-underline"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
