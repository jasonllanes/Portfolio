import { useEffect, useRef } from 'react';
import Button from '../../../components/common/Button';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        titleRef.current?.classList.add('hero__title--visible');
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-5 pt-24 pb-16 overflow-hidden text-center"
        >
            {/* Animated background blobs (keyframes live in index.css) */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="hero-blob hero-blob-1" />
                <div className="hero-blob hero-blob-2" />
                <div className="hero-blob hero-blob-3" />
            </div>

            <div className="hero-content relative z-10 max-w-[720px] flex flex-col items-center gap-4">
                <p className="text-base text-[var(--accent-cyan)] font-medium tracking-wide">
                    Hi there! 👋 I'm
                </p>

                <h1
                    ref={titleRef}
                    className="text-[clamp(2.8rem,8vw,5rem)] font-extrabold leading-tight m-0 inline-flex items-center"
                >
                    <span className="gradient-text">Your Name</span>
                    <span className="hero-cursor" aria-hidden="true" />
                </h1>

                <h2 className="text-[clamp(1rem,3vw,1.35rem)] font-medium text-[var(--text-secondary)] m-0">
                    Full-Stack Developer &amp; UI/UX Enthusiast
                </h2>

                <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-[580px] leading-[1.8]">
                    I craft clean, performant, and accessible digital experiences. Passionate about
                    building modern web &amp; mobile applications that make an impact.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mt-2">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        View My Work
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Contact Me
                    </Button>
                </div>

                {/* Stats */}
                <div className="flex items-center flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-[var(--border)] w-full">
                    {[
                        { value: 'X+', label: 'Years Experience' },
                        { value: 'XX+', label: 'Projects Shipped' },
                        { value: 'XX+', label: 'Happy Clients' },
                    ].map((stat, i) => (
                        <>
                            {i > 0 && <div key={`d${i}`} className="w-px h-10 bg-[var(--border)]" />}
                            <div key={stat.label} className="flex flex-col items-center gap-1">
                                <span className="text-[1.6rem] font-extrabold gradient-text">{stat.value}</span>
                                <span className="text-[0.78rem] text-[var(--text-muted)] uppercase tracking-[0.07em]">{stat.label}</span>
                            </div>
                        </>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center" aria-label="Scroll down">
                <span className="block w-[22px] h-9 border-2 border-[var(--border-hover)] rounded-full relative hero-scroll-dot" />
            </div>
        </section>
    );
};

export default Hero;
