import { useState, type FormEvent } from 'react';
import { useScrollAnimation } from '../../../hooks/useScrollAnimation';
import SectionTitle from '../../../components/common/SectionTitle';
import Button from '../../../components/common/Button';

const CONTACT_INFO = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        ),
        label: 'Email',
        value: 'your.email@example.com',
        href: 'mailto:your.email@example.com',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 5 2 2 0 0 1 3.62 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 17v-.08z" />
            </svg>
        ),
        label: 'Phone',
        value: '+63 (xxx) xxx-xxxx',
        href: 'tel:+63xxxxxxxxxx',
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
        label: 'Location',
        value: 'City, Country',
        href: '#',
    },
];

const Contact = () => {
    const ref = useScrollAnimation();
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // TODO: Integrate with email service (EmailJS, formspree, etc.)
        console.log('Form submitted:', form);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    const inputCls =
        'w-full px-4 py-3 text-sm text-[var(--text-primary)] bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg outline-none transition-all duration-300 focus:border-[var(--accent-blue)] focus:shadow-[0_0_0_3px_rgba(79,142,247,0.15)] placeholder:text-[var(--text-muted)] resize-y font-[inherit]';
    const labelCls = 'text-xs font-semibold text-[var(--text-secondary)] tracking-wide';

    return (
        <section id="contact" ref={ref}>
            <div className="max-w-[1100px] mx-auto px-5 py-20 md:py-24 lg:py-28">
                <SectionTitle
                    label="Get In Touch"
                    title="Contact Me"
                    subtitle="Have a project in mind or just want to say hello? My inbox is always open."
                    align="center"
                />

                <div className="flex flex-col gap-10 md:grid md:grid-cols-[1fr_1.4fr] md:gap-12 md:items-start">
                    {/* Left – info */}
                    <div className="flex flex-col gap-6 reveal-left">
                        <p className="text-sm md:text-base text-[var(--text-secondary)] leading-[1.8]">
                            I'm currently open to new opportunities and freelance projects. Whether you have a
                            question, a collaboration idea, or just want to connect — feel free to reach out!
                        </p>

                        <div className="flex flex-col gap-3">
                            {CONTACT_INFO.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-4 no-underline bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-4 transition-all duration-300 hover:border-[var(--border-hover)] hover:shadow-[var(--shadow-glow)]"
                                >
                                    <span className="flex-shrink-0 w-10 h-10 bg-[rgba(79,142,247,0.1)] border border-[var(--border)] rounded-lg flex items-center justify-center text-[var(--accent-blue)]">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <p className="text-[0.75rem] uppercase tracking-[0.08em] text-[var(--text-muted)] m-0 mb-0.5">{item.label}</p>
                                        <p className="text-sm font-medium text-[var(--text-primary)] m-0">{item.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right – form */}
                    <form
                        className="flex flex-col gap-5 bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-6 reveal-right"
                        onSubmit={handleSubmit}
                    >
                        {submitted && (
                            <div className="contact-success px-4 py-3 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] text-green-400 rounded-lg text-sm font-medium">
                                ✅ Message sent! I'll get back to you soon.
                            </div>
                        )}

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className={labelCls}>Full Name</label>
                                <input id="name" type="text" placeholder="John Doe" className={inputCls}
                                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className={labelCls}>Email Address</label>
                                <input id="email" type="email" placeholder="john@example.com" className={inputCls}
                                    value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                            </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="subject" className={labelCls}>Subject</label>
                            <input id="subject" type="text" placeholder="Project Inquiry" className={inputCls}
                                value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
                        </div>

                        <div className="flex flex-col gap-1.5">
                            <label htmlFor="message" className={labelCls}>Message</label>
                            <textarea id="message" rows={5} placeholder="Tell me about your project..." className={inputCls}
                                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
                        </div>

                        <Button variant="primary" size="lg" fullWidth type="submit">
                            Send Message
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13" />
                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                            </svg>
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
