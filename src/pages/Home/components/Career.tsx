import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';

const CAREER_ITEMS = [
    {
        role: 'Information System Analyst II',
        company: 'Department of Information and Communications Technology',
        period: 'Current',
        location: 'Misamis Oriental',
        type: 'Job Order',
        bullets: [
            'Developing and building systems based on internal operational needs of the agency.',
            'Providing quality assurance to existing and newly developed systems by the DICT Central Office.',
        ],
        tags: ['Systems Development', 'Quality Assurance', 'Government', 'QA Testing'],
        current: true,
    },
    {
        role: 'Software Engineer',
        company: 'Antimony Technologies',
        period: 'Current',
        location: 'Cagayan de Oro City',
        type: 'Full-Time',
        bullets: [
            'Working as a front-end and mobile developer across multiple types of projects and systems.',
        ],
        tags: ['React JS', 'Flutter', 'Mobile Development', 'Front-end Development'],
        current: true,
    },
    {
        role: 'Front-end Developer',
        company: 'CyTech International',
        period: '2023 – 2024',
        location: 'Cagayan de Oro City',
        type: 'Full-Time',
        bullets: [
            'Absorbed into the company after OJT and transitioned to a full-time front-end developer role.',
            'Built and maintained responsive web interfaces for the company\'s SaaS software system.',
        ],
        tags: ['React JS', 'HTML', 'CSS', 'JavaScript', 'SaaS'],
        current: false,
    },
    {
        role: 'Quality Assurance (QA Tester)',
        company: 'CyTech International',
        period: '2021 – 2023',
        location: 'Cagayan de Oro City',
        type: 'OJT',
        bullets: [
            'Performed comprehensive manual testing on the company\'s SaaS software system.',
            'Identified, documented, and tracked defects to ensure software quality standards were met.',
        ],
        tags: ['Manual Testing', 'QA', 'SaaS', 'Bug Tracking'],
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
                                        <div className="flex gap-1.5 flex-wrap justify-end">
                                            {item.current && (
                                                <span className="text-[0.7rem] font-semibold px-2 py-0.5 rounded-full bg-[rgba(79,142,247,0.15)] text-[var(--accent-blue)] border border-[var(--border)]">
                                                    Current
                                                </span>
                                            )}
                                            <span className="text-[0.7rem] font-semibold px-2 py-0.5 rounded-full bg-[rgba(129,140,248,0.12)] text-[var(--accent-violet)] border border-[var(--border)]">
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <ul className="list-none p-0 m-0 mb-4 flex flex-col gap-1.5">
                                    {item.bullets.map((b, bi) => (
                                        <li key={bi} className="flex items-start gap-2 text-[0.9rem] text-[var(--text-secondary)] leading-[1.75]">
                                            <span className="mt-[0.45em] flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
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
