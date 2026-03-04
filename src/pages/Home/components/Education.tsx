import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Card from '../../../components/common/Card';

const EDUCATION = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University Name Here',
        period: '2016 – 2020',
        location: 'City, Country',
        description:
            'Graduated with honors. Focused on software engineering, algorithms, and data structures. Active member of the university coding club.',
        honors: "Dean's List, Best Thesis Award",
    },
    {
        degree: 'High School Diploma – STEM Track',
        institution: 'School Name Here',
        period: '2012 – 2016',
        location: 'City, Country',
        description:
            'Completed STEM curriculum with distinction. Participated in regional programming competitions and mathematics olympiads.',
        honors: 'Valedictorian',
    },
];

const CERTIFICATIONS = [
    { name: 'AWS Certified Developer – Associate', issuer: 'Amazon Web Services', year: '2023' },
    { name: 'Professional Scrum Master I (PSM I)', issuer: 'Scrum.org', year: '2022' },
    { name: 'Meta Front-End Developer Certificate', issuer: 'Coursera / Meta', year: '2022' },
];

const Education = () => {
    const ref = useScrollAnimation();
    return (
        <section id="education" ref={ref}>
            <div className="max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
                <SectionTitle
                    label="Education"
                    title="Academic Background"
                    subtitle="The foundations that built my technical expertise and problem-solving mindset."
                />

                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-14 lg:items-start">

                    {/* Degrees */}
                    <div className="flex flex-col gap-6">
                        {EDUCATION.map((edu, i) => (
                            <div key={i} className={`flex gap-4 items-start reveal delay-${i + 1}`}>
                                <div className="flex-shrink-0 mt-1 w-11 h-11 bg-[rgba(79,142,247,0.1)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--accent-blue)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                        <path d="M6 12v5c3 3 9 3 12 0v-5" />
                                    </svg>
                                </div>
                                <div className="flex-1 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-5">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">{edu.degree}</h3>
                                            <p className="text-[0.88rem] text-[var(--accent-cyan)] font-medium m-0">{edu.institution}</p>
                                        </div>
                                        <div className="flex flex-col items-start sm:items-end gap-0.5">
                                            <span className="text-xs text-[var(--text-muted)]">{edu.period}</span>
                                            <span className="text-xs text-[var(--text-muted)]">{edu.location}</span>
                                        </div>
                                    </div>
                                    <p className="text-[0.9rem] text-[var(--text-secondary)] leading-[1.75] mb-2">{edu.description}</p>
                                    {edu.honors && (
                                        <p className="text-[0.83rem] text-[var(--accent-violet)] font-medium">🏆 {edu.honors}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="reveal delay-2">
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border)]">
                            Certifications
                        </h3>
                        <div className="flex flex-col gap-3">
                            {CERTIFICATIONS.map((cert, i) => (
                                <Card key={i} hoverable className="flex items-center gap-3 p-4">
                                    <div className="flex-shrink-0 w-9 h-9 bg-[rgba(129,140,248,0.12)] rounded-lg flex items-center justify-center text-[var(--accent-violet)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="7" />
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[0.88rem] font-semibold text-[var(--text-primary)] m-0 mb-0.5">{cert.name}</p>
                                        <p className="text-[0.78rem] text-[var(--text-muted)] m-0">{cert.issuer} · {cert.year}</p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
