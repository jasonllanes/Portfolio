import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';
import mePhoto from '../../../assets/my_photo.png';

const SKILLS = [
    'React JS', 'Flutter', 'Java', 'Dart', 'JavaScript',
    'HTML', 'CSS', 'MySQL', 'PostgreSQL', 'Firebase',
    'Git', 'GitHub', 'Figma', 'Playwright', 'Jira',
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
                        <div className="relative  md:w-full h-72 rounded-[20px] overflow-hidden border border-[var(--border)] shadow-lg">
                            <img
                                src={mePhoto}
                                alt="Jason S. Llanes"
                                className="w-full h-full object-cover object-top"
                            />
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
                            subtitle="An IT graduate driven by problem-solving, innovation, and building real-world solutions that make a difference."
                        />

                        <div className="flex flex-col gap-3 reveal">
                            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[1.8]">
                                Hi! I'm <strong className="text-[var(--text-primary)] font-semibold">Jason S. Llanes</strong>, an IT professional based in{' '}
                                <strong className="text-[var(--text-primary)] font-semibold">Cagayan de Oro City, Philippines</strong>. I specialize in
                                front-end development, mobile development, and quality assurance — with experience across both private and government sectors.
                            </p>
                            <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[1.8]">
                                Equipped with a Bachelor's in Information Technology (<em>Magna Cum Laude</em>), I bring a blend of technical depth
                                and a quality-assurance mindset to every project. I'm driven by continuous learning and always pursuing growth
                                across development, testing, and emerging technologies.
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

                        <div className="reveal delay-3 flex flex-wrap gap-3">
                            <a
                                href="https://drive.google.com/uc?export=download&id=1Xk0KJ7F_35L8lGTV40PN44N-3UAXP8a-"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                <Button variant="primary" size="md">
                                    Download Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                        <polyline points="7 10 12 15 17 10" />
                                        <line x1="12" y1="15" x2="12" y2="3" />
                                    </svg>
                                </Button>
                            </a>
                            <a
                                href="https://github.com/jasonllanes"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Button variant="outline" size="md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.204 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                                    </svg>
                                    GitHub
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
