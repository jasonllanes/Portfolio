import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Card from '../../../components/common/Card';

const EDUCATION = [
    {
        degree: "Bachelor's Degree in Information Technology",
        institution: 'STI College Cagayan de Oro City',
        period: '2018 – 2024',
        location: 'Cagayan de Oro City',
        description:
            'Graduated Magna Cum Laude with consistent Dean\'s List recognition. Served as GDSC Event Lead, organizing tech events for the developer community.',
        honors: 'Magna Cum Laude · Consistent Dean\'s Lister · Leadership Awardee · Former GDSC Event Lead',
    },
    {
        degree: 'High School Diploma – TVL: IT in Mobile App & Web Development (MAWD)',
        institution: 'Cagayan de Oro National High School',
        period: '2014 – 2018',
        location: 'Cagayan de Oro City',
        description:
            'Completed the Science, Technology, and Engineering (STE) Science Class track. Recognized for outstanding performance in ICT and exemplary technical skills.',
        honors: 'Consistent Honor Student · Conduct Awardee · Outstanding Performance in ICT · Best Technical Director & Editor',
    },
];

const RECOGNITIONS = [
    { name: 'Plastic 3R Hacks PH – City Matching Finalist', issuer: 'City of Cagayan de Oro / UN Habitat', year: '2023' },
    { name: 'Google Solution Challenge Participant', issuer: 'Google Developer Student Clubs', year: '2023' },
    { name: 'GDSC Event Lead', issuer: 'Google Developer Student Clubs – STI CDO', year: '2022' },
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

                    {/* Recognitions & Achievements */}
                    <div className="reveal delay-2">
                        <h3 className="text-base font-bold text-[var(--text-primary)] mb-4 pb-2 border-b border-[var(--border)]">
                            Recognitions &amp; Achievements
                        </h3>
                        <div className="flex flex-col gap-3">
                            {RECOGNITIONS.map((item, i) => (
                                <Card key={i} hoverable className="flex items-center gap-3 p-4">
                                    <div className="flex-shrink-0 w-9 h-9 bg-[rgba(129,140,248,0.12)] rounded-lg flex items-center justify-center text-[var(--accent-violet)]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="7" />
                                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-[0.88rem] font-semibold text-[var(--text-primary)] m-0 mb-0.5">{item.name}</p>
                                        <p className="text-[0.78rem] text-[var(--text-muted)] m-0">{item.issuer} · {item.year}</p>
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
