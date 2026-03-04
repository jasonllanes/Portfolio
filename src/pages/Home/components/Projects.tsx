import { useState } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Card from '../../../components/common/Card';
import Button from '../../../components/common/Button';
import { cn } from '../../../lib/utils';

type Category = 'all' | 'web' | 'mobile';

const PROJECTS = [
    {
        title: 'E-Commerce Web App',
        description:
            'A full-featured online store built with React, Node.js, and PostgreSQL. Supports authentication, cart management, and Stripe payments.',
        tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        category: 'web' as const,
        status: 'Live',
        image: null,
        links: { demo: '#', github: '#' },
    },
    {
        title: 'Fitness Tracker App',
        description:
            'A cross-platform mobile app built with React Native that allows users to log workouts, track progress, and set fitness goals.',
        tags: ['React Native', 'Expo', 'Firebase'],
        category: 'mobile' as const,
        status: 'Live',
        image: null,
        links: { demo: '#', github: '#' },
    },
    {
        title: 'Project Management Dashboard',
        description:
            'A Kanban-style project management tool with real-time updates, drag-and-drop, and team collaboration features.',
        tags: ['Next.js', 'TypeScript', 'Prisma', 'WebSockets'],
        category: 'web' as const,
        status: 'In Progress',
        image: null,
        links: { demo: '#', github: '#' },
    },
    {
        title: 'Food Delivery Mobile App',
        description:
            'A feature-rich mobile app with geolocation-based restaurant discovery, real-time order tracking, and in-app payments.',
        tags: ['React Native', 'Redux', 'Google Maps API'],
        category: 'mobile' as const,
        status: 'Live',
        image: null,
        links: { demo: '#', github: '#' },
    },
    {
        title: 'Personal Blog Platform',
        description:
            'A headless CMS-powered blog with MDX support, syntax highlighting, SEO optimization, and a clean minimalist design.',
        tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
        category: 'web' as const,
        status: 'Live',
        image: null,
        links: { demo: '#', github: '#' },
    },
    {
        title: 'Chat Messenger App',
        description:
            'A real-time mobile chat app supporting group chats, media sharing, read receipts, and push notifications.',
        tags: ['React Native', 'Socket.io', 'Node.js', 'MongoDB'],
        category: 'mobile' as const,
        status: 'In Progress',
        image: null,
        links: { demo: '#', github: '#' },
    },
];

const TABS: { label: string; value: Category }[] = [
    { label: 'All', value: 'all' },
    { label: 'Web', value: 'web' },
    { label: 'Mobile', value: 'mobile' },
];

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

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, i) => (
                        <Card
                            key={`${project.title}-${i}`}
                            hoverable
                            className={cn('p-0 overflow-hidden flex flex-col', `reveal delay-${Math.min(i + 1, 5)}`)}
                        >
                            {/* Thumbnail */}
                            <div className="relative h-40 bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-card-hover)] border-b border-[var(--border)] flex items-center justify-center">
                                <span className="text-4xl">{project.category === 'mobile' ? '📱' : '🌐'}</span>
                                <span
                                    className={cn(
                                        'absolute top-3 right-3 text-[0.72rem] font-semibold px-2 py-0.5 rounded-full border',
                                        project.status === 'Live'
                                            ? 'bg-[rgba(34,197,94,0.15)] text-green-400 border-[rgba(34,197,94,0.3)]'
                                            : 'bg-[rgba(251,191,36,0.12)] text-yellow-400 border-[rgba(251,191,36,0.3)]'
                                    )}
                                >
                                    {project.status}
                                </span>
                            </div>

                            {/* Body */}
                            <div className="flex flex-col gap-3 p-5 flex-1">
                                <h3 className="text-base font-bold text-[var(--text-primary)] m-0">{project.title}</h3>
                                <p className="text-[0.88rem] text-[var(--text-secondary)] leading-[1.7] m-0">{project.description}</p>

                                <div className="flex flex-wrap gap-1.5">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className={tagCls}>{tag}</span>
                                    ))}
                                </div>

                                <div className="flex gap-2 mt-auto pt-2">
                                    <a
                                        href={project.links.demo}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[var(--accent-blue)] text-white transition-all duration-300 hover:opacity-90"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-[var(--border)] text-[var(--text-secondary)] bg-transparent transition-all duration-300 hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.204 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
                                        </svg>
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center mt-12 reveal">
                    <Button variant="outline" size="lg">
                        View All Projects
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
