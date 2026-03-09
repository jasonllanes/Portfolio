import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Card from '../../../components/common/Card';
import { cn } from '../../../lib/utils';

// Load all project screenshots via Vite glob (handles bracket/space chars in filenames)
const allProjectImages = import.meta.glob('../../../assets/projects/*.png', {
    eager: true,
    query: '?url',
    import: 'default',
}) as Record<string, string>;

const img = (filename: string): string =>
    allProjectImages[`../../../assets/projects/${filename}`] ?? '';

type Category = 'all' | 'web' | 'mobile' | 'freelance' | 'competition';

interface Project {
    title: string;
    description: string;
    tags: string[];
    category: Category;
    type: string;
    status: string;
    org: string;
    images: string[];
    links: { demo: string | null; github: string | null };
}

const PROJECTS: Project[] = [
    {
        title: 'eFAS — Electronic Financial Accounting System',
        description:
            'A government web system built for DICT Misamis Oriental featuring two portals: NTCA Balance monitoring with quarterly tracking across Personnel Services and Special Programs, and an RAOD records portal. Integrates live Google Sheets for real-time data sync, includes a request scheduling module with search and filtering, and one-click PDF export for business reports.',
        tags: ['React JS', 'Google Sheets API', 'PDF Export', 'Government', 'Financial System'],
        category: 'web',
        type: 'Government',
        status: 'Live',
        org: 'Dept. of Information & Communications Technology',
        images: [
            img('[Web]eFAS_Dark_2.png'),
            img('[Web]eFAS_Dark.png'),
            img('[Web]eFAS.png'),
            img('[Web]eFAS_2.png'),
            img('[Web]eFAS_Report.png'),
            img('eFAS_3.png'),
        ].filter(s => s.length > 0),
        links: { demo: null, github: null },
    },
    {
        title: 'Smart Roster',
        description:
            'A web-based HR and workforce management system featuring a live map deployment view that tracks employee field locations across the Philippines using interactive Leaflet maps. Includes daily time record management, table status monitoring, user management, audit trail logging, and configurable system settings.',
        tags: ['React JS', 'Leaflet Maps', 'HR System', 'Web App', 'Real-time'],
        category: 'web',
        type: 'Company',
        status: 'Live',
        org: 'Antimony Technologies',
        images: [
            img('[Web]SmartRooster.png'),
            img('[Web]SmartRooster_2.png'),
        ].filter(s => s.length > 0),
        links: { demo: null, github: null },
    },
    {
        title: 'Whipo — All-in-One Service Marketplace',
        description:
            'A full-featured service marketplace platform available on both web and mobile. Connects service seekers with trusted providers across categories including Home & Property, Auto Care, Health & Wellness, Events & Celebration, and Pet Care. Features dual Seeker/Provider roles, service browsing, booking, and account management across all devices.',
        tags: ['React JS', 'Flutter', 'Mobile', 'Web App', 'Marketplace'],
        category: 'web',
        type: 'Company',
        status: 'Live',
        org: 'Antimony Technologies',
        images: [
            img('[Web, Mobile]whipo.png'),
            img('[Web,Mobile]whipo_2.png'),
        ].filter(s => s.length > 0),
        links: { demo: 'https://whipo.ph', github: null },
    },
    {
        title: 'Alive — Print Meets Reality',
        description:
            'A web platform for AR-enhanced print products including professional invitation cards, business cards, and custom prints. Users scan a printed card to unlock photos, videos, and 3D experiences — bridging physical print with digital augmented reality for a unique and memorable takeaway.',
        tags: ['React JS', 'Augmented Reality', 'Web App', 'AR'],
        category: 'web',
        type: 'Company',
        status: 'Live',
        org: 'Antimony Technologies',
        images: [img('[Web]Alive.png')].filter(s => s.length > 0),
        links: { demo: 'https://alive-flame.vercel.app', github: null },
    },
    {
        title: 'CyTech International Website',
        description:
            'Corporate website for CyTech International, a cybersecurity company specializing in Cyber Governance & Excellence. Built as Front-end Developer, implementing a modern multi-section site covering C4I-driven intelligence, governance frameworks, and operational excellence — positioning the brand as a global enterprise cybersecurity ecosystem.',
        tags: ['React JS', 'HTML', 'CSS', 'JavaScript', 'Corporate Web'],
        category: 'web',
        type: 'Company',
        status: 'Live',
        org: 'CyTech International',
        images: [img('[Web]CyTech.png')].filter(s => s.length > 0),
        links: { demo: 'https://cytechint.com', github: null },
    },
    {
        title: 'Oro Kalimpyo (OK) App',
        description:
            "An Android application built from scratch for Cagayan de Oro's MRF Cooperatives under CLENRO and UN Habitat. Part of a selected team after the City Matching stage of the Plastic 3R Hacks PH Hackathon, supporting sustainable waste management for the city.",
        tags: ['Android', 'Java', 'Firebase', 'Back-end', 'REST API'],
        category: 'freelance',
        type: 'Freelance',
        status: 'Delivered',
        org: 'CLENRO / UN Habitat',
        images: [],
        links: { demo: null, github: null },
    },
    {
        title: 'Panaghiusa Application',
        description:
            '"Panaghiusa" — Cebuano for Unity — is a mobile app built for the Google Solution Challenge, aligned with the UN SDG goal of Responsible Consumption and Production. Enables users to turn garbage into incentives. Led the team as Team Lead while contributing to Android and back-end development.',
        tags: ['Android', 'Java', 'Firebase', 'Back-end', 'SDG'],
        category: 'competition',
        type: 'Competition',
        status: 'Submitted',
        org: 'Google Developer Student Clubs',
        images: [img('[Web, Mobile]Panaghiusa.png')].filter(s => s.length > 0),
        links: { demo: 'https://panaghiusa.netlify.app', github: null },
    },
];

const TABS: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
    { label: 'Freelance', value: 'freelance' },
    { label: 'Competition', value: 'competition' },
];

// ── Carousel ─────────────────────────────────────────────────────────────────
const ProjectCarousel = ({ images, alt, isMobile }: { images: string[]; alt: string; isMobile: boolean }) => {
    const [idx, setIdx] = useState(0);

    if (images.length === 0) {
        return (
            <div
                className="w-full h-full flex flex-col items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-card-hover))' }}
            >
                <span className="text-5xl opacity-30">{isMobile ? '📱' : '🌐'}</span>
                <span className="text-[0.7rem] font-medium tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>
                    No Preview
                </span>
            </div>
        );
    }

    return (
        <div className="relative w-full h-full group overflow-hidden">
            <img
                src={images[idx]}
                alt={`${alt} ${idx + 1}`}
                className="w-full h-full object-cover object-top transition-opacity duration-300"
            />
            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + images.length) % images.length); }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xl leading-none text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        aria-label="Previous image"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % images.length); }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-xl leading-none text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ background: 'rgba(0,0,0,0.6)' }}
                        aria-label="Next image"
                    >
                        ›
                    </button>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {images.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                                className={cn(
                                    'w-2 h-2 rounded-full transition-colors duration-200 border-0 p-0',
                                    i === idx ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                                )}
                                aria-label={`Image ${i + 1}`}
                            />
                        ))}
                    </div>
                    <span className="absolute top-2 right-2 text-[0.65rem] font-semibold text-white/80 pointer-events-none"
                        style={{ background: 'rgba(0,0,0,0.5)', padding: '2px 6px', borderRadius: '9999px' }}>
                        {idx + 1}/{images.length}
                    </span>
                </>
            )}
        </div>
    );
};

// ── Main Component ────────────────────────────────────────────────────────────
const Projects = () => {
    const [activeTab, setActiveTab] = useState<Category>('all');
    const ref = useScrollAnimation();

    const filtered =
        activeTab === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

    const tagCls =
        'inline-block text-xs font-medium px-2.5 py-1 rounded-full border border-[var(--border)] text-[var(--accent-cyan)] bg-[rgba(34,211,238,0.08)] whitespace-nowrap';

    return (
        <section id="projects" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
                <SectionTitle
                    label="Portfolio"
                    title="My Projects"
                    subtitle="A selection of projects I've built — from web applications to mobile apps."
                    align="center"
                />

                {/* Tab Filter */}
                <div className="flex gap-2 mb-10 flex-wrap reveal">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.value;
                        const count =
                            tab.value === 'all'
                                ? PROJECTS.length
                                : PROJECTS.filter((p) => p.category === tab.value).length;
                        return (
                            <button
                                key={tab.value}
                                onClick={() => setActiveTab(tab.value)}
                                className={cn(
                                    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 border',
                                    isActive
                                        ? 'bg-[var(--accent-blue)] text-white border-[var(--accent-blue)]'
                                        : 'text-[var(--text-secondary)] border-[var(--border)] bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)]'
                                )}
                            >
                                {tab.label}
                                <span
                                    className={cn(
                                        'inline-flex items-center justify-center w-5 h-5 rounded-full text-[0.72rem] font-bold',
                                        isActive
                                            ? 'bg-[rgba(255,255,255,0.2)] text-white'
                                            : 'bg-[var(--bg-secondary)] text-[var(--text-muted)]'
                                    )}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid — key includes activeTab so cards remount on filter change and animation replays */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filtered.map((project, i) => (
                        <div
                            key={`${activeTab}-${project.title}`}
                            style={{ animation: 'fadeInUp 0.35s ease both', animationDelay: `${i * 0.07}s` }}
                        >
                            <Card hoverable className="p-0 overflow-hidden flex flex-col h-full">
                                {/* Carousel Thumbnail */}
                                <div className="relative h-48 overflow-hidden border-b border-[var(--border)]">
                                    <ProjectCarousel
                                        images={project.images}
                                        alt={project.title}
                                        isMobile={project.category === 'mobile' || project.category === 'freelance'}
                                    />
                                    <span className="absolute top-3 left-3 text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border bg-[rgba(129,140,248,0.15)] text-[var(--accent-violet)] border-[rgba(129,140,248,0.3)] z-10 pointer-events-none">
                                        {project.type}
                                    </span>
                                    <span className="absolute top-3 right-3 text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border bg-[rgba(34,197,94,0.15)] text-green-400 border-[rgba(34,197,94,0.3)] z-10 pointer-events-none">
                                        {project.status}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="flex flex-col gap-3 p-5 flex-1">
                                    <div>
                                        <h3 className="text-base font-bold text-[var(--text-primary)] m-0 mb-1">{project.title}</h3>
                                        <p className="text-[0.78rem] text-[var(--accent-cyan)] font-medium m-0">{project.org}</p>
                                    </div>
                                    <p className="text-[0.88rem] text-[var(--text-secondary)] leading-[1.7] m-0">{project.description}</p>

                                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className={tagCls}>{tag}</span>
                                        ))}
                                    </div>
                                    {project.links.demo && (
                                        <div className="pt-1">
                                            <a
                                                href={project.links.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--accent-blue)] text-white transition-all duration-300 hover:opacity-90"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Visit Site
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
