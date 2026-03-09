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
                    <span className="gradient-text">Jason Llanes</span>
                    <span className="hero-cursor" aria-hidden="true" />
                </h1>

                <h2 className="text-[clamp(1rem,3vw,1.35rem)] font-medium text-[var(--text-secondary)] m-0">
                    Software Engineer &amp; Mobile Developer &amp; QA Engineer
                </h2>

                <p className="text-sm md:text-base text-[var(--text-secondary)] max-w-[580px] leading-[1.8]">
                    IT professional with hands-on experience in front-end development, mobile development,
                    and quality assurance. Building solutions that positively impact people and organizations.
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
                    <a
                        href="https://github.com/jasonllanes"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline" size="lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.204 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                            </svg>
                            GitHub
                        </Button>
                    </a>
                </div>

                {/* Stats */}
                <div className="flex items-center flex-wrap justify-center gap-6 mt-6 pt-6 border-t border-[var(--border)] w-full">
                    {[
                        { value: '4+', label: 'Years Experience' },
                        { value: '20+', label: 'Notable Projects' },
                        { value: '4', label: 'Companies Worked' },
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
