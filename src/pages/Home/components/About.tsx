import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';

const SKILLS = [
    'React', 'TypeScript', 'Node.js', 'React Native',
    'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Git',
    'Docker', 'Figma', 'Next.js', 'Express',
];

const tagCls =
    'inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--accent-cyan)] bg-[rgba(34,211,238,0.08)] whitespace-nowrap';

const About = () => {
    const ref = useScrollAnimation();
    return (
        <section id="about" ref={ref}>
            <div className="max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
                <div className="flex flex-col gap-10 md:grid md:grid-cols-[1fr_1.4fr] md:gap-16 md:items-start">

                    {/* Avatar */}
                    <div className="flex justify-center reveal-left">
                        <div className="relative w-60 h-72 bg-[var(--bg-card)] border border-[var(--border)] rounded-[20px] flex items-center justify-center text-sm text-[var(--text-muted)] overflow-hidden">
                            <span className="absolute text-[5rem] opacity-15">👤</span>
                            <span className="relative z-10">Your Photo</span>
                            <div
                                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-48 pointer-events-none"
                                style={{ background: 'radial-gradient(circle, var(--accent-blue) 0%, transparent 70%)', opacity: 0.25, filter: 'blur(30px)' }}
                            />
                        </div>
                    </div>

                    {/* Bio */}
                    <div className="flex flex-col gap-6">
                        <SectionTitle
                            label="About Me"
                            title="Who Am I?"
                            subtitle="A passionate developer who loves turning ideas into elegant, real-world solutions."
                        />

                        <div className="flex flex-col gap-3 reveal">
                            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[1.8]">
                                Hi! I'm <strong className="text-[var(--text-primary)] font-semibold">Your Name</strong>, a full-stack developer based in{' '}
                                <strong className="text-[var(--text-primary)] font-semibold">Your City, Country</strong>. I specialize in building modern,
                                high-performance web and mobile applications with a focus on clean code and great user experiences.
                            </p>
                            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[1.8]">
                                When I'm not coding, you'll find me exploring new technologies, contributing to open source,
                                or enjoying [your hobby here]. I'm always open to exciting opportunities and collaborations.
                            </p>
                        </div>

                        {/* Skills */}
                        <div className="reveal delay-2">
                            <p className="text-xs uppercase tracking-[0.1em] text-[var(--text-muted)] mb-3">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {SKILLS.map((skill) => (
                                    <span key={skill} className={tagCls}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="reveal delay-3">
                            <Button variant="primary" size="md">
                                Download Resume
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" y1="15" x2="12" y2="3" />
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
