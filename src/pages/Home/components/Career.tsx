import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';

const CAREER_ITEMS = [
    {
        role: 'Senior Frontend Developer',
        company: 'Company Name Here',
        period: 'Jan 2023 – Present',
        location: 'City, Country',
        description:
            'Led the frontend architecture for a SaaS platform serving 50k+ users. Mentored junior developers and drove adoption of modern React patterns.',
        tags: ['React', 'TypeScript', 'GraphQL', 'AWS'],
        current: true,
    },
    {
        role: 'Mid-Level Software Engineer',
        company: 'Another Company',
        period: 'Jun 2021 – Dec 2022',
        location: 'City, Country',
        description:
            'Built and maintained RESTful APIs and responsive web interfaces. Reduced page load time by 40% through performance optimization initiatives.',
        tags: ['Node.js', 'React', 'PostgreSQL', 'Docker'],
        current: false,
    },
    {
        role: 'Junior Web Developer',
        company: 'First Job Co.',
        period: 'Mar 2020 – May 2021',
        location: 'City, Country',
        description:
            'Developed client-facing landing pages and internal dashboards. Collaborated closely with designers to implement pixel-perfect UIs.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Vue.js'],
        current: false,
    },
];

const tagCls =
    'inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--accent-cyan)] bg-[rgba(34,211,238,0.08)] whitespace-nowrap';

const Career = () => {
    const ref = useScrollAnimation();
    return (
        <section id="career" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
                <SectionTitle
                    label="Experience"
                    title="My Career Journey"
                    subtitle="A timeline of the roles and companies that shaped my professional growth."
                />

                {/* career-timeline class supplies the ::before vertical line */}
                <div className="career-timeline flex flex-col gap-0">
                    {CAREER_ITEMS.map((item, i) => (
                        <div
                            key={i}
                            className={`relative pb-10 last:pb-0 reveal delay-${i + 1}`}
                        >
                            {/* Dot */}
                            <div className="absolute left-[-1.625rem] top-5 w-3.5 h-3.5 bg-[var(--accent-blue)] border-2 border-[var(--bg-secondary)] rounded-full z-10">
                                {item.current && <span className="career-dot-pulse" />}
                            </div>

                            {/* Card */}
                            <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 transition-all duration-300">
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{item.role}</h3>
                                        <p className="flex items-center gap-1.5 text-[0.88rem] text-[var(--accent-blue)] font-medium m-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                            </svg>
                                            {item.company}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-start sm:items-end gap-0.5">
                                        <span className="text-xs text-[var(--text-muted)]">{item.period}</span>
                                        <span className="text-xs text-[var(--text-muted)]">{item.location}</span>
                                        {item.current && (
                                            <span className="text-[0.7rem] font-semibold px-2 py-0.5 rounded-full bg-[rgba(79,142,247,0.15)] text-[var(--accent-blue)] border border-[var(--border)]">
                                                Current
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.75] mb-4">{item.description}</p>
                                <div className="flex flex-wrap gap-1.5">
                                    {item.tags.map((tag) => <span key={tag} className={tagCls}>{tag}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
