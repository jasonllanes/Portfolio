import { cn } from '../../lib/utils';

interface SectionTitleProps {
    label?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

const SectionTitle = ({ label, title, subtitle, align = 'left' }: SectionTitleProps) => (
    <div className={cn('mb-12 reveal', align === 'center' && 'text-center')}>
        {label && (
            <span className="block text-xs font-semibold tracking-[0.12em] uppercase text-[var(--accent-cyan)] mb-2">
                {label}
            </span>
        )}
        <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-[var(--text-primary)] mb-3">
            {title}
        </h2>
        {subtitle && (
            <p
                className={cn(
                    'text-base text-[var(--text-secondary)] leading-relaxed max-w-[560px]',
                    align === 'center' && 'mx-auto'
                )}
            >
                {subtitle}
            </p>
        )}
    </div>
);

export default SectionTitle;
